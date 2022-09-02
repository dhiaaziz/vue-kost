<template>
  <div class="mb-4 card">
    <div class="pb-0 card-header d-flex justify-content-between">
      <h6>Kamar table</h6>
      <div>
        <button
          class="btn btn-sm btn-primary"
          data-bs-toggle="modal"
          data-bs-target="#createModal"
        >
          Tambah Kamar <span class="">+</span>
        </button>
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
                <div
                  v-else
                  class="px-2 py-1 align-items-center flex-column d-flex"
                >
                  <div style="min-width: 100px">
                    <vsud-badge color="secondary" variant="gradient" size="sm"
                      >Dihuni</vsud-badge
                    >
                  </div>

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
                    <div class="d-flex flex-column justify-content-center">
                      <a href="">
                        <h6 class="mb-0 text-sm">John Michael</h6>
                        <p class="mb-0 text-xs text-secondary">
                          john@creative-tim.com
                        </p>
                      </a>
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
                <a
                  href="javascript:;"
                  class="mx-1 text-xs text-secondary font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
                <a
                  href="javascript:;"
                  class="mx-1 text-xs text-danger font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  data-bs-toggle="modal"
                  data-bs-target="#deleteModal"
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
          <h5 class="modal-title" id="exampleModalLabel">Modal title</h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="modal"
            aria-label="Close"
          ></button>
        </div>
        <div class="modal-body">Apakah anda yakin akan menghapus ini?</div>
        <div class="modal-footer">
          <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button>
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
          <h5 class="modal-title" id="exampleModalLabel">Tambah Kamar</h5>
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
// import VsudAvatar from "@/components/VsudAvatar.vue";
import VsudBadge from "@/components/VsudBadge.vue";
// import img1 from "@/assets/img/team-2.jpg";
// import img2 from "@/assets/img/team-3.jpg";
// import img3 from "@/assets/img/team-4.jpg";
// import img4 from "@/assets/img/team-3.jpg";
// import img5 from "@/assets/img/team-2.jpg";
// import img6 from "@/assets/img/team-4.jpg";
import KamarApi from "@/api/kamar.js";
import priceFormatter from "@/utils/priceFormatter";
import dateFormatter from "@/utils/dateFormatter";

import { onMounted, reactive, ref } from "vue";

export default {
  name: "AuthorsTable",
  components: {
    // VsudAvatar,
    VsudBadge,
  },
  // data() {
  //   return {
  //     img1,
  //     img2,
  //     img3,
  //     img4,
  //     img5,
  //     img6,
  //   };
  // },
  setup() {
    let kamarList = ref([]);
    let formCreate = reactive({
      name: "",
      size: "",
      price: "",
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
      const data = await KamarApi.getAll();
      kamarList.value = reformatList(data);
      // console.log(test);
    };

    const handleCreateSubmit = async () => {
      const data = await KamarApi.create(formCreate);
      kamarList.value.push(data[0]);
      formCreate.name = "";
      formCreate.size = "";
      formCreate.price = "";
    };

    onMounted(async () => {
      await fetchKamar();
    });
    return {
      // img1,
      // img2,
      // img3,
      // img4,
      // img5,
      // img6,
      kamarList,
      formCreate,
      handleCreateSubmit,
    };
  },
};
</script>