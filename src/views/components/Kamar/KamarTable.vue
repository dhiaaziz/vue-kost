<template>
  <!-- <vsud-alert icon="ni ni-like-2 ni-lg" dismissible>
    <strong>Primary!</strong> This is a primary alert—check it out!
  </vsud-alert> -->
  <div class="mb-4 card">
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
            :placeholder="'Cari kamar...'"
            @search="handleSearch"
          />
        </div>
      </div>
    </div>
    <!-- end-button and search section  -->
    <div class="px-0 pt-0 pb-2 card-body">
      <div class="p-0 table-responsive">
        <table class="table mb-0 align-items-center">
          <thead>
            <tr>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Kamar
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Ukuran
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Harga
              </th>
              <th
                class="text-center  text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Status
              </th>
              <th
                class="text-center  text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Dihuni Oleh
              </th>
              <th
                class="text-center  text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Dihuni Hingga
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr v-for="kamar in kamarList" :key="kamar.room_id">
              <td>
                <div class="px-3 py-1 d-flex">
                  <p class="mb-0 text-xs font-weight-bold">{{ kamar.name }}</p>
                </div>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">{{ kamar.size }}</p>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">{{ kamar.price }}</p>
              </td>
              <td class="text-sm text-center align-middle">
                <vsud-badge
                  v-if="!kamar.start_kos"
                  color="success"
                  variant="gradient"
                  size="sm"
                  >Tersedia</vsud-badge
                >
                <vsud-badge
                  v-else
                  color="secondary"
                  variant="gradient"
                  size="sm"
                  >Dihuni</vsud-badge
                >
              </td>
              <td class="align-middle">
                <div class="px-2 py-1 align-items-center flex-column d-flex">
                  <div class="px-2 py-1 d-flex justify-content-center">
                    <!-- <div>
                      <vsud-avatar
                        :img="img1"
                        size="sm"
                        border-radius="lg"
                        class="me-3"
                        alt="user1"
                      />
                    </div> -->
                    <div
                      v-if="kamar.start_kos"
                      class="d-flex flex-column justify-content-center"
                    >
                      <router-link
                        :to="{
                          name: 'Detail User',
                          params: { id: kamar.user_id },
                        }"
                        class="text-center"
                        href=""
                      >
                        <h6 class="mb-0 text-sm">{{ kamar.username }}</h6>
                        <p class="mb-0 text-xs text-secondary">
                          {{ kamar.email }}
                        </p>
                      </router-link>
                    </div>
                    <div
                      v-else
                      class="d-flex flex-column justify-content-center"
                    >
                      -
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center align-middle">
                <span
                  v-if="kamar.end_kos"
                  class="text-xs text-secondary font-weight-bold"
                  >{{ kamar.end_kos }}</span
                >
                <span v-else class="text-xs text-secondary font-weight-bold">
                  -
                </span>
              </td>
              <td class="align-middle d-flex align-items-center">
                <router-link
                  :to="{ name: 'Edit Kamar', params: { id: kamar.room_id } }"
                  class="px-2 py-1 mx-1 my-0 text-xs  text-secondary font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</router-link
                >
                <a
                  href="javascript:;"
                  class="px-2 py-1 mx-1 my-0 text-xs rounded-lg  text-danger font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Delete user"
                  data-bs-toggle="modal"
                  :data-bs-target="'#' + deleteModal.modalId"
                  @click="setDeleteData(kamar)"
                  >Delete</a
                >
              </td>
            </tr>
            <tr v-if="kamarList.length == 0">
              <td colspan="7" class="text-center">List kamar kosong</td>
            </tr>
          </tbody>
        </table>
      </div>
      <div class="mt-3 pe-3 d-flex justify-content-between container-fluid">
        <div>test</div>
        <!-- {{ pagination }} -->
        <page-component
          :total="pagination.count"
          :per-page="pagination.limit"
          :current-page="pagination.pageNow"
          :last-page="pagination.pageLast"
          @page-change="handlePageChange"
        />
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

  <!-- Modal Add -->
  <!-- <div
    id="createModal"
    class="modal fade"
    tabindex="-1"
    aria-labelledby="exampleModalLabel"
    aria-hidden="true"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 id="exampleModalLabel" class="modal-title">Tambah Kamar</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">
          <form @submit.prevent>
            <div class="mb-3">
              <label for="inputNama" class="form-label">Nama Kamar</label>
              <input
                v-model="formCreate.name"
                type="text"
                class="form-control"
                id="inputNama"
              />
              <div class="form-text">contoh: 101</div>
            </div>
            <div class="mb-3">
              <label for="inputUkuran" class="form-label">Ukuran Kamar</label>
              <input
                v-model="formCreate.size"
                type="text"
                class="form-control"
                id="inputUkuran"
              />
              <div class="form-text">contoh: 4x4</div>
            </div>
            <div class="mb-3">
              <label for="inputUkuran" class="form-label">Harga</label>
              <input
                v-model="formCreate.price"
                type="number"
                class="form-control"
                id="inputUkuran"
              />
              <div class="form-text">contoh: 700000</div>
            </div>
          </form>
        </div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button
            type="button"
            class="btn btn-primary"
            @click="handleCreateSubmit"
          >
            Tambah Kamar
          </button>
        </div>
      </div>
    </div>
  </div> -->
