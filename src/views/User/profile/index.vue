<template>
  <div class="container-fluid">
    <div class="mt-4 page-header min-height-200 border-radius-xl" :style="{ backgroundImage: `url(${bgImg})`, backgroundPositionY: '50%' }">
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="d-sm-flex justify-content-between">
        <div class="row gx-4">
          <div class="col-auto my-auto">
            <div class="avatar avatar-x position-relative">
              <a href="#/user-dashboard">
                <svg xmlns="http://www.w3.org/2000/svg" width="36" height="36" fill="currentColor" class="bi bi-house" viewBox="0 0 16 16">
                  <path fill-rule="evenodd" d="M2 13.5V7h1v6.5a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V7h1v6.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 13.5zm11-11V6l-2-2V2.5a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5z"/>
                  <path fill-rule="evenodd" d="M7.293 1.5a1 1 0 0 1 1.414 0l6.647 6.646a.5.5 0 0 1-.708.708L8 2.207 1.354 8.854a.5.5 0 1 1-.708-.708L7.293 1.5z"/>
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
              <img v-bind:src="'http://localhost:5000/image/profile/' + data.image_profile" alt="profile_image" class="shadow-sm w-100 border-radius-lg"/>
            </div>
          </div>
          <div class="col-auto my-auto">
            <div class="h-100">
              <h5 class="mb-1">{{ data.username }}</h5>
              <p class="mb-0 text-sm font-weight-bold">{{ data.email }}</p>
            </div>
          </div>
        </div>
        <div class="my-auto">
          <div class="my-auto">
          <!-- <div class="mx-auto mt-1 col-lg-1 col-md-1 my-sm-auto ms-sm-auto me-sm-0"> -->
            <div class="nav-wrapper position-relative end-0 text-center">
              <a href="#/user-profile/edit">
                <i class="text-sm fas fa-user-edit text-secondary" data-bs-toggle="tooltip" data-bs-placement="top" title="Edit Status"></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      <div class="col-12 col-md-6 col-xl-7 my-auto">
        <div class="card" style="max-height: 100%">
          <div class="px-2 py-0 m-0 card-header">
            <div class="row">
              <div class="col-md-8 d-flex align-items-center">
                <h6 class="mb-0">Profile</h6>
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
                {{ data.birth_place + ", " + moment(data.birth_date).format('DD-MM-YYYY') }}
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
        <div class="card" style="max-height: 100%">
          <div class="px-2 py-0 m-0 card-header">
            <div class="row">
              <div class="col-md-8 d-flex align-items-center">
                <h6 class="mb-0">Emegency</h6>
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
          <div class="px-2 py-0 row wrap">
            <div class="col-auto w-auto text-sm">
              <button class="btn btn-sm my-1 py-auto w-100 align-center" :disabled="data.verify_email" :class="{'btn-success': data.verify_email, 'btn-danger': !data.verify_email}" type="button" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                <span v-html="data.verify_email?check:uncheck"></span> Verify Email
              </button>
            </div>
            <div class="col-auto w-auto text-sm">
              <button class="btn btn-sm my-1 py-auto w-100 align-center" disabled type="button" :class="{'btn-success': data.public, 'btn-danger': !data.public}">
                <span v-html="data.public?check:uncheck"></span>Public
              </button>
              <!-- <span v-html="data.public?check:uncheck"></span> Public -->
            </div>
            <div class="col-auto w-auto text-sm" v-if="data.public">
              <button class="btn btn-sm my-1 py-auto w-100 align-center" disabled type="button" :class="{'btn-success': data.public_religion, 'btn-danger': !data.public_religion}">
                <span v-html="data.public_religion?check:uncheck"></span>Religion
              </button>
              <!-- <span v-html="data.public_religion?check:uncheck"></span> Gender -->
            </div>
            <div class="col-auto w-auto text-sm" v-if="data.public">
              <button class="btn btn-sm my-1 py-auto w-100 align-center" disabled type="button" :class="{'btn-success': data.public_gender, 'btn-danger': !data.public_gender}">
                <span v-html="data.public_gender?check:uncheck"></span>Gender
              </button>
              <!-- <span v-html="data.public_gender?check:uncheck"></span> Religion -->
            </div>
          </div>
        </div>
      </div>
      <div class="col-12 col-md-6 col-xl-5 my-auto">
        <div class="mt-2 card" style="max-height: 100%">
          <div class="px-2 py-0 m-0 card-header">
            <div class="row">
              <div class="col-md-8 d-flex align-items-center">
                <h6 class="mb-0">Status</h6>
              </div>
            </div>
          </div>
          <div class="px-4 py-0 card-body">
            <ul v-if="data.status == 'mahasiswa'" class="list-group">
              <li class="pt-0 text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Status:</strong> &nbsp; {{ data.status }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Universitas:</strong> &nbsp; {{ data.name_university }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Mata Kuliah:</strong> &nbsp; {{ data.major }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Gelar:</strong> &nbsp; {{ data.degree }}
              </li>
            </ul>
            <ul v-else class="list-group">
              <li class="pt-0 text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Status:</strong> &nbsp; {{ data.status }}
              </li>
              <li class="pt-0 text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Perusahaan:</strong> &nbsp; {{ data.name_company }}
              </li>
            </ul>
          </div>
        </div>
        <div class="mt-2 card" style="max-height: 100%">
          <div class="px-2 py-0 m-0 card-header">
            <div class="row">
              <div class="col-md-8 d-flex align-items-center">
                <h6 class="mb-0">Foto KTP</h6>
              </div>
            </div>
          </div>
          <div class="px-4 py-0 card-body">
            <img v-bind:src="'http://localhost:5000/image/ktp/' + data.image_ktp" alt="KTP" class="d-block mx-auto shadow-sm w-100 border-radius-lg"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Token:</label>
            <input v-model="token" type="text" class="form-control" id="recipient-name">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Tutup</button>
          <button type="button" class="btn btn-warning" @click="kirimToken">Kirim Token</button>
          <button type="button" class="btn btn-primary" @click="cekToken">Cek Token</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, onBeforeUnmount, reactive, ref } from "vue";
