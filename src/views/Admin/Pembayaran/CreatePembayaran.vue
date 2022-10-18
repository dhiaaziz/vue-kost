<template>
  <pembayaran-form @handle-submit="handleSubmit">
    <template #input-detail>
      <!-- <div class="mb-5 row">
        <div class="mb-2 offset-lg-1 col-lg-10">
          <label>Tipe Pembayaran</label>
          {{ computedVSelect }}
          <select
            v-model="type_pembayaran"
            name="type_pembayaran"
            class="form-control"
          >
            <option value="dp" selected>DP</option>
            <option value="angsuran">Angsuran</option>
          </select>
        </div>
      </div> -->
      <div v-if="type_pembayaran == 'dp'" class="mb-5 row">
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
        <div class="mb-2 offset-lg-1 col-lg-5">
          <label>Jumlah yang dibayarkan</label>
          <vsud-input
            v-model="form.name"
            :type="'number'"
            placeholder="Kos Ijal"
          />
        </div>
      </div>
      <div v-else class="mb-5 row">
        <div class="mb-2 offset-lg-1 col-lg-10">
          <div class="row align-items-center align-items-lg-end">
            <div class="col-md-9">
              <label
                >Tagihan (Format: id tagihan - email - kekurangan bayar - nama
                kos - kamar )</label
              >
              <v-select
                v-if="includePast"
                v-model="selectedTagihan.v_select"
                :options="activeTagihanWithPast"
                label="username"
              >
                <template v-slot:option="option">
                  <span style="text-sm " class="py-5 text-sm">
                    Id: {{ option.history_id }} <br />
                    {{ option.email }} - {{ option.username }} -
                    {{ option.build_name }} - {{ option.room_name }} <br />
                    <span class="text-danger">{{
                      option.deficiency_reformat
                    }}</span>
                  </span>
                </template>
              </v-select>
              <v-select
                v-else
                v-model="selectedTagihan.v_select"
                :options="activeTagihan"
                label="username"
              >
                <template v-slot:option="option">
                  <span style="text-sm " class="py-5 text-sm">
                    Id: {{ option.history_id }} <br />
                    {{ option.email }} - {{ option.username }} -
                    {{ option.room_name }} <br />
                    <span class="text-danger">{{
                      option.deficiency_reformat
                    }}</span>
                  </span>
                </template>
              </v-select>
              <!-- <select
                v-if="includePast"
                v-model="form.history_id"
                name="type_pembayaran"
                class="form-control"
                @change="onChangeTagihan($event)"
              >
                <option
                  v-for="tagihan in activeTagihanWithPast"
                  :key="tagihan.history_id"
                  :value="tagihan.history_id"
                >
                  {{ tagihan.history_id }} - Email: {{ tagihan.email }} -
                  {{ tagihan.deficiency_reformat }} - {{ tagihan.build_name }} -
                  {{ tagihan.room_name }}
                </option>
              </select>
              <select
                v-else
                v-model="form.id_history"
                name="type_pembayaran"
                class="form-control"
                @change="onChangeTagihan($event)"
              >
                <option v-if="activeTagihan.length <= 0" disabled>
                  Tidak ada tagihan aktif
                </option>
                <option
                  v-for="tagihan in activeTagihan"
                  :key="tagihan.history_id"
                  value=""
                >
                  {{ tagihan.history_id }} - {{ tagihan.email }} -
                  {{ tagihan.name }} - {{ tagihan.deficiency_reformat }} -
                  {{ tagihan.phone }}
                </option>
              </select> -->
            </div>
            <div class="mt-2 col-md-3 mt-md-0">
              <div class="form-check" style="margin-bottom: -8px">
                <input
                  v-model="includePast"
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  @change="checkInputPastHandler"
                />
                <label class="form-check-label" for="flexCheckDefault">
                  Include Tagihan lama yang belum dibayar
                </label>
              </div>
            </div>
          </div>
        </div>
        <div class="mb-2 offset-lg-1 col-lg-10">
          <div class="row align-items-center">
            <div class="col-9">
              <label>Jumlah yang dibayarkan</label>
              <vsud-input
                v-model="form.payment"
                placeholder="120000"
                :type="'number'"
                :max="selectedTagihan.deficiency"
                :disabled="!selectedTagihan.history_id"
              />
            </div>
            <div class="col-3 d-grid">
              <button
                class="btn btn-success btn-block"
                style="margin-bottom: -10px"
                :disabled="!selectedTagihan.history_id"
                @click="handleLunas($event)"
              >
                Lunas
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>
  </pembayaran-form>
