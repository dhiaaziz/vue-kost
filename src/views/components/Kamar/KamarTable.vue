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
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="">Rentang Awal</label>
            <input
              v-model="rangeTanggal.start"
              type="date"
              name=""
              class="form-control"
            />
          </div>
        </div>
        <div class="col-md-6">
          <div class="form-group">
            <label for="" class="">Rentang Akhir</label>
            <input
              v-model="rangeTanggal.end"
              :disabled="!rangeTanggal.start"
              type="date"
              name=""
              class="form-control"
            />
          </div>
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
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Edit Kamar"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-pencil-square"
                viewBox="0 0 16 16"
              >
                <path
                  d="M15.502 1.94a.5.5 0 0 1 0 .706L14.459 3.69l-2-2L13.502.646a.5.5 0 0 1 .707 0l1.293 1.293zm-1.75 2.456-2-2L4.939 9.21a.5.5 0 0 0-.121.196l-.805 2.414a.25.25 0 0 0 .316.316l2.414-.805a.5.5 0 0 0 .196-.12l6.813-6.814z"
                />
                <path
                  fill-rule="evenodd"
                  d="M1 13.5A1.5 1.5 0 0 0 2.5 15h11a1.5 1.5 0 0 0 1.5-1.5v-6a.5.5 0 0 0-1 0v6a.5.5 0 0 1-.5.5h-11a.5.5 0 0 1-.5-.5v-11a.5.5 0 0 1 .5-.5H9a.5.5 0 0 0 0-1H2.5A1.5 1.5 0 0 0 1 2.5v11z"
                />
              </svg>
            </router-link>

            <a
              class="px-3 py-1 mx-1 my-2 btn btn-danger btn-sm"
              :data-bs-target="'#' + deleteModal.modalId"
              data-bs-placement="top"
              title="Delete Kamar"
              data-bs-toggle="modal"
              @click="setDeleteData(item)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-trash"
                viewBox="0 0 16 16"
              >
                <path
                  d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5zm3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0V6z"
                />
                <path
                  fill-rule="evenodd"
                  d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1v1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4H4.118zM2.5 3V2h11v1h-11z"
                />
              </svg>
            </a>

            <button
              v-if="item.history_id"
              :data-bs-target="'#' + emptyModal.modalId"
              data-bs-toggle="modal"
              class="px-3 py-1 mx-1 my-2 btn btn-primary btn-sm"
              data-bs-placement="top"
              title="Kosongkan Kamar"
              @click="setEmptyKamar(item)"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-door-closed-fill"
                viewBox="0 0 16 16"
              >
                <path
                  d="M12 1a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2a1 1 0 0 1 1-1h8zm-2 9a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"
                />
              </svg>
            </button>
          </template>
        </easy-data-table>
      </div>
    </div>
  </div>

  <modal-component
    :modal-title="'Kosongkan Kamar'"
    :modal-id="emptyModal.modalId"
  >
    <template #modal-body>
      <p>Apakah anda yakin ingin mengosongkan kamar {{ emptyModal.name }}?</p>
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
        :disabled="emptyModal.isLoading"
        data-bs-dismiss="modal"
        @click="handleEmpty(emptyModal.id)"
      >
        <span
          v-if="emptyModal.isLoading"
          class="spinner-border spinner-border-sm"
          role="status"
          aria-hidden="true"
        ></span>
        <span v-else>Kosongkan</span>
      </button>
    </template>
  </modal-component>

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
import { ref, reactive, defineEmits, watchEffect } from "vue";

// import priceFormatter from "@/utils/priceFormatter";
import dateFormatter from "@/utils/dateFormatter";

import KamarApi from "@/api/kamar.js";
import TagihanApi from "@/api/tagihan.js";
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

let emptyModal = reactive({
  id: "",
  name: "",
  modalId: "modalEmpty",
});
const rangeTanggal = reactive({
  start: "",
  end: "",
});
const headers = [
  { text: "NAMA KOS", value: "build_name", sortable: true },
  { text: "RUANGAN", value: "name", sortable: true },
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

const setEmptyKamar = (objData) => {
  console.log(objData);
  emptyModal.id = objData.history_id;
  emptyModal.name = objData.name;
};
const handleDelete = async (id) => {
  // const data = await KamarApi.destroy(id);
  await KamarApi.destroy(id);

  const deletedObj = removeFromList(id);
  emit("alert-event", {
    color: "success",
    message: "Kamar " + deletedObj.name + " berhasil dihapus",
  });
  fetchData("", "", "", rangeTanggal.start, rangeTanggal.end);
  // console.log(data);
};

const removeFromListByHistory = (id) => {
  const deletedObj = itemList.value.find((item) => item.history_id == id);
  console.log(deletedObj, "ini deleted obj");
  itemList.value = itemList.value.filter((item) => item.id != id);
  return deletedObj;
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

const handleEmpty = async (id) => {
  console.log(id);
  const response = await TagihanApi.clearRoomByTagihanId(id);
  console.log(response);
  const deletedObj = removeFromListByHistory(id);
  emit("alert-event", {
    color: "success",
    message: "Kamar " + deletedObj.name + " berhasil dikosongkan",
  });
  fetchData("", "", "", rangeTanggal.start, rangeTanggal.end);
};

const fetchData = async (search, page, limit, start, end) => {
  loading.value = true;
  const data = await KamarApi.getAll(search, page, limit, start, end);
  console.log(data);
  itemList.value = reformatList(data.data_room);
  // fetchData("", "", "");

  loading.value = false;
  // itemList.value = data;
  // console.log(test);
};

watchEffect(() => {
  if (rangeTanggal.start && rangeTanggal.end) {
    console.log(rangeTanggal.start, rangeTanggal.end);

    fetchData("", "", "", rangeTanggal.start, rangeTanggal.end);
  }
  if (rangeTanggal.start > rangeTanggal.end) {
    rangeTanggal.end = rangeTanggal.start;
  }
});
fetchData("", "", "", rangeTanggal.start, rangeTanggal.end);
</script>

<style>
.vue3-easy-data-table__header th {
  background-color: #eee !important;
}
</style>