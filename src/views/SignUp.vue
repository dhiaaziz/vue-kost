<template>
  <navbar btn-background="bg-gradient-primary" />
  <div
    class="pt-5 m-3 page-header align-items-start min-vh-50 pb-11 border-radius-lg"
    :style="{
      backgroundImage: `url(${bgImg})`,
    }"
  >
    <span class="mask bg-gradient-dark opacity-6"></span>
    <div class="container">
      <div class="row justify-content-center">
        <div class="mx-auto text-center col-lg-5">
          <h1 class="mt-5 mb-2 text-white">Selamat Datang!</h1>
          <p class="text-white text-lead">
            Silahkan lakukan registrasi apabila belum mempunyai akun sebelumnya.
          </p>
        </div>
      </div>
    </div>
  </div>
  <div class="container">
    <div class="row mt-lg-n10 mt-md-n11 mt-n10 justify-content-center">
      <div class="mx-auto col-lg-10 col-12">
        <div class="card z-index-0">
          <div class="pt-4 text-center card-header">
            <h5>Registrasi Penghuni Kos</h5>
          </div>
          <!-- <div class="px-3 row px-xl-5 px-sm-4">
            <div class="px-1 col-3 ms-auto">
              <a class="btn btn-outline-light w-100" href="javascript:;">
                <svg
                  width="24px"
                  height="32px"
                  viewBox="0 0 64 64"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(3.000000, 3.000000)"
                      fill-rule="nonzero"
                    >
                      <circle
                        fill="#3C5A9A"
                        cx="29.5091719"
                        cy="29.4927506"
                        r="29.4882047"
                      />
                      <path
                        d="M39.0974944,9.05587273 L32.5651312,9.05587273 C28.6886088,9.05587273 24.3768224,10.6862851 24.3768224,16.3054653 C24.395747,18.2634019 24.3768224,20.1385313 24.3768224,22.2488655 L19.8922122,22.2488655 L19.8922122,29.3852113 L24.5156022,29.3852113 L24.5156022,49.9295284 L33.0113092,49.9295284 L33.0113092,29.2496356 L38.6187742,29.2496356 L39.1261316,22.2288395 L32.8649196,22.2288395 C32.8649196,22.2288395 32.8789377,19.1056932 32.8649196,18.1987181 C32.8649196,15.9781412 35.1755132,16.1053059 35.3144932,16.1053059 C36.4140178,16.1053059 38.5518876,16.1085101 39.1006986,16.1053059 L39.1006986,9.05587273 L39.0974944,9.05587273 L39.0974944,9.05587273 Z"
                        fill="#FFFFFF"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div class="px-1 col-3">
              <a class="btn btn-outline-light w-100" href="javascript:;">
                <svg
                  width="24px"
                  height="32px"
                  viewBox="0 0 64 64"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(7.000000, 0.564551)"
                      fill="#000000"
                      fill-rule="nonzero"
                    >
                      <path
                        d="M40.9233048,32.8428307 C41.0078713,42.0741676 48.9124247,45.146088 49,45.1851909 C48.9331634,45.4017274 47.7369821,49.5628653 44.835501,53.8610269 C42.3271952,57.5771105 39.7241148,61.2793611 35.6233362,61.356042 C31.5939073,61.431307 30.2982233,58.9340578 25.6914424,58.9340578 C21.0860585,58.9340578 19.6464932,61.27947 15.8321878,61.4314159 C11.8738936,61.5833617 8.85958554,57.4131833 6.33064852,53.7107148 C1.16284874,46.1373849 -2.78641926,32.3103122 2.51645059,22.9768066 C5.15080028,18.3417501 9.85858819,15.4066355 14.9684701,15.3313705 C18.8554146,15.2562145 22.5241194,17.9820905 24.9003639,17.9820905 C27.275104,17.9820905 31.733383,14.7039812 36.4203248,15.1854154 C38.3824403,15.2681959 43.8902255,15.9888223 47.4267616,21.2362369 C47.1417927,21.4153043 40.8549638,25.1251794 40.9233048,32.8428307 M33.3504628,10.1750144 C35.4519466,7.59650964 36.8663676,4.00699306 36.4804992,0.435448578 C33.4513624,0.558856931 29.7884601,2.48154382 27.6157341,5.05863265 C25.6685547,7.34076135 23.9632549,10.9934525 24.4233742,14.4943068 C27.7996959,14.7590956 31.2488715,12.7551531 33.3504628,10.1750144"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div class="px-1 col-3 me-auto">
              <a class="btn btn-outline-light w-100" href="javascript:;">
                <svg
                  width="24px"
                  height="32px"
                  viewBox="0 0 64 64"
                  version="1.1"
                >
                  <g
                    stroke="none"
                    stroke-width="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      transform="translate(3.000000, 2.000000)"
                      fill-rule="nonzero"
                    >
                      <path
                        d="M57.8123233,30.1515267 C57.8123233,27.7263183 57.6155321,25.9565533 57.1896408,24.1212666 L29.4960833,24.1212666 L29.4960833,35.0674653 L45.7515771,35.0674653 C45.4239683,37.7877475 43.6542033,41.8844383 39.7213169,44.6372555 L39.6661883,45.0037254 L48.4223791,51.7870338 L49.0290201,51.8475849 C54.6004021,46.7020943 57.8123233,39.1313952 57.8123233,30.1515267"
                        fill="#4285F4"
                      />
                      <path
                        d="M29.4960833,58.9921667 C37.4599129,58.9921667 44.1456164,56.3701671 49.0290201,51.8475849 L39.7213169,44.6372555 C37.2305867,46.3742596 33.887622,47.5868638 29.4960833,47.5868638 C21.6960582,47.5868638 15.0758763,42.4415991 12.7159637,35.3297782 L12.3700541,35.3591501 L3.26524241,42.4054492 L3.14617358,42.736447 C7.9965904,52.3717589 17.959737,58.9921667 29.4960833,58.9921667"
                        fill="#34A853"
                      />
                      <path
                        d="M12.7159637,35.3297782 C12.0932812,33.4944915 11.7329116,31.5279353 11.7329116,29.4960833 C11.7329116,27.4640054 12.0932812,25.4976752 12.6832029,23.6623884 L12.6667095,23.2715173 L3.44779955,16.1120237 L3.14617358,16.2554937 C1.14708246,20.2539019 0,24.7439491 0,29.4960833 C0,34.2482175 1.14708246,38.7380388 3.14617358,42.736447 L12.7159637,35.3297782"
                        fill="#FBBC05"
                      />
                      <path
                        d="M29.4960833,11.4050769 C35.0347044,11.4050769 38.7707997,13.7975244 40.9011602,15.7968415 L49.2255853,7.66898166 C44.1130815,2.91684746 37.4599129,0 29.4960833,0 C17.959737,0 7.9965904,6.62018183 3.14617358,16.2554937 L12.6832029,23.6623884 C15.0758763,16.5505675 21.6960582,11.4050769 29.4960833,11.4050769"
                        fill="#EB4335"
                      />
                    </g>
                  </g>
                </svg>
              </a>
            </div>
            <div class="mt-2 text-center position-relative">
              <p
                class="px-3 mb-2 text-sm bg-white font-weight-bold text-secondary text-border d-inline z-index-2"
              >
                or
              </p>
            </div>
          </div> -->

          <div class="card-body">
            <!-- register-form -->
            <form role="form" @submit.prevent="handleRegister">
              <div class="row">
                <div class="mb-2 offset-lg-1">
                  <span class="text-lg"><strong>Kredensial</strong></span>
                </div>
                <div class="mb-2 col-lg-10 offset-lg-1">
                  <label>Email (digunakan untuk kredensial login)</label>
                  <vsud-input v-model="form.email" required type="email" />
                </div>
                <div class="mb-2 col-lg-10 offset-lg-1">
                  <label>Password</label>
                  <vsud-input
                    v-model="form.password"
                    required
                    :type="'password'"
                  />
                </div>
                <div class="mb-2 col-lg-10 offset-lg-1">
                  <label>Password Verify</label>
                  <vsud-input
                    v-model="form.repassword"
                    required
                    :type="'password'"
                  />
                </div>
              </div>
              <div class="mb-5 row">
                <div class="mb-2 offset-lg-1">
                  <span class="text-lg"><strong>Biodata</strong></span>
                </div>
                <div class="mb-2 offset-lg-1 col-lg-5">
                  <label>Nama</label>
                  <vsud-input
                    v-model="form.username"
                    required
                    type="text"
                    placeholder="Rijal Fadhila"
                  />
                </div>
                <div class="mb-2 col-lg-5">
                  <label>NIK</label>
                  <vsud-input
                    v-model="form.nik"
                    required
                    type="text"
                    placeholder="12321312121412"
                    minlength="16"
                    maxlength="16"
                  />
                </div>

                <div class="mb-2 offset-lg-1 col-lg-5">
                  <label>Agama</label>
                  <vsud-input
                    v-model="form.religion"
                    required
                    type="text"
                    placeholder="Islam"
                  />
                </div>
                <div class="mb-2 col-lg-5">
                  <label>Jenis Kelamin</label>
                  <select id="" v-model="form.gender" class="form-control">
                    <option value="laki-laki">Laki-laki</option>
                    <option value="perempuan">Perempuan</option>
                  </select>
                </div>
                <div class="mb-2 offset-lg-1 col-lg-5">
                  <label>Tempat Lahir</label>
                  <vsud-input
                    v-model="form.birth_place"
                    required
                    type="text"
                    placeholder="Kos Ijal"
                  />
                </div>
                <div class="mb-2 col-lg-5">
                  <label>Tanggal Lahir</label>
                  <vsud-input v-model="form.birth_date" required type="date" />
                </div>
                <div class="offset-lg-1 col-lg-10">
                  <div class="form-group">
                    <label>Status</label>
                    <select v-model="form.status" class="form-control">
                      <option disabled>Pilih Status</option>
                      <option
                        v-for="option in selectOptions.status"
                        :key="option.value"
                        :value="option.value"
                      >
                        {{ option.text }}
                      </option>
                    </select>
                  </div>
                </div>
                <!-- Kontak-->
                <div class="mt-4 mb-2 offset-lg-1">
                  <span class="text-lg"><strong>Kontak</strong></span>
                </div>
                <div class="mb-2 offset-lg-1 col-lg-5">
                  <label>Telepon</label>
                  <vsud-input v-model="form.contact" required type="text" />
                </div>

                <!-- Kontak Darurat -->
                <div class="mt-4 mb-2 offset-lg-1">
                  <span class="text-lg"><strong>Kontak Darurat</strong></span>
                </div>
                <div class="mb-2 offset-lg-1 col-lg-5">
                  <label>Telepon</label>
                  <vsud-input
                    v-model="form.emergency_contact"
                    required
                    type="text"
                  />
                </div>
                <div class="mb-2 col-lg-5">
                  <label
                    >Hubungan (orangtua / saudara / teman / atau yang
                    lainnya)</label
                  >
                  <vsud-input
                    v-model="form.emergency_name"
                    required
                    type="text"
                  />
                </div>
                <!-- Informasi lainnya mahasiswa -->
                <div v-if="form.status === 'mahasiswa'" class="offset-lg-1">
                  <div class="row">
                    <div class="mt-4 mb-2">
                      <span class="text-lg"
                        ><strong>Informasi Lainnya</strong></span
                      >
                    </div>
                    <div class="mb-2 col-lg-5">
                      <label>Universitas</label>
                      <vsud-input
                        v-model="form.name_university"
                        required
                        type="text"
                      />
                    </div>
                    <div class="mb-2 col-lg-5">
                      <label>Jenjang</label>
                      <vsud-input v-model="form.degree" required type="text" />
                    </div>
                    <div class="mb-2 col-lg-5">
                      <label>Jurusan</label>
                      <vsud-input v-model="form.major" required type="text" />
                    </div>
                    <div class="mb-2 col-lg-5">
                      <label>Angkatan</label>
                      <vsud-input
                        v-model="form.generation"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                </div>
                <!-- Informasi lainnya pekerja -->
                <div v-if="form.status === 'pekerja'" class="offset-lg-1">
                  <div class="row">
                    <div class="mt-4 mb-2">
                      <span class="text-lg"
                        ><strong>Informasi Lainnya</strong></span
                      >
                    </div>
                    <div class="mb-2 col-lg-5">
                      <label>Tempat Bekerja</label>
                      <vsud-input
                        v-model="form.name_company"
                        required
                        type="text"
                      />
                    </div>
                  </div>
                </div>

                <div class="offset-lg-1">
                  <div class="row">
                    <div class="mt-4 mb-2">
                      <span class="text-lg"><strong>Foto</strong></span>
                    </div>
                    <div class="mb-2 col-lg-5">
                      <label>Foto KTP</label>
                      <input
                        ref="file_ktp"
                        class="form-control"
                        type="file"
                        accept="image/*"
                        @change="changeFileKtp"
                      />
                      <!-- 
                      <vsud-input
                        ref="file_ktp"
                        v-model="form.image_ktp"
                        required
                        :type="'file'"
                        @change="changeFileKtp"
                      /> -->
                      <div>
                        <img
                          v-if="image_ktp"
                          :src="image_ktp"
                          alt="ktp"
                          class="mt-4 img-fluid"
                        />
                      </div>
                    </div>
                    <div class="mb-2 col-lg-5">
                      <label>Foto Profil</label>
                      <input
                        ref="file_profile"
                        class="form-control"
                        type="file"
                        accept="image/*"
                        @change="changeFileProfile"
                      />

                      <!-- <vsud-input
                        ref="file_profile"
                        v-model="form.image_profile"
                        required
                        :type="'file'"
                      /> -->
                      <div>
                        <img
                          v-if="image_profile"
                          :src="image_profile"
                          alt="profile"
                          class="mt-4 img-fluid"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <!-- {{ typeof form.birth_date }}
        {{ form.birth_date }} -->
                <!-- {{ form.status }} -->
              </div>
              <div class="text-center offset-lg-1 col-lg-10">
                <vsud-button
                  color="dark"
                  full-width
                  variant="gradient"
                  class="my-4 mb-2"
                  >Sign up</vsud-button
                >
              </div>
              <p class="mt-3 mb-0 text-sm text-center">
                Sudah punya akun?
                <router-link
                  :to="{ name: 'Sign In' }"
                  class="text-dark font-weight-bolder"
                  >Sign in</router-link
                >
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
  <app-footer />