</template>

<script>
import VsudInput from "@/components/VsudInput.vue";
import PembayaranForm from "@/views/components/shared/FormComponent.vue";

// import KamarApi from "@/api/bangunan.js";
// import BangunanApi from "@/api/bangunan.js";
import TagihanApi from "@/api/tagihan.js";
import PembayaranApi from "@/api/pembayaran.js";

import dateFormatter from "@/utils/dateFormatter";
import priceFormater from "@/utils/priceFormatter";

import { computed, onMounted, reactive, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    VsudInput,
    PembayaranForm,
  },
  setup() {
    const router = useRouter();
    const type_pembayaran = ref("angsuran");
    const includePast = ref(false);
    const form = reactive({
      name: "",
      address: "",
    });
    const formDp = reactive({
      name: "",
      address: "",
    });
    const maxTagihan = ref(0);
    const options = ref(["a", "b", "c"]);
    const selectedTagihan = reactive({});
    const listData = ref([]);
    const listTagihan = ref([]);

    const handleSubmit = async () => {
      const submittedData = await submitForm();
      // console.log("submittedData: " + submittedData);
      if (submittedData.status === 200) {
        router.push({ name: "Pembayaran" });
      }
    };
    const handleLunas = (e) => {
      e.preventDefault();
      form.payment = selectedTagihan.deficiency;
    };

    const onChangeTagihan = (e) => {
      console.log(e.target.value);
      console.log("tests");
      // const selected = listData.value.find((tagihan) => {
      //   // console.log(tagihan);
      //   return tagihan.history_id == e.target.value;
      // });
    };
    const submitForm = async () => {
      // console.log(form.payment);
      const objSend = {
        history_id: selectedTagihan.history_id,
        payment: form.payment,
        type_pembayaran: type_pembayaran.value,
      };
      const response = await PembayaranApi.create(
        objSend,
        type_pembayaran.value
      );
      console.log(response);
      return response;
    };

    const fetchTagihan = async (search, page, limit) => {
      const response = await TagihanApi.getTagihanByUser(search, page, limit);
      listData.value = reformatList(response.data_payment);
      console.log(listData.value);
    };

    const reformatList = (list) => {
      return list.map((item) => {
        // item.created_at = dateFormatter(item.created_at);
        // item.date = dateFormatter(item.date);
        // item.payment = priceFormater(item.payment);
        item.deficiency_reformat = priceFormater(item.deficiency);
        return item;
      });
    };
    const computedVSelect = computed(() => {
      return selectedTagihan.v_select;
    });
    // const selectedTagihan
    const activeTagihan = computed(() => {
      const dateNow = new Date();
      return listData.value.filter((item) => {
        const dateTagihan = new Date(item.end_kos);
        return item.deficiency > 0 && dateTagihan > dateNow;
      });
    });

    const activeTagihanWithPast = computed(() => {
      return listData.value.filter((item) => {
        return item.deficiency > 0;
        // return ( dateTagihan > dateNow);
      });
    });

    watchEffect(() => {
      if (computedVSelect.value) {
        Object.assign(selectedTagihan, computedVSelect.value);
      }
    });
    onMounted(async () => {
      await fetchTagihan(null, null, null);
      // console.log(activeTagihan.value);
    });

    return {
      type_pembayaran,
      includePast,
      form,
      formDp,

      maxTagihan,
      selectedTagihan,

      //methods
      onChangeTagihan,
      handleSubmit,
      handleLunas,
      listData,
      listTagihan,
      //computed
      activeTagihan,
      activeTagihanWithPast,
      computedVSelect,

      options,
    };
  },
};
</script>

<style>
</style>