<template>
  <!-- <vsud-alert icon="ni ni-like-2 ni-lg" dismissible>
    <strong>Primary!</strong> This is a primary alert—check it out!
  </vsud-alert> -->
  <div class="mb-4 card">
    <div class="pb-0 card-header d-flex justify-content-between">
      <h6>Pembayaran table</h6>
      <div>
        <button
          class="btn btn-sm btn-secondary me-2"
          data-original-title="Export to Excel"
          data-bs-toggle="modal"
          :data-bs-target="'#exportModal'"
        >
          Export ke Excel
        </button>
        <router-link
          :to="{ name: 'Input Pembayaran' }"
          class="btn btn-sm btn-primary"
        >
          Tambah pembayaran <span class="">+</span>
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
                Id Tagihan
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Nama
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Email
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Tipe Pembayaran
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Terbayar
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Tanggal Bayar
              </th>

              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="item in itemList" :key="item.payment_id">
              <td>
                <div class="px-3 py-1 d-flex">
                  <p class="mb-0 text-xs font-weight-bold">
                    {{ item.history_id }}
                  </p>
                </div>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.username }}
                </p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.email }}
                </p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.type_payment }}
                </p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.payment }}
                </p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">
                  {{ item.date }}
                </p>
              </td>
              <!-- <td>
                <p class="mb-0 text-xs font-weight-bold">
                  <span v-if="item.discount > 0"
                    >{{ item.discount }} bulan</span
                  >
                  <span v-else>-</span>
                </p>
              </td> -->
              <td class="align-middle">
                <!-- <router-link
                  :to="{ name: 'Edit Bangunan', params: { id: item.id } }"
                  class="mx-2 text-xs text-secondary font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit Bangunan"
                  >Edit</router-link
                > -->
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
        @click="handleDelete(deleteModal.payment_id)"
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

<script>
import { IP_BACKEND } from "@/config/ip.js";
import PembayaranApi from "@/api/pembayaran.js";
// import priceFormatter from "@/utils/priceFormatter";
import dateFormatter from "@/utils/dateFormatter";

import { onMounted, reactive, ref } from "vue";
import priceFormater from "../../../utils/priceFormatter";
import ModalComponent from "../shared/ModalComponent.vue";

export default {
  name: "PembayaranTable",
  components: { ModalComponent },
  emits: ["alert-event"],
  // eslint-disable-next-line no-unused-vars
  setup(props, context) {
    let itemList = ref([]);
    let pagination = reactive({
      count: 0,
      limit: 0,
      pageLast: 0,
      pageNow: 1,
    });
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
        // item.created_at = dateFormatter(item.created_at);
        item.date = dateFormatter(item.date);
        item.payment = priceFormater(item.payment);
        return item;
      });
    };

    const fetchData = async (search = "", page = 1, limit = 100) => {
      let data;
      // console.log(search);
      if (!search) {
        data = await PembayaranApi.getAll(null, page, limit);
      } else if (search) {
        data = await PembayaranApi.getAll(search, page, limit);
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
      console.log(data);
      console.log(pagination);

      itemList.value = reformatList(data.data_payment);
    };

    const setDeleteData = (data) => {
      console.log(data);
      Object.assign(deleteModal, data);
      // deleteModal = {
      //   ...data,
      //   id: data.payment_id,
      // };
      deleteModal.id = data.payment_id;
      // deleteModal.name = data.name;
      deleteModal.name = `Tagihan ID: ${data.history_id} / Tanggal: ${data.date} / Tipe: ${data.type_payment} / Pembayaran: ${data.payment}`;

      // console.log("delete");
    };

    const handleDelete = async (id) => {
      // const data = await BangunanApi.destroy(id);
      await PembayaranApi.destroy(id);

      const deletedObj = removeFromList(id);
      context.emit("alert-event", {
        color: "success",
        message: "Bangunan " + deletedObj.name + " berhasil dihapus",
      });
      // console.log(data);
    };

    const handleExportXlsx = () => {
      const href = IP_BACKEND + "/payment/export-xlsx?mode=all";
      window.open(href, "_blank").focus();
    };
    const removeFromList = (id) => {
      let deletedObj = itemList.value.find((item) => item.payment_id == id);
      itemList.value = itemList.value.filter((item) => item.payment_id !== id);
      // console.log(deletedObj);
      context.emit("alert-event", {
        color: "success",
        message: "Data data berhasil diperbaharui",
      });
      return deletedObj;
    };

    onMounted(async () => {
      await fetchData(null, null, null);
    });
    return {
      itemList,
      formCreate,
      deleteModal,
      setDeleteData,
      handleDelete,
      handleExportXlsx,
    };
  },
};
</script>