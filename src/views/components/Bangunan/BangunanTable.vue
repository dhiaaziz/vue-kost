<template>
  <!-- <vsud-alert icon="ni ni-like-2 ni-lg" dismissible>
    <strong>Primary!</strong> This is a primary alert—check it out!
  </vsud-alert> -->
  <div class="mb-4 card">
    <div class="pb-0 card-header d-flex justify-content-between">
      <h6>Bangunan table</h6>
      <div>
        <router-link
          :to="{ name: 'Input Bangunan' }"
          class="btn btn-sm btn-primary"
        >
          Tambah Bangunan <span class="">+</span>
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
                Alamat
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Tanggal Dibuat
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
                <p class="mb-0 text-xs font-weight-bold">{{ item.address }}</p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.created_at }}
                </p>
              </td>
              <td class="align-middle">
                <router-link
                  :to="{ name: 'Edit Bangunan', params: { id: item.id } }"
                  class="mx-1 text-xs text-secondary font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit Bangunan"
                  >Edit</router-link
                >
                <a
                  href="javascript:;"
                  class="mx-1 text-xs text-danger font-weight-bold"
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

  <!-- Modal
  <div
    id="deleteModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">Hapus Kamar</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          Apakah anda yakin akan menghapus bangunan {{ deleteModal.name }}?
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Batal
          </button>
          <button
            type="button"
            class="btn btn-primary"
            data-bs-dismiss="modal"
            @click="handleDelete(deleteModal.id)"
          >
            Hapus
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import BangunanApi from "@/api/bangunan.js";
// import priceFormatter from "@/utils/priceFormatter";
import dateFormatter from "@/utils/dateFormatter";

import { onMounted, reactive, ref } from "vue";
import ModalComponent from "../shared/ModalComponent.vue";

export default {
  name: "BangunanTable",
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
      const data = await BangunanApi.getAll();
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
      await BangunanApi.destroy(id);

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