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
      <div class="mt-4 page-header min-height-100 border-radius-xl" :style="{ backgroundImage: `url(${bgImg})`, backgroundPositionY: '50%'}">
        <span class="mask bg-gradient-success opacity-6"></span>
      </div>
      <div class="mx-4 overflow-hidden card card-body blur shadow-blur mt-n6">
        <div class="row gx-4">
          <div class="col-auto">
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
          <div class="col my-auto">
            <div class="h-100">
              <h5 class="mb-1">Tagihan</h5>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="row">
      <div class="col-12">
        <div class="mb-4 card">
          <!-- <div class="pb-0 card-header d-flex justify-content-between">
            <h6>Tagihan</h6>
          </div> -->
          <div class="px-0 pt-0 pb-2 card-body">
            <div v-if="!wadah" class="d-flex justify-content-center">
              <div class="spinner-border" role="status">
                <span class="visually-hidden">Loading...</span>
              </div>
            </div>
            <h6 v-else-if="wadah.length == 0" class="text-center">Tidak Memiliki Tagihan</h6>
            <div v-else class="p-0 table-responsive">
              <table class="table mb-0 align-items-center text-center">
                <thead>
                  <tr>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Bangunan</th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Kamar</th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Ukuran</th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Mulai</th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Akhir</th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Harga</th>
                    <th class=" text-uppercase text-secondary text-xs font-weight-bolder opacity-7">Kurang</th>
                    <th class="text-secondary opacity-7"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(item, key) in wadah" :key="key">
                    <td><p class="mb-0 text-sm font-weight-bold">{{ item.build_name }}</p></td>
                    <td><p class="mb-0 text-sm font-weight-bold">{{ item.room_name }}</p></td>
                    <td><p class="mb-0 text-sm font-weight-bold">{{ item.size }}</p></td>
                    <td><p class="mb-0 text-sm font-weight-bold">{{ item.start_kos }}</p></td>
                    <td><p class="mb-0 text-sm font-weight-bold">{{ item.end_kos }}</p></td>
                    <td><p class="mb-0 text-sm font-weight-bold">{{ item.total_price }}</p></td>
                    <td><p class="mb-0 text-sm font-weight-bold">{{ item.deficiency }}</p></td>
                    <td class="align-middle">
                      <button type="button" class="btn btn-sm btn-primary m-0 px-3 py-1" data-bs-toggle="modal" data-bs-target="#modalDetail" @click="openDetail(item)">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-card-list" viewBox="0 0 16 16">
                          <path d="M14.5 3a.5.5 0 0 1 .5.5v9a.5.5 0 0 1-.5.5h-13a.5.5 0 0 1-.5-.5v-9a.5.5 0 0 1 .5-.5h13zm-13-1A1.5 1.5 0 0 0 0 3.5v9A1.5 1.5 0 0 0 1.5 14h13a1.5 1.5 0 0 0 1.5-1.5v-9A1.5 1.5 0 0 0 14.5 2h-13z"/>
                          <path d="M5 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 5 8zm0-2.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5zm-1-5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zM4 8a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0zm0 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0z"/>
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
              <nav aria-label="Page navigation example">
                <ul class="pagination justify-content-center">
                  <li v-if="page>2" class="page-item  disabled" @click="pagination(1)">
                    <a class="page-link" aria-label="Previous">
                      <span aria-hidden="true">&laquo;</span>
                    </a>
                  </li>
                  <li v-if="page>1" class="page-item" @click="pagination(page-1)"><a class="page-link">{{page-1}}</a></li>
                  <li class="page-item active"><a class="page-link">{{page}}</a></li>
                  <li v-if="page<totalPage" class="page-item" @click="pagination(page+1)"><a class="page-link">{{page+1}}</a></li>
                  <li v-if="page<totalPage-1" class="page-item" @click="pagination(totalPage)">
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
    <!-- Button trigger modal -->

    <!-- Modal -->
     <!-- background-color:rgba(0,0,0,0.5) -->
    <div class="modal fade" id="modalDetail" tabindex="1" aria-labelledby="modalDetailLabel" aria-hidden="true" style="z-index: 2000000;">
      <!-- <div class="modal-dialog modal-dialog-scrollable" style="margin: 2vh 2vw;;">
        <div class="modal-content" style="width: 96vw; height: 96vh; max-height: 100vh;"> -->
      <div class="modal-dialog modal-dialog-scrollable modal-xl">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="modalDetailLabel">Detail Tagihan</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body">
            <div class="row mx-4 my-1 ">
              <div class="col-4"><h6 class="box m-0 p-0">Bangunan</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{detail.build_name}}</p></div>
              <div class="col-4"><h6 class="box m-0 p-0">Alamat</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{detail.address}}</p></div>
              <div class="col-4"><h6 class="box m-0 p-0">Kamar</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{detail.room_name}}</p></div>
              <div class="col-4"><h6 class="box m-0 p-0">Ukuran</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{detail.size}}</p></div>
              <div class="col-4"><h6 class="box m-0 p-0">Keterangan</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{detail.description}}</p></div>
              <div class="col-4"><h6 class="box m-0 p-0">Tanggal</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{detail.start_kos + " - " + detail.end_kos}}</p></div>
              <div class="col-4"><h6 class="box m-0 p-0">Durasi</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{detail.duration}} Bulan</p></div>
              <div class="col-4"><h6 class="box m-0 p-0">Discount</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{discount(detail.discount, detail.type_discount)}}</p></div>
              <div class="col-4"><h6 class="box m-0 p-0">Harga Kamar</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{detail.price_room}}</p></div>
              <div class="col-4"><h6 class="box m-0 p-0">Tagihan</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{detail.total_price}}</p></div>
              <div class="col-4"><h6 class="box m-0 p-0">Sudah Bayar</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{detail.total_payment}}</p></div>
              <div class="col-4"><h6 class="box m-0 p-0">Kurang</h6></div>
              <div class="col-8"><p class="box m-0 p-0">{{detail.deficiency}}</p></div>
            </div>
            <div class="pb-0 mt-4 text-center">
              <h5>Tagihan</h5>
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
                    <td><p class="mb-0 text-xs font-weight-bold">{{ item.type_payment }}</p></td>
                    <td><p class="mb-0 text-xs font-weight-bold">{{ item.payment }}</p></td>
                    <td><p class="mb-0 text-xs font-weight-bold">{{ item.date }}</p></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, onBeforeMount, onBeforeUnmount, reactive, ref } from "vue";
