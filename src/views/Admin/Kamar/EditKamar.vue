<template>
  <kamar-form @handle-submit="handleSubmit">
    <template #input-detail>
      <div class="mb-5 row">
        <div class="mb-2 offset-lg-1 col-lg-5">
          <label>Name</label>
          <vsud-input
            v-model="form.name"
            type="name"
            placeholder="Bang Rijal"
          />
        </div>
        <div class="mb-2 col-lg-5">
          <label>Size</label>
          <vsud-input v-model="form.size" type="size" placeholder="4x4" />
        </div>
        <div class="mb-2 offset-lg-1 col-lg-10">
          <label>Price</label>
          <vsud-input v-model="form.price" type="size" placeholder="700.000" />
        </div>
        <div class="mb-2 offset-lg-1 col-lg-10">
          <label>Bangunan</label>
          <select disabled v-model="form.build_id" class="form-control">
            <option value="" disabled selected>Pilih Bangunan</option>
            <option
              v-for="bangunan in listBangunan"
              :key="bangunan.id"
              :value="bangunan.id"
            >
              {{ bangunan.name }} - {{ bangunan.address }}
            </option>
          </select>
        </div>
      </div>
    </template>
  </kamar-form>
</template>

<script>
import VsudInput from "@/components/VsudInput.vue";
import KamarForm from "@/views/components/shared/FormComponent.vue";

import KamarApi from "@/api/kamar.js";
import BangunanApi from "@/api/bangunan.js";

import { onMounted, reactive, ref } from "vue";
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
      size: "",
      price: "",
      build_id: "",
    });
    const listBangunan = ref([]);
    const fetchBangunan = async () => {
      const response = await BangunanApi.getAll();
      listBangunan.value = response;
      console.log(response);
    };

    const handleSubmit = async () => {
      const submittedData = await submitForm();
      console.log("submittedData: " + submittedData);
      // router.push({ name: "Kamar" });
    };

    const submitForm = async () => {
      const response = await KamarApi.create(form);
      console.log(response);
    };

    onMounted(async () => {
      fetchBangunan();
    });

    return {
      form,
      handleSubmit,
      listBangunan,
    };
  },
};
</script>

<style>
</style>