</template>

<script>
import Navbar from "@/examples/PageLayout/Navbar.vue";
import AppFooter from "@/examples/PageLayout/Footer.vue";
import VsudInput from "@/components/VsudInput.vue";
// import VsudCheckbox from "@/components/VsudCheckbox.vue";
import VsudButton from "@/components/VsudButton.vue";
import bgImg from "@/assets/img/curved-images/curved6.jpg";
import { reactive, ref } from "@vue/reactivity";

import { IP_BACKEND } from "@/config/ip.js";

import axios from "axios";
axios.defaults.headers.common["token"] = store.getters["auth/token"];
import moment from "moment";
import store from "@/store";
import { useStore } from "vuex";
import { useRouter, useRoute } from "vue-router";

export default {
  name: "SignUp",
  components: {
    Navbar,
    AppFooter,
    VsudInput,
    // VsudCheckbox,
    VsudButton,
  },
  // data() {
  //   return {
  //     bgImg,
  //   };
  // },
  setup() {
    // const bgImg = bgImg;
    const store1 = useStore();
    const router1 = useRouter();
    const form = reactive({
      name: "",
      birth_place: "",
      birth_date: "",
      status: "",
      contact: "",
      email: "",
      password: "",
      nik: "",
      emergency_contact: "",
      emergency_name: "",
      name_university: "",
      degree: "",
      major: "",
      generation: "",
      name_company: "",
      image_ktp: "",
      image_profile: "",
    });

    // const api_endpoint = IP_BACKEND;
    const image_profile = ref(null);
    const image_ktp = ref(null);

    const file_profile = ref(null);
    const file_ktp = ref(null);

    const changeFileKtp = () => {
      form.image_ktp = true;
      const file = file_ktp.value.files[0];
      form.image_ktp1 = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => {
        image_ktp.value = reader.result;
      };
    };

    const changeFileProfile = () => {
      form.image_profile = true;

      const file = file_profile.value.files[0];
      form.image_profile1 = file;
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => {
        image_profile.value = reader.result;
      };
    };

    const selectOptions = reactive({
      religion: [
        { value: "Islam", text: "Islam" },
        { value: "Kristen", text: "Kristen" },
        { value: "Katolik", text: "Katolik" },
        { value: "Hindu", text: "Hindu" },
        { value: "Budha", text: "Budha" },
        { value: "Konghucu", text: "Konghucu" },
      ],
      status: [
        { value: "mahasiswa", text: "Mahasiswa" },
        { value: "pekerja", text: "Pekerja" },
      ],
    });

    const handleRegister = async (e) => {
      e.preventDefault();
      console.log(form);
      let formData = new FormData();
      if (form.image_profile === true)
        formData.append("image_profile", form.image_profile1);
      if (form.image_ktp === true)
        formData.append("image_ktp", form.image_ktp1);
      formData.append("username", form.username);
      if (form.email) formData.append("email", form.email);
      if (form.password) formData.append("password", form.password);
      formData.append("contact", form.contact);
      formData.append("gender", form.gender);
      formData.append("nik", form.nik);
      formData.append("religion", form.religion);
      formData.append("birth_place", form.birth_place);
      formData.append("birth_date", form.birth_date);
      formData.append("emergency_contact", form.emergency_contact);
      formData.append("emergency_name", form.emergency_name);
      formData.append("status", form.status);
      formData.append("name_company", form.name_company);
      formData.append("name_university", form.name_university);
      formData.append("degree", form.degree);
      formData.append("major", form.major);
      formData.append("generation", form.generation);
      // formData.append("public1", form.public);
      // Display the key/value pairs
      for (var pair of formData.entries()) {
        console.log(pair[0] + ", " + pair[1]);
      }
      let result = await axios.post("user/register", formData);
      console.log("result", result);
      if (result.status == 200) {
        router1.push({ name: "Sign In" });
      }
      console.log("data", result, form);

      console.log(form);
    };

    return {
      bgImg,
      form,
      selectOptions,
      handleRegister,

      image_profile,
      image_ktp,
      file_profile,
      file_ktp,
      changeFileKtp,
      changeFileProfile,
    };
  },

  created() {
    this.$store.state.hideConfigButton = true;
    this.$store.state.showNavbar = false;
    this.$store.state.showSidenav = false;
    this.$store.state.showFooter = false;
  },

  mounted() {
    // console.log(import.meta.env.VITE_API_ENDPOINT);
    // console.log(process.env.BASE_URL);
    console.log(IP_BACKEND);
  },
  beforeUnmount() {
    this.$store.state.hideConfigButton = false;
    this.$store.state.showNavbar = true;
    this.$store.state.showSidenav = true;
    this.$store.state.showFooter = true;
  },
};
</script>