import axios from "axios";
axios.defaults.headers.common['token'] = await store.getters["auth/token"]
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
    let payment = ref(false)
    let wadah = ref(false)
    let jumlah = ref(10)
    let page = ref(1)
    let totalPage = ref(0)
    let detail = ref({})
    let cek = ref('ini dari script')
    let itemList = ref([])
    const alert = reactive({
      show: false,
      icon: "",
      message:
        "<strong>Primary!</strong> This is a primary alert—check it out!",
      color: "",
    });

    const user = store.getters["auth/user"]
    console.log(user)
    const token = store.getters["auth/token"]
    console.log(token)
    const alertListener = (params) => {
      alert.show = true;
      alert.message = params.message;
      alert.color = params.color;
    };
    const discount = (discount, type)=>{
      switch (type) {
        case '%':
          return `${discount} ${type}`
        case 'nominal':
          return `${discount}`
        case 'month':
          return `${discount} bulan`
        default:
          return `-`
          break;
      }
    }
    const ubahUang = (item)=>{
      item = (item+"").split('')
      let con = item
      let y = 0
      for (let i = item.length; i >= 0; i--) {
        y++
        if(y % 3 == 0 && i != 0){
          const el = item[i];
          con.splice(i-1, 0, '.')
        }
      }
      return con.join('')
    }
    const openDetail = async (item)=>{
      detail.value = item; 
      payment.value = (await axios.get("/payment/show-payment", {params: {history_id: item.history_id}})).data.data.data_payment
      for (let i = 0; i < payment.value.length; i++) {
        const el = payment.value[i];
        payment.value[i].date = moment(el.date).format('DD/MM/YYYY')
        payment.value[i].payment = ubahUang(el.payment)
      }
      console.log(payment.value)
    }
    const pagination = (x)=>{
      wadah.value = itemList.value.slice(jumlah.value*x-jumlah.value, jumlah.value*x)
      page.value = x
    }
    onBeforeMount(() => {
      store.state.hideConfigButton = true;
      store.state.showNavbar = false;
      store.state.showSidenav = false;
      store.state.showFooter = false;
      body.classList.remove("bg-gray-100");
    })
    onBeforeUnmount(()=>{
      store.state.hideConfigButton = false;
      store.state.showNavbar = true;
      store.state.showSidenav = true;
      store.state.showFooter = true;
      body.classList.add("bg-gray-100");
    })
    onMounted(async() => {
      try{
        cek.value = "ubah cek"
        let history = await axios.get("/history/show-history")
        console.log("history")
        console.log(history)
        itemList.value = history.data.data.data_history
        for (let i = 0; i < itemList.value.length; i++) {
          const el = itemList.value[i];
          itemList.value[i].start_kos = moment(el.start_kos).format('DD/MM/YYYY')
          itemList.value[i].end_kos = moment(el.end_kos).format('DD/MM/YYYY')
          itemList.value[i].price_room = ubahUang(el.price_room)
          itemList.value[i].total_price = ubahUang(el.total_price)
          itemList.value[i].total_payment = ubahUang(el.total_payment)
          itemList.value[i].deficiency = ubahUang(el.deficiency)
        }
        // console.log(itemList.value)
        totalPage.value = Math.ceil(itemList.value.length/jumlah.value)
        wadah.value = itemList.value.slice(jumlah.value*page.value-jumlah.value, jumlah.value*page.value)
        console.log("mounted");
        // console.log(itemList.value)
      }catch(err){
        console.log('error')
        console.log(err)
      }
    });
    return {
      alert,
      alertListener,
      bgImg,
      cek, 
      payment,
      itemList,
      detail,
      wadah,
      page, 
      jumlah,
      totalPage,
      discount, 
      openDetail,
      pagination
      // toggleTest,
    };
  },
};
</script>

<style>
  .row div{
    margin: 5px 0px;
  }
</style>