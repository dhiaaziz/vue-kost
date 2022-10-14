<template>
  <!-- <span>search value: </span>
  <input v-model="searchValue" type="text" /> -->

  <div class="mb-4 me-2 card">
    <div class="pb-0 card-header d-flex justify-content-between">
      <h6>Pembayaran table</h6>
    </div>
    <!-- button and search section -->
    <div class="pt-4 pb-3 container-fluid">
      <div class="row justify-content-between">
        <div class="col-md-8">
          <div class="gap-2 d-grid d-md-block">
            <router-link
              :to="{ name: 'Input Pembayaran' }"
              class="btn btn-sm btn-primary me-2"
            >
              Tambah Pembayaran <span class="">+</span>
            </router-link>
            <button
              class="btn btn-sm btn-secondary me-2"
              data-original-title="Export to Excel"
              data-bs-toggle="modal"
              :data-bs-target="'#exportModal'"
            >
              Export ke Excel
            </button>
          </div>
        </div>
        <div class="mt-4 mt-md-0 col-12 col-md-4">
          <search-component
            v-model="searchValue"
            :placeholder="'Cari Pembayaran...'"
            @search="handleSearch"
          />
        </div>
      </div>
    </div>
    <!-- end-button and search section  -->
    <div class="px-0 pt-0 pb-2 card-body">
      <div class="px-4 pb-8 table-responsive">
        <easy-data-table
          class=""
          show-index
          buttons-pagination
          :search-field="searchField"
          :search-value="searchValue"
          :headers="headers"
          :items="itemList"
          :loading="loading"
        >
          <template #loading>
            <img
              src="https://i.pinimg.com/originals/94/fd/2b/94fd2bf50097ade743220761f41693d5.gif"
              style="width: 100px; height: 80px"
            />
          </template>
          <template #item-start_kos="{ start_kos, end_kos }">
            <span class="">
              <!-- {{ item }} -->
              {{ start_kos }} - {{ end_kos }}
            </span>
          </template>
          <template #item-payment="{ payment_reformat }">
            <span class="">
              <!-- {{ item }} -->
              {{ payment_reformat }}
            </span>
          </template>

          <template #item-actions="item">
            <!-- <router-link
              class="px-3 py-1 mx-1 my-2 btn btn-secondary btn-sm"
              :to="{ name: 'Edit Pembayaran', params: { id: item.id } }"
              >Edit
            </router-link> -->
            <!-- <router-link
              v-if="item.status !== 'admin'"
              :to="{ name: 'Detail Pembayaran', params: { id: item.id } }"
              class="px-3 py-1 mx-1 my-2 btn btn-info btn-sm"
              data-toggle="tooltip"
              data-original-title="Edit Bangunan"
              >Detail</router-link
            > -->
            <router-link
              v-if="item.status !== 'admin'"
              :to="{ name: 'Edit Pembayaran', params: { id: item.history_id } }"
              class="px-3 py-1 mx-1 my-2 btn btn-secondary btn-sm"
              data-toggle="tooltip"
              data-original-title="Edit Bangunan"
              >Edit</router-link
            >
            <a
              class="px-3 py-1 mx-1 my-2 btn btn-danger btn-sm"
              :data-bs-target="'#' + deleteModal.modalId"
              data-toggle="tooltip"
              data-original-title="Delete user"
              data-bs-toggle="modal"
              @click="setDeleteData(item)"
              >Delete</a
            >
          </template>
        </easy-data-table>
      </div>
    </div>
  </div>

  <modal-component
    :modal-id="deleteModal.modalId"
    :modal-title="'Hapus Pembayaran'"
  >
    <template #modal-body>
      <p>Detail Data:</p>
      <ul>
        <li>Id Tagihan: {{ deleteModal.history_id }}</li>
        <li>Tanggal Bayar: {{ deleteModal.date }}</li>
        <li>Email: {{ deleteModal.email }}</li>
        <li>Name: {{ deleteModal.username }}</li>
        <li>Name: {{ deleteModal.payment }}</li>
      </ul>
      <p>Apakah anda yakin ingin menghapus pembayaran dengan data tersebut?</p>
    </template>
    <template #modal-footer>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        @click="resetDeleteData"
      >
        Batal
      </button>
      <button
        type="button"
        class="btn btn-danger"
        :disabled="deleteModal.isLoading"
        data-bs-dismiss="modal"
        @click="handleDelete(deleteModal.id)"
      >
        <span
          v-if="deleteModal.isLoading"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span v-else>Hapus</span>
      </button>
    </template>
  </modal-component>

  <!-- Modal Export -->
  <modal-component :modal-id="'exportModal'" :modal-title="'Export ke Excel'">
    <template #modal-body>
      <p>Export data ke excel</p>
    </template>
    <template #modal-footer>
      <button
        type="button"
        class="btn btn-secondary"
        data-bs-dismiss="modal"
        @click="resetDeleteData"
      >
        Batal
      </button>
      <button
        type="button"
        class="btn btn-primary"
        :disabled="deleteModal.isLoading"
        data-bs-dismiss="modal"
        @click="handleExportXlsx()"
      >
        <span
          v-if="deleteModal.isLoading"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span v-else>Export</span>
      </button>
    </template>
  </modal-component>
