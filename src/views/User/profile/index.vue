<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-200 border-radius-xl"
      :style="{ backgroundImage: `url(${bgImg})`, backgroundPositionY: '50%' }"
    >
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto my-auto">
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
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <img
              v-bind:src="
                'http://localhost:5000/image/profile/' + data.image_profile
              "
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">{{ data.username }}</h5>
            <p class="mb-0 text-sm font-weight-bold">{{ data.email }}</p>
          </div>
        </div>
        <div
          class="mx-auto mt-3 col-lg-3 col-md-6 my-sm-auto ms-sm-auto me-sm-0"
        >
          <div class="nav-wrapper position-relative end-0">
            <p class="p-0 m-0 text-center">
              {{ data.start_kos + " - " + data.end_kos }}
            </p>
            <!-- <ul class="p-1 bg-transparent nav nav-pills nav-fill" role="tablist">
              <li class="nav-item">
                <a class="px-0 py-1 mb-0 nav-link active" data-bs-toggle="tab" href="javascript:;" role="tab" aria-selected="true">
                  <svg class="text-dark" width="16px" height="16px" viewBox="0 0 42 42" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" >
                    <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" >
                      <g transform="translate(-2319.000000, -291.000000)" fill="#FFFFFF" fill-rule="nonzero" >
                        <g transform="translate(1716.000000, 291.000000)">
                          <g transform="translate(603.000000, 0.000000)">
                            <path class="color-background" d="M22.7597136,19.3090182 L38.8987031,11.2395234 C39.3926816,10.9925342 39.592906,10.3918611 39.3459167,9.89788265 C39.249157,9.70436312 39.0922432,9.5474453 38.8987261,9.45068056 L20.2741875,0.1378125 L20.2741875,0.1378125 C19.905375,-0.04725 19.469625,-0.04725 19.0995,0.1378125 L3.1011696,8.13815822 C2.60720568,8.38517662 2.40701679,8.98586148 2.6540352,9.4798254 C2.75080129,9.67332903 2.90771305,9.83023153 3.10122239,9.9269862 L21.8652864,19.3090182 C22.1468139,19.4497819 22.4781861,19.4497819 22.7597136,19.3090182 Z"/>
                            <path class="color-background" d="M23.625,22.429159 L23.625,39.8805372 C23.625,40.4328219 24.0727153,40.8805372 24.625,40.8805372 C24.7802551,40.8805372 24.9333778,40.8443874 25.0722402,40.7749511 L41.2741875,32.673375 L41.2741875,32.673375 C41.719125,32.4515625 42,31.9974375 42,31.5 L42,14.241659 C42,13.6893742 41.5522847,13.241659 41,13.241659 C40.8447549,13.241659 40.6916418,13.2778041 40.5527864,13.3472318 L24.1777864,21.5347318 C23.8390024,21.7041238 23.625,22.0503869 23.625,22.429159 Z" opacity="0.7"/>
                            <path class="color-background" d="M20.4472136,21.5347318 L1.4472136,12.0347318 C0.953235098,11.7877425 0.352562058,11.9879669 0.105572809,12.4819454 C0.0361450918,12.6208008 6.47121774e-16,12.7739139 0,12.929159 L0,30.1875 L0,30.1875 C0,30.6849375 0.280875,31.1390625 0.7258125,31.3621875 L19.5528096,40.7750766 C20.0467945,41.0220531 20.6474623,40.8218132 20.8944388,40.3278283 C20.963859,40.1889789 21,40.0358742 21,39.8806379 L21,22.429159 C21,22.0503869 20.7859976,21.7041238 20.4472136,21.5347318 Z" opacity="0.7"/>
                          </g>
                        </g>
                      </g>
                    </g>
                  </svg>
                  <span class="ms-1">App</span>
                </a>
              </li>
            </ul> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      <div class="mt-4 col-12 col-md-6 col-xl-7 mt-md-0">
        <div class="card h-100">
          <div class="px-2 py-0 m-0 card-header">
            <div class="row">
              <div class="col-md-8 d-flex align-items-center">
                <h6 class="mb-0">Profile</h6>
              </div>
              <div class="col-md-4 text-end">
                <a href="javascript:;">
                  <i
                    class="text-sm fas fa-user-edit text-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit Profile"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div class="px-4 py-0 card-body">
            <ul class="list-group">
              <li class="pt-0 text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Username:</strong> &nbsp;
                {{ data.username }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Email:</strong> &nbsp;
                {{ data.email }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Contact:</strong> &nbsp;
                {{ data.contact }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">NIK:</strong> &nbsp; {{ data.nik }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Tempat, Tanggal Lahir:</strong> &nbsp;
                {{ data.birth_place + ", " + data.birth_date }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Agama:</strong> &nbsp;
                {{ data.religion }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Jenis Kelamin:</strong> &nbsp;
                {{ data.gender }}
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-5">
        <div class="card" style="max-height: 100%">
          <div class="px-2 py-0 m-0 card-header">
            <div class="row">
              <div class="col-md-8 d-flex align-items-center">
                <h6 class="mb-0">Emegency</h6>
              </div>
              <div class="col-md-4 text-end">
                <a href="javascript:;">
                  <i
                    class="text-sm fas fa-user-edit text-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit Profile"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div class="px-4 py-0 card-body">
            <ul class="list-group">
              <li class="pt-0 text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Name:</strong> &nbsp;
                {{ data.emergency_contact || "-" }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Contact:</strong> &nbsp;
                {{ data.emergency_contact || "-" }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 card" style="max-height: 100%">
          <div class="px-2 py-0 m-0 card-header">
            <div class="row">
              <div class="col-md-8 d-flex align-items-center">
                <h6 class="mb-0">Status</h6>
              </div>
              <div class="col-md-4 text-end">
                <a href="javascript:;">
                  <i
                    class="text-sm fas fa-user-edit text-secondary"
                    data-bs-toggle="tooltip"
                    data-bs-placement="top"
                    title="Edit Status"
                  ></i>
                </a>
              </div>
            </div>
          </div>
          <div class="px-4 py-0 card-body">
            <ul v-if="data.status == 'mahasiswa'" class="list-group">
              <li class="pt-0 text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Status:</strong> &nbsp;
                {{ data.status }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Universitas:</strong> &nbsp;
                {{ data.name_university }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Mata Kuliah:</strong> &nbsp;
                {{ data.major }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Gelar:</strong> &nbsp;
                {{ data.degree }}
              </li>
            </ul>
            <ul v-else class="list-group">
              <li class="pt-0 text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Status:</strong> &nbsp;
                {{ data.status }}
              </li>
              <li class="pt-0 text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Perusahaan:</strong> &nbsp;
                {{ data.name_company }}
              </li>
            </ul>
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

import VsudSwitch from "@/components/VsudSwitch.vue";
import ProfileCard from "../../components/ProfileCard.vue";
import VsudAvatar from "../../../components/VsudAvatar.vue";
import ProjectsCard from "../../components/ProjectOverviewCard.vue";
import bgImg from "@/assets/img/curved-images/curved14.jpg";
export default {
  name: "UserPage",
  components: {
    UserTable,
    VsudAlert,
    VsudSwitch,
    ProfileCard,
    VsudAvatar,
    ProjectsCard,
  },
  setup() {
    const body = document.getElementsByTagName("body")[0];
    let data = ref(store.getters["auth/user"]);

    const user = store.getters["auth/user"];
    console.log(user);
    console.log(data);
    const token = store.getters["auth/token"];
    console.log(token);
    const alert = reactive({
      show: false,
      icon: "",
      message:
        "<strong>Primary!</strong> This is a primary alert—check it out!",
      color: "",
    });
    const alertListener = (params) => {
      alert.show = true;
      alert.message = params.message;
      alert.color = params.color;
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
        console.log("mounted");
      } catch (err) {
        console.log("error");
        console.log(err);
      }
    });
    return {
      moment,
      alert,
      alertListener,
      bgImg,
      data,
      // toggleTest,
    };
  },
};
</script>

<style scoped>
.row div {
  margin: 5px 0px;
}
</style>