<template>
  <!-- <vsud-alert icon="ni ni-like-2 ni-lg" dismissible>
    <strong>Primary!</strong> This is a primary alert—check it out!
  </vsud-alert> -->
  
  <div class="mb-4 card">
    <div class="pb-0 card-header d-flex justify-content-between">
      <h6>Tagihan table</h6>
      <!-- <div>
        <router-link
          :to="{ name: 'Input Tagihan' }"
          class="btn btn-sm btn-primary"
        >
          Tambah Tagihan <span class="">+</span>
        </router-link>
      </div> -->
      <div>
        <router-link
          :to="{ name: 'Input Tagihan' }"
          class="btn btn-sm btn-primary"
        >
          Buat Tagihan Baru <span class="">+</span>
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
                ID Tagihan
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Email
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Nama Kos
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Ruangan
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Tagihan
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Kekurangan
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Berakhir Pada
              </th>

              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itemList" :key="item.history_id">
              <td>
                <div class="px-3 py-1 d-flex">
                  <p class="mb-0 text-xs font-weight-bold">{{ item.history_id }}</p>
                </div>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.email }}
                </p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.build_name }}
                </p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.room_name }}
                </p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.total_price }}
                </p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  <span v-if="item.deficiency > 0"
                    >{{ item.deficiency }}</span
                  >
                  <span v-else>{{item.deficiency}}</span>
                </p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.end_kos }}
                </p>
              </td>
              <td class="align-middle">
                <router-link
                  :to="{ name: 'Edit Bangunan', params: { id: item.history_id } }"
                  class="mx-2 text-xs text-secondary font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit Bangunan"
                  >Edit</router-link
                >
                <a
                  href="javascript:;"
                  class="mx-2 text-xs text-danger font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Delete data"
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
    :modal-title="'Hapus Tagihan'"
  >
    <template #modal-body>
      <p>Apakah anda yakin ingin menghapus tagihan {{ deleteModal.name }}?</p>
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
import TagihanApi from "@/api/tagihan.js";
// import priceFormatter from "@/utils/priceFormatter";
import dateFormatter from "@/utils/dateFormatter";
import priceFormater from "@/utils/priceFormatter";

import { onMounted, reactive, ref } from "vue";
import ModalComponent from "@/views/components/shared/ModalComponent.vue";
// import 'bootstrap';

export default {
  name: "TagihanTable",
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

    let pagination = reactive({
      count: 0,
      limit: 0,
      pageLast: 0,
      pageNow: 1,
    });

    const reformatList = (list) => {
      // console.log(list);
      return list.map((item) => {
        // item.created_at = dateFormatter(item.created_at);
        item.end_kos = dateFormatter(item.end_kos);
        item.total_price = priceFormater(item.total_price);
        item.deficiency = priceFormater(item.deficiency);

        return item;
      });
    };

    const fetchData = async (search = "", page = 1, limit = 10) => {
      let data;
      // console.log(search);
      if (!search) {
        data = await TagihanApi.getAll(null, page, limit);
      } else if (search) {
        data = await TagihanApi.getAll(search, page, limit);
      }
      if (!data) {
        itemList.value = [];
        return;
      }
      // console.log(data.data_payment);
      pagination.pageNow = data.pageNow;
      pagination.count = data.count;
      pagination.pageLast = data.pageLast;
      pagination.limit = data.limit;
      // console.log(data);
      // console.log(pagination);

      itemList.value = reformatList(data.data_history);

      // console.log(test);
    };

    const setDeleteData = (tagihan) => {
      console.log(tagihan);
      deleteModal.id = tagihan.history_id;
      deleteModal.name = tagihan.history_id;
      // console.log("delete");
    };

    const handleDelete = async (id) => {
      // const data = await BangunanApi.destroy(id);
      await TagihanApi.destroy(id);

      const deletedObj = removeFromList(id);
      context.emit("alert-event", {
        color: "success",
        message: "Tagihan " + deletedObj.history_id + " berhasil dihapus",
      });
      // console.log(data);
    };
    const removeFromList = (id) => {
      let deletedObj = itemList.value.find((item) => item.history_id == id);
      itemList.value = itemList.value.filter((item) => item.history_id !== id);
      // console.log(deletedObj);
      // context.emit("alert-event", {
      //   color: "success",
      //   message: "Data Tagihan berhasil diperbaharui",
      // });
      return deletedObj;
    };

    onMounted(async () => {
      await fetchData();
      // console.log(bootstrap);
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