</template>

<script setup>
import { ref, reactive, defineEmits } from "vue";

// import priceFormatter from "@/utils/priceFormatter";
import dateFormatter from "@/utils/dateFormatter";

import { IP_BACKEND } from "@/config/ip.js";

import PembayaranApi from "@/api/pembayaran.js";
import priceFormater from "@/utils/priceFormatter";

const emit = defineEmits(["alert-event"]);

const searchField = ref("");
const searchValue = ref("");
const itemList = ref([]);
const loading = ref(true);
let deleteModal = reactive({
  id: "",
  name: "",
  modalId: "modalDelete",
});

const headers = [
  { text: "ID TAGIHAN", value: "history_id", sortable: true },
  { text: "NAMA", value: "username", sortable: true },
  { text: "EMAIL", value: "email", sortable: true },
  { text: "TIPE PEMBAYARAN", value: "type_payment", sortable: true },
  { text: "TERBAYAR", value: "payment", sortable: true },
  { text: "TANGGAL BAYAR", value: "date", sortable: true },
  { text: "ACTIONS", value: "actions", sortable: false },
];

const reformatList = (list) => {
  return list.map((item) => {
    // item.created_at = dateFormatter(item.created_at);
    if (item.date) item.date = dateFormatter(item.date);
    if (item.payment) item.payment_reformat = priceFormater(item.payment);
    return item;
  });
};

const setDeleteData = (objData) => {
  console.log(objData);
  Object.assign(deleteModal, objData);
  // deleteModal = {
  //   ...objData,
  //   id: objData.payment_id,
  // };
  deleteModal.id = objData.payment_id;
  // deleteModal.name = objData.name;
  deleteModal.name = `Tagihan ID: ${objData.history_id} / Tanggal: ${objData.date} / Tipe: ${objData.type_payment} / Pembayaran: ${objData.payment}`;

  // console.log("delete");
};
const handleDelete = async (id) => {
  // const data = await PembayaranApi.destroy(id);
  await PembayaranApi.destroy(id);

  const deletedObj = removeFromList(id);
  emit("alert-event", {
    color: "success",
    message: "Pembayaran " + deletedObj.name + " berhasil dihapus",
  });
  fetchData("", "", "");
  // console.log(data);
};
const removeFromList = (id) => {
  let deletedObj = itemList.value.find((item) => item.payment_id == id);
  console.log(deletedObj);
  // itemList.value = itemList.value.filter((item) => item.id !== id);
  // console.log(deletedObj);
  // emit("alert-event", {
  //   color: "success",
  //   message: "Data Kamar berhasil diperbaharui",
  // });
  return deletedObj;
};
const handleSearch = async (search) => {
  searchValue.value = search;
  // if (searchValue === "") {
  //   fetchData(null, null, null);
  // } else {
  //   // console.log(e.target.value);
  //   fetchData(searchValue, null, null);
  // }
};

const fetchData = async (search, page, limit) => {
  loading.value = true;
  const data = await PembayaranApi.getAll(search, page, limit);
  console.log(data);
  itemList.value = reformatList(data.data_payment);

  loading.value = false;
  // itemList.value = data;
  // console.log(test);
};

const handleExportXlsx = () => {
  const href = IP_BACKEND + "/payment/export-xlsx?mode=all";
  window.open(href, "_blank").focus();
};

fetchData("", "", "");
</script>

<style lang="scss" scoped>
</style>