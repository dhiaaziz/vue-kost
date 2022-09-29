<template>
  <div class="container-fluid">
    <div
      class="mt-4 page-header min-height-300 border-radius-xl"
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
          <div class="avatar avatar-xl position-relative">
            <img
              :src="user.image_profile"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h4 class="mb-1 text-capitalize">{{ user.username }}</h4>
            <p class="mb-0 text-sm font-weight-bold text-capitalize">
              {{ user.status }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      <div class="mt-4 col-12 col-xl-4 mt-md-0">
        <!-- <profile-card /> -->
        <card-component title="Informasi User">
          <template #body>
            <!-- <p class="text-sm">
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p> -->
            <hr class="my-0 horizontal gray-light" />
            <h6 class="mt-0 text-lg text-dark"><strong>Biodata</strong></h6>

            <ul class="list-group">
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Nama:</strong> &nbsp;
                <span class="text-capitalize">{{ user.username }}</span>
              </li>

              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Tempat/Tanggal Lahir:</strong> &nbsp;
                <span class="text-capitalize">{{ user.birth_place }}</span
                >, {{ user.birth_date }}
              </li>

              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Agama:</strong> &nbsp;
                <span class="text-capitalize">{{ user.religion }}</span>
              </li>

              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Status:</strong> &nbsp;
                <span class="text-capitalize">{{ user.status }}</span>
              </li>

              <h6 class="mt-4 text-lg text-dark"><strong>Kontak</strong></h6>
              <ul class="list-group">
                <li class="text-sm border-0 list-group-item ps-0">
                  <strong class="text-dark">Telepon:</strong> &nbsp;
                  {{ user.contact }}
                </li>
                <li class="text-sm border-0 list-group-item ps-0">
                  <strong class="text-dark">Email:</strong> &nbsp;
                  {{ user.email }}
                </li>
                <li class="text-sm border-0 list-group-item ps-0">
                  <strong class="text-dark">Kontak Darurat:</strong> &nbsp;
                  <span v-if="user.emergency_contact"
                    >{{ user.emergency_contact }} ({{
                      user.emergency_name
                    }})</span
                  >
                  <span v-else> - </span>
                </li>
              </ul>
              <h6 class="mt-4 text-lg text-dark">
                <strong>Informasi Lainnya</strong>
              </h6>
              <ul v-if="user.status === 'mahasiswa'" class="list-group">
                <li class="text-sm border-0 list-group-item ps-0">
                  <strong class="text-dark">Universitas</strong> &nbsp;
                  <span class="text-capitalize">{{
                    user.name_university
                  }}</span>
                </li>
                <li class="text-sm border-0 list-group-item ps-0">
                  <strong class="text-dark">Jenjang</strong> &nbsp;
                  <span class="text-capitalize">{{ user.degree }}</span>
                </li>
                <li class="text-sm border-0 list-group-item ps-0">
                  <strong class="text-dark">Jurusan</strong> &nbsp;
                  <span class="text-capitalize">{{ user.major }}</span>
                </li>
                <li class="text-sm border-0 list-group-item ps-0">
                  <strong class="text-dark">Angkatan</strong> &nbsp;
                  <span class="text-capitalize">{{ user.generation }}</span>
                </li>
              </ul>
              <ul v-if="user.status === 'pekerja'" class="list-group">
                <li class="text-sm border-0 list-group-item ps-0">
                  <strong class="text-dark">Tempat Bekerja</strong> &nbsp;
                  <span class="text-capitalize">{{ user.name_company }}</span>
                </li>
              </ul>
              <!-- <li class="pb-0 border-0 list-group-item ps-0">
                <strong class="text-sm text-dark">Social:</strong> &nbsp;
                <a
                  class="py-0 mb-0 btn btn-facebook btn-simple ps-1 pe-2"
                  href="javascript:;"
                >
                  <i class="fab fa-facebook fa-lg"></i>
                </a>
                <a
                  class="py-0 mb-0 btn btn-twitter btn-simple ps-1 pe-2"
                  href="javascript:;"
                >
                  <i class="fab fa-twitter fa-lg"></i>
                </a>
                <a
                  class="py-0 mb-0 btn btn-instagram btn-simple ps-1 pe-2"
                  href="javascript:;"
                >
                  <i class="fab fa-instagram fa-lg"></i>
                </a>
              </li> -->
            </ul>
          </template>
        </card-component>
      </div>
      <div class="mt-4 col-12 col-xl-8 mt-md-4 mt-lg-0">
        <div class="h-100 card">
          <div class="p-3 pb-0 card-header">
            <h4 class="mb-1">Data KTP</h4>
            <p class="mt-3 mb-0 text-sm ps-0">
              <strong class="text-dark">NIK:</strong> &nbsp;
              {{ user.nik }}
            </p>
            <!-- <p class="text-sm">Architects design houses</p> -->
          </div>
          <div class="p-3 card-body">
            <div class="row">
              <div class="mb-4 col-12">
                <card-photo
                  :img="user.image_ktp"
                  style="width: 100%; max-height: 500px; object-fit: fill"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// import VsudSwitch from "@/components/VsudSwitch.vue";
// import ProfileCard from "@/views/components/ProfileCard.vue";
import CardComponent from "@/views/components/shared/CardComponent.vue";
// import VsudAvatar from "@/components/VsudAvatar.vue";
import sophie from "@/assets/img/kal-visuals-square.jpg";
import marie from "@/assets/img/marie.jpg";
import ivana from "@/assets/img/ivana-square.jpg";
import peterson from "@/assets/img/team-4.jpg";
import nick from "@/assets/img/team-3.jpg";
import img1 from "@/assets/img/home-decor-1.jpg";
import img2 from "@/assets/img/home-decor-2.jpg";
import img3 from "@/assets/img/home-decor-3.jpg";
import team1 from "@/assets/img/team-1.jpg";
import team2 from "@/assets/img/team-2.jpg";
import team3 from "@/assets/img/team-3.jpg";
import team4 from "@/assets/img/team-4.jpg";
import bgImg from "@/assets/img/curved-images/curved14.jpg";
import CardPhoto from "@/views/components/shared/CardPhoto.vue";

import setNavPills from "@/assets/js/nav-pills.js";
import setTooltip from "@/assets/js/tooltip.js";
import { onBeforeMount, onMounted, reactive } from "vue";
import dateFormatter from "@/utils/dateFormatter";

import UserApi from "@/api/user.js";

import store from "@/store";
import { useRoute } from "vue-router";

export default {
  name: "DetailUser",
  components: {
    // VsudSwitch,
    // ProfileCard,
    // VsudAvatar,
    CardPhoto,
    CardComponent,
  },
  setup() {
    const route = useRoute();
    const currentId = route.params.id;

    let user = reactive({});

    const fetchProfile = async () => {
      const data = await UserApi.getById(currentId);
      console.log(data);
      Object.assign(user, data.dataUser);
      // user.image_ktp = "http://localhost:5000/image/ktp/default.jpg";
      user.image_ktp = "http://localhost:5000/image/ktp/" + user.image_ktp;
      // user.image_ktp =
      //   "https://cdn-2.tstatic.net/jabar/foto/bank/images/foto-ktp-redi-alamsyah-merem-ternyata-editan-ini-faktanya.jpg";
      user.image_profile =
        "http://localhost:5000/image/profile/" + user.image_profile;
      user.birth_date = dateFormatter(user.birth_date);
    };
    onBeforeMount(async () => {
      await fetchProfile();
    });

    onMounted(async () => {
      store.state.isAbsolute = true;
      store.state.isNavFixed = false;
      setNavPills();
      setTooltip();
      console.log(user);
    });

    return {
      user,
      showMenu: false,
      sophie,
      marie,
      ivana,
      peterson,
      nick,
      img1,
      team1,
      team2,
      team3,
      team4,
      img2,
      img3,
      bgImg,
    };
  },

  beforeUnmount() {
    this.$store.state.isAbsolute = false;
  },
};
</script>
