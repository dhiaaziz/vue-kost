<template>
  <!-- <vsud-alert icon="ni ni-like-2 ni-lg" dismissible>
    <strong>Primary!</strong> This is a primary alert—check it out!
  </vsud-alert> -->
  <div class="mb-4 card">
    <div class="pb-0 card-header d-flex justify-content-between">
      <h6>Bangunan table</h6>
      <div>
        <router-link
          :to="{ name: 'Input Kamar' }"
          class="btn btn-sm btn-primary"
        >
          Tambah Kamar <span class="">+</span>
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
                Name
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Address
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
                      <a class="text-center" href="">
                        <h6 class="mb-0 text-sm">John Michael</h6>
                        <p class="mb-0 text-xs text-secondary">
                          john@creative-tim.com
                        </p>
                      </a>
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
              <td class="align-middle">
                <router-link
                  :to="{ name: 'Edit Kamar', params: { id: kamar.room_id } }"
                  class="mx-1 text-xs text-secondary font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</router-link
                >
                <a
                  href="javascript:;"
                  class="mx-1 text-xs text-danger font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Delete user"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
                  @click="setDeleteData(kamar)"
                  >Delete</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>

  <!-- Modal -->
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
          Apakah anda yakin akan menghapus ruang {{ deleteModal.name }}?
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
  </div>

  <!-- Modal Add -->
  <div
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
            <!-- <div class="mb-3">
              <label for="inputUkuran" class="form-label">Ukuran Kamar</label>
              <input type="text" class="form-control" id="inputUkuran" />
              <div class="form-text">contoh: 4x4</div>
            </div> -->
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
  </div>
</template>

<script>
import VsudBadge from "@/components/VsudBadge.vue";
import BangunanApi from "@/api/bangunan.js";
import priceFormatter from "@/utils/priceFormatter";
import dateFormatter from "@/utils/dateFormatter";

import { onMounted, reactive, ref } from "vue";

export default {
  name: "KamarTable",
  components: {
    VsudBadge,
  },
  emits: ["alert-event"],
  // eslint-disable-next-line no-unused-vars
  setup(props, context) {
    let kamarList = ref([]);
    let formCreate = reactive({
      name: "",
      size: "",
      price: "",
    });

    let deleteModal = reactive({
      id: "",
      name: "",
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

    const fetchKamar = async () => {
      const data = await BangunanApi.getAll();
      // kamarList.value = reformatList(data);
      kamarList.value = data;
      // console.log(test);
    };

    const handleCreateSubmit = async () => {
      const data = await BangunanApi.create(formCreate);
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
    const handleDelete = async (id) => {
      // const data = await BangunanApi.destroy(id);
      await BangunanApi.destroy(id);

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
      await fetchKamar();
    });
    return {
      kamarList,
      formCreate,
      deleteModal,
      handleCreateSubmit,
      setDeleteData,
      handleDelete,
    };
  },
};
</script>