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
      <!-- 
      <vsud-alert
        :show="true"
        :color="alert.color"
        icon="ni ni-like-2 ni-lg"
        dismissible
      >
        <span v-html="alert.message"></span>
      </vsud-alert> -->
    </Transition>
    <!-- <Transition>
      <p v-show="alert.show">test</p>
    </Transition> -->
    <div class="row">
      <div class="col-12">
        <!-- <kamar-table @alert-event="alertListener" /> -->
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
                    Tambah Kamar
                  </router-link>
                </div>
              </div>
              <!-- <div class="mt-4 mt-md-0 col-12 col-md-4">
                <search-component :placeholder="'Cari kamar...'" @search="handleSearch"/>
              </div> -->
              <div class="mt-4 mt-md-0 col-12 col-md-4">
                <div class="input-group">
                  <span class="input-group-text text-body">
                    <i class="fas fa-search" aria-hidden="true"></i>
                  </span>
                  <input
                    type="text"
                    class="form-control"
                    :placeholder="
                      $store.state.isRTL ? 'أكتب هنا...' : 'Cari Kamar..'
                    "
                    v-model="search"
                    @keyup="handleSearch"
                  />
                </div>
              </div>
            </div>
          </div>
          <!-- end-button and search section  -->
          <div class="px-0 pt-0 pb-2 card-body">
            <div class="p-0 table-responsive">
              <!-- <div class="px-0 pt-0 pb-2 card-body"> -->
              <div v-if="!kamar" class="d-flex justify-content-center">
                <div class="spinner-border" role="status">
                  <span class="visually-hidden">Loading...</span>
                </div>
              </div>
              <h6 v-else-if="kamar.length == 0" class="text-center">
                Tidak Memiliki kamar
              </h6>
              <div v-else class="p-0 mx-1 table-responsive">
                <table class="table mb-0 text-center align-items-center">
                  <thead>
                    <tr>
                      <th
                        class="text-xs  text-uppercase text-secondary font-weight-bolder opacity-7 bg-gradient-secondary"
                      >
                        No
                      </th>
                      <th
                        class="text-xs  text-uppercase text-secondary font-weight-bolder opacity-7"
                      >
                        Build
                      </th>
                      <th
                        class="text-xs  text-uppercase text-secondary font-weight-bolder opacity-7"
                      >
                        Room
                      </th>
                      <th
                        class="text-xs  text-uppercase text-secondary font-weight-bolder opacity-7"
                      >
                        Size
                      </th>
                      <th
                        class="text-xs  text-uppercase text-secondary font-weight-bolder opacity-7"
                      >
                        Price
                      </th>
                      <th
                        class="text-xs  text-uppercase text-secondary font-weight-bolder opacity-7"
                      >
                        Name
                      </th>
                      <th
                        class="text-xs  text-uppercase text-secondary font-weight-bolder opacity-7"
                      >
                        Duration
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="(item, key) in data" :key="key">
                      <td>
                        <p class="mb-0 text-sm font-weight-bold">
                          {{ key + 1 + (page - 1) * jumlah }}
                        </p>
                      </td>
                      <td>
                        <p class="mb-0 text-sm font-weight-bold">
                          {{ item.build_name }}
                        </p>
                      </td>
                      <td>
                        <p class="mb-0 text-sm font-weight-bold">
                          {{ item.name }}
                        </p>
                      </td>
                      <td>
                        <p class="mb-0 text-sm font-weight-bold">
                          {{ item.size }}
                        </p>
                      </td>
                      <td>
                        <p class="mb-0 text-sm font-weight-bold">
                          {{ item.price }}
                        </p>
                      </td>
                      <td>
                        <p class="mb-0 text-sm font-weight-bold">
                          {{ item.username || "-" }}
                        </p>
                      </td>
                      <td>
                        <p class="mb-0 text-sm font-weight-bold">
                          {{
                            item.username
                              ? moment(item.start_kos).format("DD/MM/YYYY") +
                                " - " +
                                moment(item.end_kos).format("DD/MM/YYYY")
                              : "-"
                          }}
                        </p>
                      </td>
                    </tr>
                  </tbody>
                </table>
                <nav aria-label="Page navigation example">
                  <ul class="pagination justify-content-center">
                    <li
                      v-if="page > 2"
                      class="page-item disabled"
                      @click="page = 1"
                    >
                      <a class="page-link" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                      </a>
                    </li>
                    <li v-if="page > 1" class="page-item" @click="page--">
                      <a class="page-link">{{ page - 1 }}</a>
                    </li>
                    <li class="page-item active">
                      <a class="page-link">{{ page }}</a>
                    </li>
                    <li
                      v-if="page < totalPage"
                      class="page-item"
                      @click="page++"
                    >
                      <a class="page-link">{{ page + 1 }}</a>
                    </li>
                    <li
                      v-if="page < totalPage - 1"
                      class="page-item"
                      @click="page = totalPage"
                    >
                      <a class="page-link" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
              <!-- </div> -->
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- <button @click="toggleTest">Toggle test</button> -->
    <!-- <div class="row">
      <div class="col-12">
        <projects-table />
      </div>
    </div> -->
  </div>