import axios from "axios";
import { useStore } from 'vuex'
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
    const store1 = useStore()
    let data = ref(store.getters["auth/user"]);
    const user = store.getters["auth/user"];
    const token = ref('')
    console.log(user)
    const check = ref(`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2-square" viewBox="0 0 16 16">
        <path d="M3 14.5A1.5 1.5 0 0 1 1.5 13V3A1.5 1.5 0 0 1 3 1.5h8a.5.5 0 0 1 0 1H3a.5.5 0 0 0-.5.5v10a.5.5 0 0 0 .5.5h10a.5.5 0 0 0 .5-.5V8a.5.5 0 0 1 1 0v5a1.5 1.5 0 0 1-1.5 1.5H3z"/>
        <path d="m8.354 10.354 7-7a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0z"/>
      </svg>
    `)
    const uncheck = ref(`
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-square" viewBox="0 0 16 16">
        <path d="M14 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1h12zM2 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2H2z"/>
        <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
      </svg>
    `)
    const kirimToken = async()=>{
      try {
        let verify = await axios.post('otp/create-otp', {type: 'verify email'})
        console.log(verify)
      } catch (error) {
        console.log(error)
      }
    };
    const cekToken = async()=>{
      try {
        // console.log(token.value)
        let verify = await axios.post('otp/check-otp', {type: 'verify email', code_otp: token.value})
        await store1.dispatch('auth/updateProfile', verify.data.data);
        console.log(verify)
      } catch (error) {
        console.log(error)
      }
    };
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
      check, 
      uncheck,
      token, 
      cekToken,
      kirimToken,
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