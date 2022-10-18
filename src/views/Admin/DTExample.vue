<template>
  <!-- <span>search value: </span>
  <input v-model="searchValue" type="text" /> -->

  <div class="mb-4 me-2 card">
    <div class="pb-0 card-header d-flex justify-content-between">
      <h6>Kamar table</h6>
    </div>
    <!-- button and search section -->
    <div class="pt-4 pb-3 container-fluid">
      <div class="row justify-content-between">
        <div class="col-md-4">
          <div class="gap-2 d-grid d-md-block">
            <router-link
              :to="{ name: 'Input Kamar' }"
              class="btn btn-sm btn-primary"
            >
              Tambah Kamar <span class="">+</span>
            </router-link>
          </div>
        </div>
        <div class="mt-4 mt-md-0 col-12 col-md-4">
          <search-component
            v-model="searchValue"
            :placeholder="'Cari Kamar...'"
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
          <template #item-price="{ price_reformat }">
            <span class="">
              <!-- {{ item }} -->
              {{ price_reformat }}
            </span>
          </template>
          <template #item-deficiency="{ deficiency_reformat }">
            <span class="">
              <!-- {{ item }} -->
              {{ deficiency_reformat }}
            </span>
          </template>

          <template #item-actions="item">
            <!-- <router-link
              class="px-3 py-1 mx-1 my-2 btn btn-secondary btn-sm"
              :to="{ name: 'Edit Kamar', params: { id: item.id } }"
              >Edit
            </router-link> -->
            <!-- <router-link
              v-if="item.status !== 'admin'"
              :to="{ name: 'Detail Kamar', params: { id: item.id } }"
              class="px-3 py-1 mx-1 my-2 btn btn-info btn-sm"
              data-toggle="tooltip"
              data-original-title="Edit Bangunan"
              >Detail</router-link
            > -->
            <router-link
              v-if="item.status !== 'admin'"
              :to="{ name: 'Edit Kamar', params: { id: item.room_id } }"
              class="px-3 py-1 mx-1 my-2 btn btn-secondary btn-sm"
              data-toggle="tooltip"
              data-original-title="Edit Kamar"
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

  <modal-component :modal-id="deleteModal.modalId" :modal-title="'Hapus Kamar'">
    <template #modal-body>
      <p>Apakah anda yakin ingin menghapus kamar {{ deleteModal.name }}?</p>
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
</template>

<script setup>
import { ref, reactive, defineEmits } from "vue";

// import priceFormatter from "@/utils/priceFormatter";
import dateFormatter from "@/utils/dateFormatter";

import KamarApi from "@/api/kamar.js";
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
  { text: "NAMA KOS", value: "build_name", sortable: true },
  { text: "RUANGAN", value: "room_name", sortable: true },
  { text: "UKURAN", value: "size", sortable: true },
  { text: "HARGA", value: "price", sortable: true },
  { text: "PENGHUNI", value: "username", sortable: true },
  { text: "TANGGAL PENEMPATAN", value: "start_kos", sortable: true },
  { text: "ACTIONS", value: "actions", sortable: false },
];

const reformatList = (list) => {
  return list.map((item) => {
    // item.created_at = dateFormatter(item.created_at);
    if (!item.username) item.username = "-";
    item.price_reformat = priceFormater(item.price);
    if (item.start_kos) {
      item.start_kos = dateFormatter(item.start_kos);
    } else {
      item.start_kos = "";
    }
    if (item.end_kos) item.end_kos = dateFormatter(item.end_kos);
    else item.end_kos = "";
    return item;
  });
};

const setDeleteData = (objData) => {
  console.log(objData);
  deleteModal.id = objData.room_id;
  deleteModal.name = objData.name;
  // console.log("delete");
};
const handleDelete = async (id) => {
  // const data = await KamarApi.destroy(id);
  await KamarApi.destroy(id);

  const deletedObj = removeFromList(id);
  emit("alert-event", {
    color: "success",
    message: "Kamar dengan ID: " + deletedObj.room_id + " berhasil dihapus",
  });
  fetchData("", "", "");
  // console.log(data);
};
const removeFromList = (id) => {
  let deletedObj = itemList.value.find((item) => item.room_id == id);
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
  const data = await KamarApi.getAll(search, page, limit);
  console.log(data);
  itemList.value = reformatList(data.data_room);

  loading.value = false;
  // itemList.value = data;
  // console.log(test);
};
fetchData("", "", "");
</script>

<style>
.vue3-easy-data-table__header th {
  background-color: #eee !important;
}
</style>