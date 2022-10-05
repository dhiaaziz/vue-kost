<template>
  <div class="container-fluid">
    <div class="mt-4 page-header min-height-200 border-radius-xl" :style="{ backgroundImage: `url(${bgImg})`, backgroundPositionY: '50%'}">
      <span class="mask bg-gradient-success opacity-6"></span>
    </div>
    <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
      <div class="row gx-4">
        <div class="col-auto">
          <div class="avatar avatar-xl position-relative">
            <a href="#/user-profile"><img v-bind:src="'http://localhost:5000/image/profile/'+user.image_profile" alt="profile_image" class="shadow-sm w-100 border-radius-lg"/></a>
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">{{user.username}}</h5>
            <!-- <p class="mb-0 text-sm font-weight-bold">{{user.email}}</p> -->
          </div>
        </div>
        <div class="mx-auto mt-1 col-lg-1 col-md-1 my-sm-auto ms-sm-auto me-sm-0">
          <div class="nav-wrapper position-relative end-0 text-end">
            <a class="d-block" @click="handleLogout">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-box-arrow-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M10 12.5a.5.5 0 0 1-.5.5h-8a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h8a.5.5 0 0 1 .5.5v2a.5.5 0 0 0 1 0v-2A1.5 1.5 0 0 0 9.5 2h-8A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h8a1.5 1.5 0 0 0 1.5-1.5v-2a.5.5 0 0 0-1 0v2z"/>
                <path fill-rule="evenodd" d="M15.854 8.354a.5.5 0 0 0 0-.708l-3-3a.5.5 0 0 0-.708.708L14.293 7.5H5.5a.5.5 0 0 0 0 1h8.793l-2.147 2.146a.5.5 0 0 0 .708.708l3-3z"/>
              </svg>
            </a>
            <!-- <p class="m-0 p-0 text-center text-sm font-weight-bold">
              {{history.build_name}} - {{history.room_name}} 
              {{history.start_kos + ' - ' + history.end_kos}}
            </p> -->
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      <div class="mt-4 col-12 col-md-7 col-xl-7 mt-md-0">
        <div class="card h-100">
          <div class="py-0 px-2 m-0 card-header">
            <div class="row">
              <div class="col-md-8 d-flex align-items-center">
                <h6 class="mb-0">Tagihan</h6>
              </div>
              <div class="col-md-4 text-end">
                <a href="#/user-history">
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                    <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                    <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div v-if="history == false" class="d-flex justify-content-center">
            <div class="spinner-border" role="status">
              <span class="visually-hidden">Loading...</span>
            </div>
          </div>
          <h6 v-else-if="history == undefined" class="text-center">Tidak Menyewa Kamar</h6>
          <div v-else class="py-0 px-4 card-body">
            <ul class="list-group">
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Durasi:</strong> &nbsp; {{history.duration}} Bulan
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Keterangan:</strong> &nbsp; {{history.description}}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Tanggal Kos:</strong> &nbsp; {{history.start_kos}} - {{history.end_kos}}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Bangunan:</strong> &nbsp; {{history.build_name}}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Ruangan:</strong> &nbsp; {{history.room_name}}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Alamat:</strong> &nbsp; {{history.address}}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Harga:</strong> &nbsp; {{history.pay}}
              </li>
            </ul>
            <div class="pb-0 mt-4 text-center">
              <h6>Pembayaran</h6>
            </div>
            <div v-if="!payment" class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <h6 v-else-if="payment.length == 0" class="text-center">Tidak Memiliki Pembayaran</h6>
            <div v-else class="p-0 table-responsive">
              <table class="table mb-0 align-items-center text-center">
                <thead>
                  <tr>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Tipe Pembayaran</th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Bayar</th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Tanggal</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, key) in payment" :key="key">
                    <td>
                      <p class="mb-0 text-sm font-weight-bold">{{ item.type_payment }}</p>
                    </td>
                    <td>
                      <p class="mb-0 text-sm font-weight-bold">{{ item.payment }}</p>
                    </td>
                    <td>
                      <p class="mb-0 text-sm font-weight-bold">{{ item.date }}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-4 col-12 col-md-5 col-xl-5 mt-md-0">
        <div class="card h-100">
          <div class="py-0 px-2 m-0 card-header">
            <div class="row">
              <div class="col-md-8 d-flex align-items-center">
                <h6 class="mb-0">Tetangga</h6>
              </div>
              <div class="col-md-4 text-end">
                <a href="#/user-tetangga"> 
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" class="bi bi-people" viewBox="0 0 16 16">
                    <path d="M15 14s1 0 1-1-1-4-5-4-5 3-5 4 1 1 1 1h8zm-7.978-1A.261.261 0 0 1 7 12.996c.001-.264.167-1.03.76-1.72C8.312 10.629 9.282 10 11 10c1.717 0 2.687.63 3.24 1.276.593.69.758 1.457.76 1.72l-.008.002a.274.274 0 0 1-.014.002H7.022zM11 7a2 2 0 1 0 0-4 2 2 0 0 0 0 4zm3-2a3 3 0 1 1-6 0 3 3 0 0 1 6 0zM6.936 9.28a5.88 5.88 0 0 0-1.23-.247A7.35 7.35 0 0 0 5 9c-4 0-5 3-5 4 0 .667.333 1 1 1h4.216A2.238 2.238 0 0 1 5 13c0-1.01.377-2.042 1.09-2.904.243-.294.526-.569.846-.816zM4.92 10A5.493 5.493 0 0 0 4 13H1c0-.26.164-1.03.76-1.724.545-.636 1.492-1.256 3.16-1.275zM1.5 5.5a3 3 0 1 1 6 0 3 3 0 0 1-6 0zm3-2a2 2 0 1 0 0 4 2 2 0 0 0 0-4z"/>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div class="px-0 pt-0 pb-2 card-body">
            <div v-if="!tetangga" class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <h6 v-else-if="tetangga.length == 0" class="text-center">Tidak Memiliki Tetangga</h6>
            <div v-else class="p-0 table-responsive mx-1">
              <table class="table mb-0 align-items-center text-center">
                <thead>
                  <tr>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7"></th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Nama</th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Religion</th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Gender</th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Kamar</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, key) in tetangga" :key="key">
                    <td>
                      <img v-bind:src="'http://localhost:5000/image/profile/'+item.image_profile" class="m-0 p-0 rounded-circle" style="width: 2rem; height: 2rem;">
                    </td>
                    <td>
                      <p class="mb-0 text-sm font-weight-bold">{{ item.username }}</p>
                    </td>
                    <td>
                      <p class="mb-0 text-sm font-weight-bold">{{ item.gender }}</p>
                    </td>
                    <td>
                      <p class="mb-0 text-sm font-weight-bold">{{ item.religion }}</p>
                    </td>
                    <td>
                      <p class="mb-0 text-sm font-weight-bold">{{ item.room }}</p>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
