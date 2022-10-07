<template>
  <span>search value: </span>
  <input v-model="searchValue" type="text" />

  <div class="mb-4 card">
    <div class="pb-0 card-header d-flex justify-content-between">
      <h6>Bangunan table</h6>

      <div></div>
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
      <div class="px-4 pb-10 table-responsive">
        <easy-data-table
          class=""
          buttons-pagination
          :search-field="searchField"
          :search-value="searchValue"
          :headers="headers"
          :items="itemList"
        >
          <template #item-team="{ teamName, teamUrl }">
            <a :href="teamUrl">{{ teamName }}</a>
          </template>
        </easy-data-table>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";

// import priceFormatter from "@/utils/priceFormatter";
import dateFormatter from "@/utils/dateFormatter";

import BangunanApi from "@/api/bangunan.js";

const searchField = ref("");
const searchValue = ref("");
const itemList = ref([]);

const headers = [
  { text: "NAMA", value: "name", sortable: true },
  { text: "ALAMAT", value: "address", sortable: true },
  { text: "ACTIONS", value: "actions" },

  // { text: "", value: "number" },
  // { text: "POSITION", value: "position" },
  // { text: "HEIGHT", value: "height" },
  // { text: "WEIGHT (lbs)", value: "weight", sortable: true },
  // { text: "LAST ATTENDED", value: "lastAttended" },
  // { text: "COUNTRY", value: "country" },
];

const reformatList = (list) => {
  return list.map((item) => {
    item.created_at = dateFormatter(item.created_at);
    return item;
  });
};
const handleSearch = async (searchValue) => {
  if (searchValue === "") {
    fetchData(null, null, null);
  } else {
    // console.log(e.target.value);
    fetchData(searchValue, null, null);
  }
};

const fetchData = async (search, page, limit) => {
  const data = await BangunanApi.getAll(search, page, limit);
  console.log(data);
  itemList.value = reformatList(data.data_kamar);
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