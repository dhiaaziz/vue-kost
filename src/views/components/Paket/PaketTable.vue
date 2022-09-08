<template>
  <!-- <vsud-alert icon="ni ni-like-2 ni-lg" dismissible>
    <strong>Primary!</strong> This is a primary alert—check it out!
  </vsud-alert> -->
  <div class="mb-4 card">
    <div class="pb-0 card-header d-flex justify-content-between">
      <h6>Paket table</h6>
      <div>
        <router-link
          :to="{ name: 'Input Paket' }"
          class="btn btn-sm btn-primary"
        >
          Tambah Paket <span class="">+</span>
        </router-link>
      </div>
    </div>
    <div class="px-0 pt-0 pb-2 card-body">
      <div class="p-0 table-responsive">
        <table class="table mb-0 align-items-center">
          <thead>
            <tr>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Nama
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Deskripsi
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Durasi
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Diskon
              </th>

              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itemList" :key="item.id">
              <td>
                <div class="px-3 py-1 d-flex">
                  <p class="mb-0 text-xs font-weight-bold">{{ item.name }}</p>
                </div>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.description }}
                </p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.duration }} bulan
                </p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  <span v-if="item.discount > 0"
                    >{{ item.discount }} bulan</span
                  >
                  <span v-else>-</span>
                </p>
              </td>
              <td class="align-middle">
                <router-link
                  :to="{ name: 'Edit Bangunan', params: { id: item.id } }"
                  class="mx-2 text-xs text-secondary font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit Bangunan"
                  >Edit</router-link
                >
                <a
                  href="javascript:;"
                  class="mx-2 text-xs text-danger font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Delete user"
                  data-bs-toggle="modal"
                  :data-bs-target="'#' + deleteModal.modalId"
                  @click="setDeleteData(item)"
                  >Delete</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <modal-component
    :modal-id="deleteModal.modalId"
    :modal-title="'Hapus Bangunan'"
  >
    <template #modal-body>
      <p>Apakah anda yakin ingin menghapus paket {{ deleteModal.name }}?</p>
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

<script>
import PaketApi from "@/api/paket.js";
// import priceFormatter from "@/utils/priceFormatter";
import dateFormatter from "@/utils/dateFormatter";

import { onMounted, reactive, ref } from "vue";
import ModalComponent from "../shared/ModalComponent.vue";

export default {
  name: "PaketTable",
  components: { ModalComponent },
  emits: ["alert-event"],
  // eslint-disable-next-line no-unused-vars
  setup(props, context) {
    let itemList = ref([]);
    let formCreate = reactive({
      name: "",
      size: "",
      price: "",
    });

    let deleteModal = reactive({
      id: "",
      name: "",
      modalId: "modalDelete",
    });

    const reformatList = (list) => {
      return list.map((item) => {
        item.created_at = dateFormatter(item.created_at);
        return item;
      });
    };

    const fetchKamar = async () => {
      const data = await PaketApi.getAll();
      itemList.value = reformatList(data);
      // itemList.value = data;
      // console.log(test);
    };

    const setDeleteData = (kamar) => {
      deleteModal.id = kamar.id;
      deleteModal.name = kamar.name;
      // console.log("delete");
    };

    const handleDelete = async (id) => {
      // const data = await BangunanApi.destroy(id);
      await PaketApi.destroy(id);

      const deletedObj = removeFromList(id);
      context.emit("alert-event", {
        color: "success",
        message: "Bangunan " + deletedObj.name + " berhasil dihapus",
      });
      // console.log(data);
    };
    const removeFromList = (id) => {
      let deletedObj = itemList.value.find((item) => item.id == id);
      itemList.value = itemList.value.filter((item) => item.id !== id);
      // console.log(deletedObj);
      context.emit("alert-event", {
        color: "success",
        message: "Data Kamar berhasil diperbaharui",
      });
      return deletedObj;
    };

    onMounted(async () => {
      await fetchKamar();
    });
    return {
      itemList,
      formCreate,
      deleteModal,
      setDeleteData,
      handleDelete,
    };
  },
};
</script>