<template>
  <bangunan-form @handle-submit="handleSubmit">
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
  </bangunan-form>
</template>

<script>
import VsudInput from "@/components/VsudInput.vue";
import BangunanForm from "@/views/components/shared/FormComponent.vue";

// import BangunanApi from "@/api/bangunan.js";
import BangunanApi from "@/api/bangunan.js";

import { onMounted, reactive, ref } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    VsudInput,
    BangunanForm,
  },
  setup() {
    const router = useRouter();
    const form = reactive({
      name: "",
      address: "",
    });
    // const listBangunan = ref([]);

    const fetchBangunan = async (id) => {
      try {
        const response = await BangunanApi.getById(id);
        // listBangunan.value = response.data;
        console.log(response);
        Object.assign(form, response.data_kamar[0]);
      } catch (error) {
        console.log(error);
      }
    };

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

    onMounted(async () => {
      const id = router.currentRoute.value.params.id;
      console.log(id);
      await fetchBangunan(id);
      console.log(form);
      // form.name = listBangunan.value.name;
      // form.address = listBangunan.value.address;
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