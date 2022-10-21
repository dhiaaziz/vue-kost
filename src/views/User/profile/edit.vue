<template>
  <div class="container-fluid">
    <div class="mt-4 page-header min-height-200 border-radius-xl" :style="{ backgroundImage: `url(${bgImg})`, backgroundPositionY: '50%' }">
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto my-auto">
          <div class="avatar avatar-x position-relative">
            <a href="#/user-profile">
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-arrow-90deg-left" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M1.146 4.854a.5.5 0 0 1 0-.708l4-4a.5.5 0 1 1 .708.708L2.707 4H12.5A2.5 2.5 0 0 1 15 6.5v8a.5.5 0 0 1-1 0v-8A1.5 1.5 0 0 0 12.5 5H2.707l3.147 3.146a.5.5 0 1 1-.708.708l-4-4z"/>
              </svg>
            </a>
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">Edit Profile</h5>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="my-0 mt-4">
      <div class="card h-100">
        <!-- <div class="px-2 py-0 m-0 card-header">
          <div class="row">
            <div class="col-md-8 d-flex align-items-center">
              <h6 class="mb-0">Edit Profile</h6>
            </div>
          </div>
        </div> -->
        <div class="px-6 py-4 card-body">
          <div class="p-0 m-0 h-100 w-100 row">
            <div class="mb-0 form-floating col-md-12 col-sm-12">
              <input v-model="form.username" @keyup="validasi('username')" type="text" :class="{'is-invalid': !cek.username.status}" class="form-control" id="floatingInput">
              <label for="floatingInput" class="px-4">Username</label>
              <span class="px-2 text-xs text-danger">{{cek.username.message}}</span>
            </div>
            <div class="mb-0 form-floating col-md-6 col-sm-12">
              <input v-model="form.email" @keyup="validasi('email')" :class="{'is-invalid': !cek.email.status}" type="email" class="form-control" id="floatingInput">
              <label for="floatingInput" class="px-4">Email</label>
              <span class="px-2 text-xs text-danger">{{cek.email.message}}</span>
            </div>
            <div class="mb-0 form-floating col-md-6 col-sm-12">
              <input v-model="form.contact" @keyup="validasi('contact')" :class="{'is-invalid': !cek.contact.status}" type="text" class="form-control" id="floatingInput">
              <label for="floatingInput" class="px-4">Kontak Pribadi</label>
              <span class="px-2 text-xs text-danger">{{cek.contact.message}}</span>
            </div>
            <div class="mb-0 form-floating col-md-6 col-sm-12">
              <div class="mt-0 mb-3 form-floating">
                <select v-model="form.gender" class="form-select" style="padding-left:35px;" id="floatingSelectGrid">
                  <option value="laki-laki">Laki-Laki</option>
                  <option value="perempuan">Perempuan</option>
                </select>
                <label for="floatingSelectGrid" class="px-2">Gender</label>
              </div>
            </div>
            <div class="mb-0 form-floating col-md-6 col-sm-12">
              <div class="mt-0 form-floating">
                <select v-model="form.religion" class="form-select" style="padding-left:35px;" id="floatingSelectGrid">
                  <option value="islam">Islam</option>
                  <option value="kristen">Kristen</option>
                  <option value="katholik">Katholik</option>
                  <option value="hindu">Hindu</option>
                  <option value="budha">Budha</option>
                  <option value="konghuchu">Konghuchu</option>
                </select>
                <label for="floatingSelectGrid" class="px-2">Agama</label>
              </div>
            </div>
            <div class="mb-0 form-floating col-md-6 col-sm-12">
              <input v-model="form.birth_place" @keyup="validasi('birth_place')" :class="{'is-invalid': !cek.birth_place.status}" type="text" class="form-control" id="floatingInput">
              <label for="floatingInput" class="px-4">Tempat Lahir</label>
              <span class="px-2 text-xs text-danger">{{cek.birth_place.message}}</span>
            </div>
            <div class="mb-0 form-floating col-md-6 col-sm-12">
              <input v-model="form.birth_date" @change="validasi('birth_date')" :class="{'is-invalid': !cek.birth_date.status}" id="startDate" class="form-control" type="date"/>
              <label for="floatingInput" class="px-4">Tanggal Lahir</label>
              <span class="px-2 text-xs text-danger">{{cek.birth_date.message}}</span>
            </div>
            <div class="mb-0 form-floating col-md-6 col-sm-12">
              <input v-model="form.emergency_contact" @keyup="validasi('emergency_contact')" :class="{'is-invalid': !cek.emergency_contact.status}" type="text" class="form-control" id="floatingInput">
              <label for="floatingInput" class="px-4">Kontak Darurat</label>
              <span class="px-2 text-xs text-danger">{{cek.emergency_contact.message}}</span>
            </div>
            <div class="mb-0 form-floating col-md-6 col-sm-12">
              <input v-model="form.emergency_name" @keyup="validasi('emergency_name')" :class="{'is-invalid': !cek.emergency_name.status}" type="text" class="form-control" id="floatingInput">
              <label for="floatingInput" class="px-4">Nama Kontak Darurat</label>
              <span class="px-2 text-xs text-danger">{{cek.emergency_name.message}}</span>
            </div>
            <div class="mb-0 form-floating col-md-12 col-sm-12">
              <div class="mt-0 mb-3 form-floating">
                <select v-model="form.status" class="form-select" style="padding-left:35px;" id="floatingSelectGrid">
                  <option value="mahasiswa">Mahasiswa</option>
                  <option value="pekerja">Pekerja</option>
                </select>
                <label for="floatingSelectGrid" class="px-2">Status</label>
              </div>
            </div>
            <div v-if="form.status=='pekerja'" class="mb-0 form-floating col-md-12 col-sm-12">
              <input v-model="form.name_company" @keyup="validasi('name_company')" :class="{'is-invalid': !cek.name_company.status}" type="text" class="form-control" id="floatingInput">
              <label for="floatingInput" class="px-4">Perusahaan</label>
              <span class="px-2 text-xs text-danger">{{cek.name_company.message}}</span>
            </div>
            <div v-if="form.status=='mahasiswa'" class="mb-0 form-floating col-md-6 col-sm-12">
              <input v-model="form.name_university" @keyup="validasi('name_university')" :class="{'is-invalid': !cek.name_university.status}" type="text" class="form-control" id="floatingInput">
              <label for="floatingInput" class="px-4">Universitas</label>
              <span class="px-2 text-xs text-danger">{{cek.name_university.message}}</span>
            </div>
            <div v-if="form.status=='mahasiswa'" class="mb-0 form-floating col-md-6 col-sm-12">
              <input v-model="form.degree" @keyup="validasi('degree')" :class="{'is-invalid': !cek.degree.status}" type="text" class="form-control" id="floatingInput">
              <label for="floatingInput" class="px-4">Jurusan</label>
              <span class="px-2 text-xs text-danger">{{cek.degree.message}}</span>
            </div>
            <div v-if="form.status=='mahasiswa'" class="mb-0 form-floating col-md-6 col-sm-12">
              <input v-model="form.major" @keyup="validasi('major')" :class="{'is-invalid': !cek.major.status}" type="text" class="form-control" id="floatingInput">
              <label for="floatingInput" class="px-4">Tingkat</label>
              <span class="px-2 text-xs text-danger">{{cek.major.message}}</span>
            </div>
            <div v-if="form.status=='mahasiswa'" class="mb-0 form-floating col-md-6 col-sm-12">
              <input v-model="form.generation" @input="validasi('generation')" :class="{'is-invalid': !cek.generation.status}" type="text" class="form-control" id="floatingInput">
              <label for="floatingInput" class="px-4">Tahun Masuk</label>
              <span class="px-2 text-xs text-danger">{{cek.generation.message}}</span>
            </div>
            <div class="mb-0 form-floating col-md-12 col-sm-12">
              <button type="button" class="mx-2 mb-2 btn btn-success" :class="{'btn-danger':!form.public}" @click="form.public=!form.public, form.public_gender = form.public, form.public_religion = form.public">Public</button>
              <button v-if="form.public" type="button" class="mx-2 mb-2 btn btn-success" :class="{'btn-danger':!form.public_gender}" @click="form.public_gender=!form.public_gender">Gender</button>
              <button v-if="form.public" type="button" class="mx-2 mb-2 btn btn-success" :class="{'btn-danger':!form.public_religion}" @click="form.public_religion=!form.public_religion">Religion</button>
              <p class="p-0 m-0 mb-4 text-sm">* data yang dapat dilihat oleh tetangga</p>
            </div>
            <div class="mb-0 form-floating col-md-12 col-sm-12 row">
              <div class="col-md-6 col-sm-12">
                <div class="mb-3">
                  <label for="formFile" class="form-label">Foto Profil</label>
                  <input ref="file_profil" @change="fProfil" class="form-control" type="file" id="formFile">
                </div>
                <img class="mx-auto d-block" style="width: 90%" :src="image_profil" alt="profile" srcset="">
              </div>
              <div class="col-md-6 col-sm-12">
                <div class="mb-3">
                  <label for="formFile" class="form-label">Foto KTP</label>
                  <input ref="file_ktp" @change="fKtp" class="form-control" type="file" id="formFile">
                </div>
                <img class="mx-auto d-block" style="width: 90%" :src="image_ktp" alt="profile" srcset="">
              </div>
            </div>
            <div class="mb-0 form-floating col-md-12 col-sm-12">
              <div class="mx-4">
                <button type="button" class="mb-2 btn btn-primary w-100" @click="simpan">Simpan</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, onBeforeUnmount, reactive, ref, watch  } from "vue";
