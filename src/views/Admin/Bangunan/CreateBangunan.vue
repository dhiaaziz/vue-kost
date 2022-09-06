<template>
  <kamar-form @handle-submit="handleSubmit">
    <template #input-detail>
      <div class="mb-5 row">
        <div class="mb-2 offset-lg-1 col-lg-5">
          <label>Nama</label>
          <vsud-input v-model="form.name" type="name" placeholder="Kos Ijal" />
        </div>
        <div class="mb-2 col-lg-5">
          <label>Alamat</label>
          <vsud-input
            v-model="form.address"
            type="size"
            placeholder="Jl. Karangrejo Raya"
          />
        </div>
      </div>
    </template>
  </kamar-form>
</template>

<script>
import VsudInput from "@/components/VsudInput.vue";
import KamarForm from "@/views/components/shared/FormComponent.vue";

// import KamarApi from "@/api/bangunan.js";
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
      address: "",
    });
    const listBangunan = ref([]);

    const handleSubmit = async () => {
      const submittedData = await submitForm();
      // console.log("submittedData: " + submittedData);
      if (submittedData.status === 200) {
        router.push({ name: "Bangunan" });
      }
    };

    const submitForm = async () => {
      const response = await BangunanApi.create(form);
      // console.log(response);
      return response;
    };

    onMounted(async () => {});

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