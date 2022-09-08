<template>
  <bangunan-form enctype="multipart/form-data" @handle-submit="handleSubmit">
    <template #input-detail>
      <div class="mb-5 row">
        <div class="mb-2 offset-lg-1">
          <span class="text-lg"><strong>Biodata</strong></span>
        </div>
        <div class="mb-2 offset-lg-1 col-lg-5">
          <label>Nama</label>
          <vsud-input
            v-model="form.username"
            type="text"
            placeholder="Rijal Fadhila"
          />
        </div>
        <div class="mb-2 col-lg-5">
          <label>Agama</label>
          <vsud-input v-model="form.religion" type="text" placeholder="Islam" />
        </div>
        <div class="mb-2 offset-lg-1 col-lg-5">
          <label>Nama</label>
          <vsud-input
            v-model="form.birth_place"
            type="text"
            placeholder="Kos Ijal"
          />
        </div>
        <div class="mb-2 col-lg-5">
          <label>Tanggal Lahir</label>
          <vsud-input v-model="form.birth_date" type="date" />
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
          <vsud-input v-model="form.contact" type="text" />
        </div>
        <div class="mb-2 col-lg-5">
          <label>Email</label>
          <vsud-input v-model="form.email" type="email" disabled />
        </div>
        <!-- Kontak Darurat -->
        <div class="mt-4 mb-2 offset-lg-1">
          <span class="text-lg"><strong>Kontak Darurat</strong></span>
        </div>
        <div class="mb-2 offset-lg-1 col-lg-5">
          <label>Telepon</label>
          <vsud-input v-model="form.emergency_contact" type="text" />
        </div>
        <div class="mb-2 col-lg-5">
          <label
            >Hubungan (orangtua / saudara / teman / atau yang lainnya)</label
          >
          <vsud-input v-model="form.emergency_name" type="text" />
        </div>
        <!-- Informasi lainnya mahasiswa -->
        <div class="offset-lg-1" v-if="form.status === 'mahasiswa'">
          <div class="row">
            <div class="mt-4 mb-2">
              <span class="text-lg"><strong>Informasi Lainnya</strong></span>
            </div>
            <div class="mb-2 col-lg-5">
              <label>Universitas</label>
              <vsud-input v-model="form.name_university" type="text" />
            </div>
            <div class="mb-2 col-lg-5">
              <label>Jenjang</label>
              <vsud-input v-model="form.degree" type="text" />
            </div>
            <div class="mb-2 col-lg-5">
              <label>Jurusan</label>
              <vsud-input v-model="form.major" type="text" />
            </div>
            <div class="mb-2 col-lg-5">
              <label>Angkatan</label>
              <vsud-input v-model="form.generation" type="text" />
            </div>
          </div>
        </div>
        <!-- Informasi lainnya pekerja -->
        <div class="offset-lg-1" v-if="form.status === 'pekerja'">
          <div class="row">
            <div class="mt-4 mb-2">
              <span class="text-lg"><strong>Informasi Lainnya</strong></span>
            </div>
            <div class="mb-2 col-lg-5">
              <label>Tempat Bekerja</label>
              <vsud-input v-model="form.name_company" type="text" />
            </div>
          </div>
        </div>
        <!-- {{ typeof form.birth_date }}
        {{ form.birth_date }} -->
        <!-- {{ form.status }} -->
      </div>
    </template>
  </bangunan-form>
</template>

<script>
import VsudInput from "@/components/VsudInput.vue";
import BangunanForm from "@/views/components/shared/FormComponent.vue";

// import BangunanApi from "@/api/bangunan.js";
import UserApi from "@/api/user.js";

import dateFormatter from "@/utils/dateFormatter";

import { onMounted, reactive, inject } from "vue";
import { useRouter, useRoute } from "vue-router";
export default {
  components: {
    VsudInput,
    BangunanForm,
  },
  setup() {
    const moment = inject("$moment");
    const router = useRouter();
    const route = useRoute();
    const currentId = route.params.id;

    const form = reactive({});
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

    // const listBangunan = ref([]);

    const handleSubmit = async () => {
      const submittedData = await submitForm();
      // console.log("submittedData: " + submittedData);
      if (submittedData.status === 200) {
        router.push({ name: "Detail User", params: { id: currentId } });
      }
    };

    const fetchProfile = async () => {
      const data = await UserApi.getById(currentId);
      Object.assign(form, data);
      // user.image_ktp = "http://localhost:5000/image/ktp/default.jpg";
      // user.image_ktp = "http://localhost:5000/image/ktp/" + user.image_ktp;
      // form.image_ktp =
      //   "https://cdn-2.tstatic.net/jabar/foto/bank/images/foto-ktp-redi-alamsyah-merem-ternyata-editan-ini-faktanya.jpg";
      // form.image_profile =
      //   "http://localhost:5000/image/profile/" + form.image_profile;
      // form.birth_date = dateFormatter(form.birth_date);
      delete form.image_ktp;
      delete form.image_profile;
      form.birth_date = moment(form.birth_date).format("YYYY-MM-DD");
    };

    const submitForm = async () => {
      const response = await UserApi.update(currentId, form);
      // console.log(response);
      return response;
    };

    onMounted(async () => {
      fetchProfile();
    });

    return {
      form,
      handleSubmit,
      selectOptions,
    };
  },
};
</script>

<style>
</style>