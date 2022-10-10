<template>
  <!-- <span>search value: </span>
  <input v-model="searchValue" type="text" /> -->

  <div class="mb-4 me-2 card">
    <div class="pb-0 card-header d-flex justify-content-between">
      <h6>Bangunan table</h6>
    </div>
    <!-- button and search section -->
    <div class="pt-4 pb-3 container-fluid">
      <div class="row justify-content-between">
        <div class="col-md-4">
          <div class="gap-2 d-grid d-md-block">
            <router-link
              :to="{ name: 'Input Bangunan' }"
              class="btn btn-sm btn-primary"
            >
              Tambah Bangunan <span class="">+</span>
            </router-link>
          </div>
        </div>
        <div class="mt-4 mt-md-0 col-12 col-md-4">
          <search-component
            v-model="searchValue"
            :placeholder="'Cari bangunan...'"
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
          <template #item-actions="item">
            <router-link
              class="px-3 py-1 mx-1 my-2 btn btn-secondary btn-sm"
              :to="{ name: 'Edit Bangunan', params: { id: item.id } }"
              >Edit
            </router-link>
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
    :modal-title="'Hapus Bangunan'"
  >
    <template #modal-body>
      <p>Apakah anda yakin ingin menghapus bangunan {{ deleteModal.name }}?</p>
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

import BangunanApi from "@/api/bangunan.js";

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
  { text: "NAMA", value: "name", sortable: true },
  { text: "ALAMAT", value: "address", sortable: true },
  { text: "ACTIONS", value: "actions", sortable: false },
];

const reformatList = (list) => {
  return list.map((item) => {
    item.created_at = dateFormatter(item.created_at);
    return item;
  });
};

const setDeleteData = (objData) => {
  console.log(objData);
  deleteModal.id = objData.id;
  deleteModal.name = objData.name;
  // console.log("delete");
};
const handleDelete = async (id) => {
  // const data = await BangunanApi.destroy(id);
  await BangunanApi.destroy(id);

  const deletedObj = removeFromList(id);
  emit("alert-event", {
    color: "success",
    message: "Bangunan " + deletedObj.name + " berhasil dihapus",
  });
  fetchData();
  // console.log(data);
};
const removeFromList = (id) => {
  let deletedObj = itemList.value.find((item) => item.id == id);
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
  const data = await BangunanApi.getAll(search, page, limit);
  // console.log(data);
  itemList.value = reformatList(data.data_kamar);

  loading.value = false;
  // itemList.value = data;
  // console.log(test);
};
fetchData();
</script>

<style>
.vue3-easy-data-table__header th {
  background-color: #eee !important;
}
</style>