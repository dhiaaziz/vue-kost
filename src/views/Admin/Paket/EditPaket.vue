<template>
  <kamar-form @handle-submit="handleSubmit">
    <template #input-detail>
      <div class="mb-5 row">
        <div class="mb-2 offset-lg-1 col-lg-10">
          <label>Nama</label>
          <vsud-input v-model="form.name" type="text" placeholder="Kos Ijal" />
        </div>
        <div class="mb-2 offset-lg-1 col-lg-10">
          <!-- <vsud-input
            v-model="form.description"
            type="text"
            placeholder="Kos Ijal"
          /> -->
          <div class="form-group">
            <label for="textAreaDescription">Deskripsi</label>
            <textarea
              v-model="form.description"
              id="textAreaDescription"
              class="form-control"
              rows="3"
            ></textarea>
          </div>
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
    let id = router.currentRoute.value.params.id;

    const fetchData = async () => {
      let id = router.currentRoute.value.params.id;
      const response = await PaketApi.getById(id);
      console.log(response);
      Object.assign(form, response.data_package[0]);
    };
    const handleSubmit = async () => {
      const submittedData = await submitForm();
      // console.log("submittedData: " + submittedData);
      if (submittedData.status === 200) {
        router.push({ name: "Paket" });
      }
    };

    const submitForm = async () => {
      const response = await PaketApi.update(id, form);
      // console.log(response);
      return response;
    };

    onMounted(async () => {
      await fetchData();
    });

    return {
      form,
      handleSubmit,
    };
  },
};
</script>

<style>
</style>