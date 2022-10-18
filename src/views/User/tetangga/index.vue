<template>
  <div class="py-4 container-fluid">
    <Transition>
      <vsud-alert
        :show="alert.show"
        :color="alert.color"
        icon="ni ni-like-2 ni-lg"
        dismissible
        @update:show="alert.show = $event"
      >
        <span v-html="alert.message"></span>
      </vsud-alert>
    </Transition>
    <div class="container-fluid">
      <div
        class="mt-4 page-header min-height-100 border-radius-xl"
        :style="{
          backgroundImage: `url(${bgImg})`,
          backgroundPositionY: '50%',
        }"
      >
        <span class="mask bg-gradient-success opacity-6"></span>
      </div>
      <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
        <div class="row gx-4">
          <div class="col-auto">
            <div class="avatar avatar-x position-relative">
              <a href="#/user-dashboard">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="36"
                  height="36"
                  fill="currentColor"
                  class="bi bi-house"
                  viewBox="0 0 16 16"
                >
                  <path
                    fill-rule="evenodd"
                    d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"
                  />
                  <path
                    fill-rule="evenodd"
                    d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"
                  />
                </svg>
                <!-- <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-house-fill" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="m8 3.293 6 6V13.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5V9.293l6-6zm5-.793V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
                </svg> -->
              </a>
            </div>
          </div>
          <div class="my-auto col">
            <div class="h-100">
              <h5 class="mb-1">Tetangga</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="mb-4 card">
          <!-- <div class="pb-0 card-header d-flex justify-content-between">
            <h6>Tetangga</h6>
          </div> -->
          <div class="px-0 pt-0 pb-2 card-body">
            <div v-if="!wadah" class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <h6 v-else-if="wadah.length == 0" class="text-center">
              Tidak Menyewa Kamar
            </h6>
            <div v-else class="p-0 table-responsive">
              <table class="table mb-0 text-center align-items-center">
                <thead>
                  <tr>
                    <th
                      class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    ></th>
                    <th
                      class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Nama
                    </th>
                    <th
                      class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Religion
                    </th>
                    <th
                      class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Gender
                    </th>
                    <th
                      class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
                    >
                      Kamar
                    </th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, key) in wadah" :key="key">
                    <td style="width: 4rem">
                      <img
                        v-bind:src="
                          'http://localhost:5000/image/profile/' +
                          item.image_profile
                        "
                        class="p-0 m-0 rounded-circle"
                        style="width: 2rem; height: 2rem"
                      />
                    </td>
                    <td>
                      <p class="mb-0 text-xs font-weight-bold">
                        {{ item.username }}
                      </p>
                    </td>
                    <td>
                      <p class="mb-0 text-xs font-weight-bold">
                        {{ item.gender }}
                      </p>
                    </td>
                    <td>
                      <p class="mb-0 text-xs font-weight-bold">
                        {{ item.religion }}
                      </p>
                    </td>
                    <td>
                      <p class="mb-0 text-xs font-weight-bold">
                        {{ item.room }}
                      </p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            <nav aria-label="Page navigation example">
              <ul class="pagination justify-content-center">
                <li
                  v-if="page > 2"
                  class="page-item disabled"
                  @click="pagination(1)"
                >
                  <a class="page-link" aria-label="Previous">
                    <span aria-hidden="true">&laquo;</span>
                  </a>
                </li>
                <li
                  v-if="page > 1"
                  class="page-item"
                  @click="pagination(page - 1)"
                >
                  <a class="page-link">{{ page - 1 }}</a>
                </li>
                <li class="page-item active">
                  <a class="page-link">{{ page }}</a>
                </li>
                <li
                  v-if="page < totalPage"
                  class="page-item"
                  @click="pagination(page + 1)"
                >
                  <a class="page-link">{{ page + 1 }}</a>
                </li>
                <li
                  v-if="page < totalPage - 1"
                  class="page-item"
                  @click="pagination(totalPage)"
                >
                  <a class="page-link" aria-label="Next">
                    <span aria-hidden="true">&raquo;</span>
                  </a>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, onBeforeUnmount, reactive, ref } from "vue";
import axios from "axios";
axios.defaults.headers.common["token"] = await store.getters["auth/token"];
import moment from "moment";
import UserTable from "@/views/components/User/UserTable.vue";
import VsudAlert from "@/components/VsudAlert.vue";
import store from "../../../store";
import bgImg from "@/assets/img/curved-images/curved14.jpg";
export default {
  name: "UserPage",
  components: {
    UserTable,
    VsudAlert,
  },
  setup() {
    const body = document.getElementsByTagName("body")[0];
    let wadah = ref(false);
    let jumlah = ref(3);
    let page = ref(1);
    let totalPage = ref(0);
    let itemList = ref([]);
    const alert = reactive({
      show: false,
      icon: "",
      message:
        "<strong>Primary!</strong> This is a primary alert—check it out!",
      color: "",
    });

    // const user = store.getters["auth/user"]
    // console.log(user)
    // const token = store.getters["auth/token"]
    // console.log(token)
    const alertListener = (params) => {
      alert.show = true;
      alert.message = params.message;
      alert.color = params.color;
    };
    const pagination = (x) => {
      wadah.value = itemList.value.slice(
        jumlah.value * x - jumlah.value,
        jumlah.value * x
      );
      page.value = x;
    };
    onBeforeMount(() => {
      store.state.hideConfigButton = true;
      store.state.showNavbar = false;
      store.state.showSidenav = false;
      store.state.showFooter = false;
      body.classList.remove("bg-gray-100");
    });
    onBeforeUnmount(() => {
      store.state.hideConfigButton = false;
      store.state.showNavbar = true;
      store.state.showSidenav = true;
      store.state.showFooter = true;
      body.classList.add("bg-gray-100");
    });
    onMounted(async () => {
      try {
        let user = await axios.get("/user/show-user-kos");
        console.log("user");
        console.log(user);
        itemList.value = user.data.data;
        pagination(1);
      } catch (err) {
        console.log("error");
        console.log(err);
      }
    });
    return {
      alert,
      alertListener,
      bgImg,
      itemList,
      wadah,
      page,
      jumlah,
      totalPage,
      pagination,
    };
  },
};
</script>

<style scoped>
.row div {
  margin: 5px 0px;
}
</style>