axios.defaults.headers.common['token'] = await store.getters["auth/token"]
import store from "../../../store";
import bgImg from "@/assets/img/curved-images/curved14.jpg";
const body = document.getElementsByTagName("body")[0];
export default {
  name: "UserPage",
  components: {
    
  },
  data() {
    return {
      showMenu: false,
      history: false,
      payment: false,
      tetangga: false,
      user: store.getters["auth/user"],
      body: document.getElementsByTagName("body")[0],
      bgImg: bgImg,
    };
  },
  beforeMount(){
    store.state.hideConfigButton = true;
    store.state.showNavbar = false;
    store.state.showSidenav = false;
    store.state.showFooter = false;
    body.classList.remove("bg-gray-100");
  },
  beforeUnmount(){
    store.state.hideConfigButton = false;
    store.state.showNavbar = true;
    store.state.showSidenav = true;
    store.state.showFooter = true;
    body.classList.add("bg-gray-100");
  },
  async mounted() {
    const vm = this
    try{
      //user
      vm.user.start_kos = moment(vm.user.start_kos).format('DD/MM/YYYY')
      vm.user.end_kos = moment(vm.user.end_kos).format('DD/MM/YYYY')
      //history
      let history = (await axios.get("/history/show-history-now", {params: {user_id: vm.user.id}})).data.data 
      if(history.length == 0) {vm.history = undefined; vm.tetangga = []}
      else{
        history = history[0]
        history.start_kos = moment(vm.user.start_kos).format('DD/MM/YYYY')
        history.end_kos = moment(vm.user.end_kos).format('DD/MM/YYYY')
        vm.history = history
        //payment
        vm.payment = (await axios.get("/payment/show-payment", {params: {history_id: history.history_id}})).data.data.data_payment
        for (let i = 0; i < vm.payment.length; i++) {
          const el = vm.payment[i];
          console.log(el)
          console.log(el.payment)
          vm.payment[i].date = moment(el.date).format('DD/MM/YYYY')
          vm.payment[i].payment = this.ubahUang(el.payment)
        }
        //tetangga
        let tetangga = await axios.get("/user/show-user-kos")
        tetangga.length == 0 ? vm.tetangga = undefined : vm.tetangga = tetangga.data.data
      }
    }catch(err){
      console.log('error')
      console.log(err)
    }
  },
  computed: {
    currentRouteName() {
      return this.$route.name;
    },
    isAuthenticated() {
      return this.$store.getters["auth/isAuthenticated"];
    },
    user2() {
      return this.$store.state["auth"].token;
    },
  },
  methods: {
    ubahUang (data){
      console.log(data)
      data = (data+"").split('')
      let con = data
      let y = 0
      for (let i = data.length; i >= 0; i--) {
        y++
        if(y % 3 == 0 && i != 0){
          const el = data[i];
          con.splice(i-1, 0, '.')
        }
      }
      return con.join('')
    },
    handleLogout() {
      this.$store.dispatch("auth/logout");
      this.$router.push({ name: "Sign In" });
    }
  },
};
</script>

<style>
  .row div{
    margin: 5px 0px;
  }
</style>