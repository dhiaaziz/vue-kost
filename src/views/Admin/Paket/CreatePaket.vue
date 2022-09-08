<template>
  <kamar-form @handle-submit="handleSubmit">
    <template #input-detail>
      <div class="mb-5 row">
        <div class="mb-2 offset-lg-1 col-lg-5">
          <label>Nama</label>
          <vsud-input v-model="form.name" type="text" placeholder="Kos Ijal" />
        </div>
        <div class="mb-2 col-lg-5">
          <label>Deskripsi</label>
          <vsud-input
            v-model="form.description"
            type="text"
            placeholder="Kos Ijal"
          />
        </div>
        <div class="mb-2 offset-lg-1 col-lg-5">
          <label>Durasi (dalam bulan)</label>
          <vsud-input v-model="form.duration" type="number" placeholder="6" />
        </div>
        <div class="mb-2 col-lg-5">
          <label>Discount (dalam bulan)</label>
          <vsud-input v-model="form.discount" type="number" placeholder="6" />
        </div>
      </div>
    </template>
  </kamar-form>
</template>

<script>
import VsudInput from "@/components/VsudInput.vue";
import KamarForm from "@/views/components/shared/FormComponent.vue";

import PaketApi from "@/api/paket.js";

import { onMounted, reactive } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    VsudInput,
    KamarForm,
  },
  setup() {
    const router = useRouter();
    const form = reactive({
      name: "",
      description: "",
      duration: "",
      discount: "",
    });

    const handleSubmit = async () => {
      const submittedData = await submitForm();
      // console.log("submittedData: " + submittedData);
      if (submittedData.status === 200) {
        router.push({ name: "Paket" });
      }
    };

    const submitForm = async () => {
      const response = await PaketApi.create(form);
      // console.log(response);
      return response;
    };

    onMounted(async () => {});

    return {
      form,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>