import { useStore } from 'vuex'
import { useRouter, useRoute } from 'vue-router'
import axios from "axios";
axios.defaults.headers.common["token"] = await store.getters["auth/token"];
import moment from "moment";
import UserTable from "@/views/components/User/UserTable.vue";
import VsudAlert from "@/components/VsudAlert.vue";
import VsudInput from "@/components/VsudInput.vue";
import store from "../../../store";

import VsudSwitch from "@/components/VsudSwitch.vue";
import ProfileCard from "../../components/ProfileCard.vue";
import VsudAvatar from "../../../components/VsudAvatar.vue";
import ProjectsCard from "../../components/ProjectOverviewCard.vue";
import bgImg from "@/assets/img/curved-images/curved14.jpg";

import { IP_BACKEND } from "@/config/ip.js";

export default {
  name: "UserPage",
  components: {
    UserTable,
    VsudAlert,
    VsudInput,
    VsudSwitch,
    ProfileCard,
    VsudAvatar,
    ProjectsCard,
  },
  setup() {
    const body = document.getElementsByTagName("body")[0];
    const store1 = useStore()
    const router1 = useRouter()
    const form = reactive(store.getters["auth/user"]);
    const cek = reactive({
      username: {status: true, message: '', required: true, maxLength: 255},
      email: {status: true, message: '', required: true, maxLength: 255},
      contact: {status: true, message: '', required: true, number: true},
      religion: {status: true, message: '', required: true},
      birth_place: {status: true, message: '', required: true, maxLength: 255},
      birth_date: {status: true, message: '', required: true},
      emergency_contact: {status: true, message: '', required: true, number: true},
      emergency_name: {status: true, message: '', required: true, maxLength: 255},
      status: {status: true, message: '', required: true},
      name_company: {status: true, message: '', required: true, maxLength: 255},
      name_university: {status: true, message: '', required: true, maxLength: 255},
      degree: {status: true, message: '', required: true, maxLength: 255},
      major: {status: true, message: '', required: true, maxLength: 255},
      generation: {status: true, message: '', required: true, number: true, max: moment().format("YYYY")+''},
    })
    const user = store.getters["auth/user"];
    form.birth_date = moment(user.birth_date).format("YYYY-MM-DD")
    // const token = store.getters["auth/token"];
    console.log(user)
    const api_endpoint = IP_BACKEND;
    // const image_profil = ref('http://localhost:5000/image/profile/'+form.image_profile)
    // const image_ktp = ref('http://localhost:5000/image/ktp/'+form.image_ktp)

    const image_profil = ref(api_endpoint + '/image/profile/'+form.image_profile);

    const image_ktp = ref(api_endpoint + '/image/ktp/'+form.image_ktp);
    const file_profil = ref(null)
    const file_ktp = ref(null)
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
    const alert = reactive({
      show: false,
      icon: "",
      message:
        "<strong>Primary!</strong> This is a primary alert—check it out!",
      color: "",
    });
    const fProfil = ()=>{
      form.image_profile = true
      form.image_profil1 = file_profil.value.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file_profil.value.files[0]);
      reader.onload = (e) => {
        image_profil.value = e.target.result;
      };
    };
    const fKtp = ()=>{
      form.image_ktp = true
      form.image_ktp1 = file_ktp.value.files[0]
      const reader = new FileReader();
      reader.readAsDataURL(file_ktp.value.files[0]);
      reader.onload = (e) => {
        image_ktp.value = e.target.result;
      };
    };
    const simpan = async ()=>{
      try {
        let run = true
        for (const key in cek) {
          if (Object.hasOwnProperty.call(cek, key)) {
            const item = cek[key];
            if(!item.status) run = false
          }
        }
        if(run){
          console.log(form)
          let formData = new FormData()
          console.log(form)
          if(form.image_profile === true) formData.append('image_profile', form.image_profil1)
          if(form.image_ktp === true) formData.append('image_ktp', form.image_ktp1)
          formData.append('username', form.username)
          if(user.email != form.email)formData.append('email', form.email)
          formData.append('contact', form.contact)
          formData.append('gender', form.gender)
          formData.append('religion', form.religion)
          formData.append('birth_place', form.birth_place)
          formData.append('birth_date', form.birth_date)
          formData.append('emergency_contact', form.emergency_contact)
          formData.append('emergency_name', form.emergency_name)
          formData.append('status', form.status)
          formData.append('name_company', form.name_company)
          formData.append('name_university', form.name_university)
          formData.append('degree', form.degree)
          formData.append('major', form.major)
          formData.append('generation', form.generation)
          formData.append('public1', form.public)
          formData.append('public_gender', form.public_gender)
          formData.append('public_religion', form.public_religion)
          let result = await axios.put('user/update-profile', formData)
          console.log('result', result)
          if(result.status == 200) {
            await store1.dispatch('auth/updateProfile', result.data.data);
            router1.push({ name: "User Profile" });
          }
          console.log('data', result, form)
        }else{
          console.log("validasi salah")
        }
      } catch (error) {
        console.log(error)
      }
    }
    const validasi = (el)=>{
      let item = form[el]
      let valid = cek[el]
      let hasil = [true, '']
      //validasi
      if(valid.required && (!item && item !== false)){ 
        hasil = [false, 'harap untuk di isi']
      }else if(valid.maxLength && item.length > valid.maxLength){
        hasil = [false, `maksimal ${valid.maxLength} karakter`]
      }
      // console.log(el, hasil)
      valid.status = hasil[0]
      valid.message = hasil[1]
      //rekayasa data
      if(valid.max && Number.parseInt(item) > Number.parseInt(valid.max)){
        form[el] = valid.max
      }
      if(valid.number){
        if(/\D/.test(item)){
          form[el] = item.replace(/\D/g, '')
        }
      }
    }
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
      validasi, 
      simpan, 
      image_profil, 
      image_ktp, 
      file_profil,
      file_ktp, 
      fProfil, 
      fKtp, 
      bgImg,
      form,
      cek,
      check, 
      uncheck,
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