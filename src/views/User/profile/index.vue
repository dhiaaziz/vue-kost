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
            <div class="text-center nav-wrapper position-relative end-0">
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
      <div class="my-auto col-12 col-md-6 col-xl-7">
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
            <div class="w-auto col-auto text-sm">
              <button class="my-1 btn btn-sm py-auto w-100 align-center" :disabled="data.verify_email" :class="{'btn-success': data.verify_email, 'btn-danger': !data.verify_email}" type="button" data-bs-toggle="modal" data-bs-target="#verifikasiEmail">
                <span v-html="data.verify_email?check:uncheck"></span> Verify Email
              </button>
            </div>
            <div class="w-auto col-auto text-sm">
              <button class="my-1 btn btn-sm py-auto w-100 align-center" disabled type="button" :class="{'btn-success': data.public, 'btn-danger': !data.public}">
                <span v-html="data.public?check:uncheck"></span>Public
              </button>
            </div>
            <div class="w-auto col-auto text-sm" v-if="data.public">
              <button class="my-1 btn btn-sm py-auto w-100 align-center" disabled type="button" :class="{'btn-success': data.public_religion, 'btn-danger': !data.public_religion}">
                <span v-html="data.public_religion?check:uncheck"></span>Religion
              </button>
            </div>
            <div class="w-auto col-auto text-sm" v-if="data.public">
              <button class="my-1 btn btn-sm py-auto w-100 align-center" disabled type="button" :class="{'btn-success': data.public_gender, 'btn-danger': !data.public_gender}">
                <span v-html="data.public_gender?check:uncheck"></span>Gender
              </button>
            </div>
            <div class="w-auto col-auto text-sm">
              <button class="my-1 btn btn-sm py-auto w-100 align-center btn-primary" type="button" data-bs-toggle="modal" data-bs-target="#gantiPassword">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-door-closed" viewBox="0 0 16 16">
                    <path d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"/>
                    <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>
                  </svg>
                </span>
                Ubah Password
              </button>
            </div>
          </div>
        </div>
      </div>
      <div class="my-auto col-12 col-md-6 col-xl-5">
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
            <img v-bind:src="'http://localhost:5000/image/ktp/' + data.image_ktp" alt="KTP" class="mx-auto shadow-sm d-block w-100 border-radius-lg"/>
          </div>
        </div>
      </div>
    </div>
  </div>

  <div class="modal fade" :modal="true" id="gantiPassword"  show="true" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="gantiPasswordLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="gantiPasswordLabel">Ganti Password</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Token:</label>
            <input v-model="token" type="text" class="form-control" id="recipient-name">
          </div>
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Password Baru:</label>
            <input v-model="newPassword" type="text" class="form-control" id="recipient-name">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="closeGantiPassword" data-bs-dismiss="modal">Tutup</button>
          <button type="button" class="btn btn-warning" @click="kirimToken('forgot password')">Kirim Token</button>
          <button type="button" class="btn btn-primary" @click="gantiPassword('forgot password')">Simpan</button>
        </div>
      </div>
    </div>
  </div>
  <div class="modal fade" id="verifikasiEmail" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="verifikasiEmailLabel" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered">
      <div class="modal-content">
        <div class="modal-header">
          <h1 class="modal-title fs-5" id="verifikasiEmailLabel">Verifikasi Email</h1>
          <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
          <div class="mb-3">
            <label for="recipient-name" class="col-form-label">Token:</label>
            <input v-model="token" type="text" class="form-control" id="recipient-name">
          </div>
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-secondary" id="closeVerifikasiEmail" data-bs-dismiss="modal">Tutup</button>
          <button type="button" class="btn btn-warning" @click="kirimToken('verify email')">Kirim Token</button>
          <button type="button" class="btn btn-primary" @click="verifikasiEmail('verify email')">Verifikasi</button>
        </div>
      </div>
    </div>
  </div>

  <div v-if="alert.show" class="top-0 py-3 position-fixed start-50 translate-middle-x w-100 rounded-bottom" :class="'btn-'+alert.color" style="z-index:1000000">
    <p class="m-0 text-center">{{alert.message}}</p>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, onBeforeUnmount, reactive, ref } from "vue";
import axios from "axios";
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
axios.defaults.headers.common["token"] = store.getters["auth/token"];
import moment from "moment";
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
    VsudAlert,
    VsudSwitch,
    ProfileCard,
    VsudAvatar,
    ProjectsCard,
  },
  setup() {
    const body = document.getElementsByTagName("body")[0];
    const store1 = useStore()
    const router1 = useRouter()
    let data = ref(store.getters["auth/user"]);
    const user = store.getters["auth/user"];
    const token = ref('')
    const newPassword = ref('')
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
    const kirimToken = async(type)=>{
      try {
        await axios.post('otp/create-otp', {type})
        alertListener({message: 'Berhasil Mengirim Token Ke '+user.email, color: 'success'})
      } catch (error) {
        alertListener({message: error.response.data.message, color: 'danger'})
        console.log(error)
      }
    };
    const verifikasiEmail = async(type)=>{
      try {
        let verify = await axios.post('otp/check-otp', {type, code_otp: token.value})
        await store1.dispatch('auth/updateProfile', verify.data.data);
        document.querySelector('#closeVerifikasiEmail').click()
        data.value.verify_email = true
        alertListener({message: 'Berhasil Verifikasi Email', color: 'success'})
      } catch (error) {
        alertListener({message: error.response.data.message, color: 'danger'})
        console.log(error)
      }
    };
    const gantiPassword = async(type)=>{
      try {
        // console.log(newPassword.value)
        let verify = await axios.post('otp/check-otp', {type, code_otp: token.value, password: newPassword.value})
        await store1.dispatch('auth/updateProfile', verify.data.data);
        document.querySelector('#closeGantiPassword').click()
        alertListener({message: 'Berhasil Mengganti Password', color: 'success'})
      } catch (error) {
        alertListener({message: error.response.data.message, color: 'danger'})
        console.log(error)
      }
    };
    const alert = reactive({
      show: false,
      icon: "",
      message:"",
      color: "",
    });
    const alertListener = (params) => {
      alert.show = true;
      alert.message = params.message;
      alert.color = params.color;
      console.log(alert)
      setTimeout(() => {
        alert.show = false
        console.log(alert)
      }, 3000);
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
      newPassword,
      verifikasiEmail,
      kirimToken,
      gantiPassword,
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