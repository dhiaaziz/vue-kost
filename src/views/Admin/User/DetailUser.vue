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
              src="@/assets/img/bruce-mars.jpg"
              alt="profile_image"
              class="shadow-sm w-100 border-radius-lg"
            />
          </div>
        </div>
        <div class="col-auto my-auto">
          <div class="h-100">
            <h5 class="mb-1">{{ user.username }}</h5>
            <p class="mb-0 text-sm font-weight-bold">{{ user.status }}</p>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div class="py-4 container-fluid">
    <div class="mt-3 row">
      <div class="mt-4 col-12 col-xl-4 mt-md-0">
        <!-- <profile-card /> -->
        <card-component title="Informasi Profil">
          <template #body>
            <!-- <p class="text-sm">
              Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
              is no. If two equally difficult paths, choose the one more painful
              in the short term (pain avoidance is creating an illusion of
              equality).
            </p> -->
            <hr class="my-3 horizontal gray-light" />
            <ul class="list-group">
              <li class="pt-0 text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Full Name:</strong> &nbsp;
                {{ user.username }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Mobile:</strong> &nbsp;
                {{ user.contact }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Email:</strong> &nbsp;
                {{ user.email }}
              </li>
              <li class="text-sm border-0 list-group-item ps-0">
                <strong class="text-dark">Location:</strong> &nbsp; USA
              </li>
              <li class="pb-0 border-0 list-group-item ps-0">
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
              </li>
            </ul>
          </template>
        </card-component>
      </div>
      <div class="mt-4 col-12 col-xl-8 mt-lg-0">
        <div class="h-100 card">
          <div class="p-3 pb-0 card-header">
            <h6 class="mb-1">Foto KTP</h6>
            <!-- <p class="text-sm">Architects design houses</p> -->
          </div>
          <div class="p-3 card-body">
            <div class="row">
              <div class="mb-4 col-12">
                <!-- {{ user.im }} -->
                <card-photo :img="user.image_ktp" />
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
      Object.assign(user, data);
      user.image_ktp = "http://localhost:5000/image/ktp/default.jpg";
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