</template>

<script>
import VsudBadge from "@/components/VsudBadge.vue";
import KamarApi from "@/api/kamar.js";
import priceFormatter from "@/utils/priceFormatter";
import dateFormatter from "@/utils/dateFormatter";

import SearchComponent from "@/views/components/shared/SearchComponent.vue";
import PageComponent from "@/views/components/shared/PageComponent.vue";
import ModalComponent from "@/views/components/shared/ModalComponent.vue";

import { onMounted, reactive, ref } from "vue";

export default {
  name: "KamarTable",
  components: {
    VsudBadge,
    SearchComponent,
    PageComponent,
    ModalComponent,
  },
  emits: ["alert-event"],
  // eslint-disable-next-line no-unused-vars
  setup(props, context) {
    let kamarList = ref([]);
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
      modalId: "deleteModal",
    });

    const reformatList = (list) => {
      return list.map((item) => {
        if (item.start_kos) {
          item.start_kos = dateFormatter(item.start_kos);
        }
        if (item.end_kos) {
          item.end_kos = dateFormatter(item.end_kos);
        }
        item.price = priceFormatter(item.price);
        return item;
      });
    };

    const fetchKamar = async (search, page, limit) => {
      let data;
      // console.log(search);
      if (!search) {
        data = await KamarApi.getAll(null, page, limit);
      } else if (search) {
        data = await KamarApi.getAll(search, page, limit);
      }
      if (!data) {
        kamarList.value = [];
        return;
      }
      // console.log(data.data_payment);
      pagination.pageNow = data.pageNow;
      pagination.count = data.count;
      pagination.pageLast = data.pageLast;
      pagination.limit = data.limit;
      console.log(data);
      console.log(pagination);

      kamarList.value = reformatList(data.data_payment);

      // console.log(test);
    };

    const handleCreateSubmit = async () => {
      const data = await KamarApi.create(formCreate);
      kamarList.value.push(data[0]);
      formCreate.name = "";
      formCreate.size = "";
      formCreate.price = "";
    };
    const setDeleteData = (kamar) => {
      deleteModal.id = kamar.room_id;
      deleteModal.name = kamar.name;
      // console.log("delete");
    };
    const handlePageChange = (page) => {
      // fetchKamar("", page, pagination.limit);
      console.log("page", page);
    };
    const handleSearch = async (searchValue) => {
      if (searchValue === "") {
        fetchKamar(null, null, null);
      } else {
        // console.log(e.target.value);
        fetchKamar(searchValue, null, null);
      }
    };

    const handleDelete = async (id) => {
      // const data = await KamarApi.destroy(id);
      await KamarApi.destroy(id);

      const deletedObj = removeFromList(id);
      context.emit("alert-event", {
        color: "success",
        message: "Ruang " + deletedObj.name + " berhasil dihapus",
      });
      // console.log(data);
    };
    const removeFromList = (id) => {
      let deletedObj = kamarList.value.find((item) => item.room_id == id);
      kamarList.value = kamarList.value.filter((item) => item.room_id !== id);
      // console.log(deletedObj);
      context.emit("alert-event", {
        color: "success",
        message: "Data Kamar berhasil diperbaharui",
      });
      return deletedObj;
    };

    onMounted(async () => {
      await fetchKamar(null, null, null);
    });
    return {
      kamarList,
      formCreate,
      deleteModal,
      setDeleteData,
      handleCreateSubmit,
      handleDelete,
      handleSearch,
      handlePageChange,
      pagination,
    };
  },
};
</script>