</template>

<script>
import moment from "moment";
import axios from "axios";
axios.defaults.headers.common["token"] = await store.getters["auth/token"];
// import AuthorsTable from "@/views/components/AuthorsTable.vue";
// import ProjectsTable from "@/views/components/ProjectsTable.vue";
import KamarTable from "@/views/components/Kamar/KamarTable.vue";
import VsudAlert from "@/components/VsudAlert.vue";
import store from "../../../store";
export default {
  name: "KamarPage",
  components: {
    VsudAlert,
  },
  data() {
    return {
      moment,
      search: "",
      page: 1,
      totalPage: 1,
      jumlah: 10,
      kamar: false,
      user: store.getters["auth/user"],
      body: document.getElementsByTagName("body")[0],
      alert: {
        show: false,
        icon: "",
        message:
          "<strong>Primary!</strong> This is a primary alert—check it out!",
        color: "",
      },
    };
  },
  async mounted() {
    const vm = this;
    try {
      //kamar
      let kamar = (await axios.get("/room/show-room")).data.data;
      console.log(kamar);
      // let kamar = (await axios.get("/kamar/show-kamar", {params: {user_id: vm.user.id}})).data.data
      if (kamar.length == 0) {
        vm.kamar = undefined;
        vm.tetangga = [];
      } else {
        vm.kamar = kamar.data_room;
        vm.totalPage = Math.ceil(kamar.length / vm.jumlah);
      }
    } catch (err) {
      console.log("error");
      console.log(err);
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
    data() {
      let vm = this;
      let data = JSON.parse(JSON.stringify(this.kamar));
      // if(vm.search!='') data.map((el, idx, arr)=>console.log([el.name, data[idx], el, (new RegExp(`.*${vm.search}.*`)).test(el.name)]))
      // if(vm.search!='') data = data.map((el, idx, arr)=>{if((new RegExp(`.*${vm.search}.*`)).test(el.name)) return el})
      if (vm.search != "") {
        data = data.filter((el, idx, arr) => {
          if (new RegExp(`.*${vm.search}.*`).test(el.name)) return true;
          else return false;
        });
      }
      vm.totalPage = Math.ceil(data.length / vm.jumlah);
      return data.slice(
        this.jumlah * this.page - this.jumlah,
        this.jumlah * this.page
      );
    },
  },
  methods: {
    alertListener(params) {
      // console.log(params);
      alert.show = true;
      // alert.icon = e.detail.icon;
      alert.message = params.message;
      alert.color = params.color;
    },
    handleSearch() {
      let vm = this;
      console.log(vm.search);
    },
  },
};
</script>
