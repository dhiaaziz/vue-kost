<template>
  <tagihan-form @handle-submit="handleSubmit">
    <template #input-detail>
      <!-- <div class="mb-5 row">
        <div class="mb-2 offset-lg-1 col-lg-10">
          <label>Tipe Pembayaran</label>
          {{ computedVSelectName }}
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
        <div class="mb-2 offset-lg-1 col-lg-10">
          <label>Tanggal Mulai</label>

          <!-- {{ form.end_kos }} -->
          <vsud-input
            v-model="form.start_kos"
            :type="'date'"
            placeholder="Jl. Karangrejo Raya"
            required
          />
        </div>

        <div class="mb-2 offset-lg-1 col-lg-5">
          <label>Paket</label>
          <!-- <vsud-input v-model="form.name" type="name" placeholder="Kos Ijal" /> -->
          <v-select
            v-model="selectedPaket.v_select"
            :options="listPaket"
            label="name"
          >
            <template #search="{ attributes, events }">
              <input
                class="vs__search"
                :required="!selectedPaket.v_select"
                v-bind="attributes"
                v-on="events"
              />
            </template>
            <template v-slot:option="option">
              <span class="py-5 text-sm">
                {{ option.name }} <br />
                {{ option.description }}
                <hr />
              </span>
            </template>
          </v-select>
        </div>

        <div class="mb-2 col-lg-5">
          <label>Bangunan</label>
          <!-- <vsud-input v-model="form.name" type="name" placeholder="Kos Ijal" /> -->
          <v-select
            v-model="selectedBangunan.v_select"
            :options="listBangunan"
            label="name"
          >
            <template #search="{ attributes, events }">
              <input
                class="vs__search"
                :required="!selectedBangunan.v_select"
                v-bind="attributes"
                v-on="events"
              />
            </template>
            <template v-slot:option="option">
              <span class="py-5 text-sm">
                Nama: {{ option.name }} <br />
                Alamat: {{ option.address }}
                <hr />
              </span>
            </template>
          </v-select>
        </div>

        <div v-if="!canContinue" class="my-4 offset-lg-1 col-lg-10">
          <h2 class="text-center h6">
            Isi Tanggal Mulai, Paket, dan Bangunan sebelum melanjutkan pengisian
            form tagihan.
          </h2>
        </div>

        <div class="mb-2 offset-lg-1 col-lg-5">
          <label>Kamar Tersedia</label>
          <!-- <vsud-input v-model="form.name" type="name" placeholder="Kos Ijal" /> -->
          <v-select
            v-model="selectedKamar.v_select"
            :options="listKamarEmpty"
            label="room_full_info"
            :disabled="!canContinue"
          >
            <template #search="{ attributes, events }">
              <input
                class="vs__search"
                :required="!selectedKamar.v_select"
                v-bind="attributes"
                v-on="events"
              />
            </template>
            <template v-slot:option="option">
              <span class="py-5 text-sm">
                Kamar: {{ option.name }} <br />
                Kamar: {{ option.start_kos }} <br />
                Harga: {{ option.price_reformat }} <br />
                Bangunan: {{ option.build_name }}
                <hr />
              </span>
            </template>
          </v-select>
        </div>
        <div class="mb-2 col-lg-5">
          <label>Nama</label>
          <!-- <vsud-input v-model="form.name" type="name" placeholder="Kos Ijal" /> -->
          <v-select
            v-model="selectedName.v_select"
            :options="listNama"
            label="username"
            :disabled="!canContinue"
          >
            <template #search="{ attributes, events }">
              <input
                class="vs__search"
                :required="!selectedName.v_select"
                v-bind="attributes"
                v-on="events"
              />
            </template>
            <template v-slot:option="option">
              <span class="py-5 text-sm">
                Nama: {{ option.username }} <br />
                Email: {{ option.email }}
                <hr />
              </span>
            </template>
          </v-select>
        </div>

        <!-- <div class="mb-2 col-lg-5">
          <label>Alamat</label>
          <vsud-input
            v-model="form.address"
            type="size"
            placeholder="Jl. Karangrejo Raya"
          />
        </div> -->
        <hr class="my-4" />
        <div class="mb-2 offset-lg-1">
          <div class="form-check" style="margin-bottom: -8px">
            <input
              v-model="checkboxDiscount"
              class="form-check-input"
              type="checkbox"
              value=""
              @change="checkInputPastHandler"
            />
            <label class="form-check-label" for="flexCheckDefault">
              Aktifkan diskon tambahan
            </label>
          </div>
        </div>
        <div class="mb-2 offset-lg-1 col-lg-10">
          <label>Jumlah diskon</label>
          <vsud-input
            v-model="form.discount"
            :type="'number'"
            placeholder="100000"
            :disabled="!checkboxDiscount"
          />
        </div>
        <hr class="my-4" />

        <div class="mb-2 offset-lg-1 col-lg-5">
          <label class="h6">Total Tagihan</label>
          <span
            class="ml-1 mr-2 h4 d-block text-success"
            style="letter-spacing: 0.2rem"
            >{{ totalPrice }}</span
          >
          <!-- <p</p> -->
        </div>

        <div class="mb-2 offset-lg-1 col-lg-10">
          <label>Jumlah DP yang dibayarkan</label>
          <vsud-input
            v-model="form.payment"
            :type="'number'"
            placeholder="Kos Ijal"
            :disabled="!canContinue"
            required
          />
        </div>
      </div>
    </template>
  </tagihan-form>
</template>

<script>
import VsudInput from "@/components/VsudInput.vue";
import TagihanForm from "@/views/components/shared/FormComponent.vue";

// import KamarApi from "@/api/bangunan.js";
import BangunanApi from "@/api/bangunan.js";
import UserApi from "@/api/user.js";
import PembayaranApi from "@/api/pembayaran.js";
import PaketApi from "@/api/paket";
import KamarApi from "@/api/kamar";

import dateFormatter from "@/utils/dateFormatter";
import priceFormater from "@/utils/priceFormatter";

import { computed, inject, onMounted, reactive, ref, watchEffect } from "vue";
import { useRouter } from "vue-router";
export default {
  components: {
    VsudInput,
    TagihanForm,
  },
  setup() {
    const moment = inject("$moment");
    const router = useRouter();
    const type_pembayaran = ref("dp");
    const checkboxDiscount = ref(false);
    const form = reactive({
      name: "",
      address: "",
      discount: 0,
      discount_type: "nominal",
    });
    const formDp = reactive({
      name: "",
      address: "",
    });
    const maxTagihan = ref(0);
    const options = ref(["a", "b", "c"]);
    const selectedName = reactive({});
    const selectedPaket = reactive({});
    let selectedKamar = reactive({});
    const selectedBangunan = reactive({});

    const listData = ref([]);
    const listNama = ref([]);
    const listPaket = ref([]);
    const listKamar = ref([]);
    const listBangunan = ref([]);

    const handleSubmit = async () => {
      const submittedData = await submitForm();
      // console.log("submittedData: " + submittedData);
      if (submittedData.status === 200) {
        router.push({ name: "Pembayaran" });
      }
    };
    const handleLunas = (e) => {
      e.preventDefault();
      form.payment = selectedName.deficiency;
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
        user_id: selectedName.id,
        package_id: selectedPaket.id,
        room_id: selectedKamar.room_id,
        payment: form.payment,
        type_pembayaran: type_pembayaran.value,
        start_kos: form.start_kos,
        discount: form.discount,
        discount_type: form.discount_type,
      };
      console.log(objSend);
      const response = await PembayaranApi.create(
        objSend,
        type_pembayaran.value
      );
      console.log(response);
      return response;
    };

    const fetchNama = async (search, page, limit) => {
      const response = await UserApi.getAll(search, page, limit);
      listNama.value = reformatList(response.data_user);
      // console.log(listNama.value);
    };

    const fetchPaket = async (search, page, limit) => {
      const response = await PaketApi.getAll(search, page, limit);
      // console.lo
      listPaket.value = reformatList(response.data_package);
      // console.log(listPaket.value);
    };

    const fetchKamar = async (search, page, limit) => {
      const response = await KamarApi.getAll(search, page, limit);
      listKamar.value = reformatList(response.data_payment);
      listKamar.value = listKamar.value.map((kamar) => {
        return {
          ...kamar,
          room_full_info: `${kamar.room_name} - ${kamar.room_type}`,
        };
      });
      // console.log(listKamar.value);
    };

    const fetchKamarByBangunan = async (objParams, search, page, limit) => {
      const response = await KamarApi.getByCriteria(
        objParams,
        search,
        page,
        limit
      );
      console.log("ini", response);
      listKamar.value = reformatList(response.data_room);
      listKamar.value = listKamar.value.map((kamar) => {
        return {
          ...kamar,
          room_full_info: `${kamar.build_name} / ${kamar.name} / ${kamar.price_reformat}`,
        };
      });
      // console.log(listKamar.value);
    };

    const fetchBangunan = async (search, page, limit) => {
      const response = await BangunanApi.getAll(search, page, limit);
      // console.log(response);
      listBangunan.value = reformatList(response.data_kamar);
    };

    const reformatList = (list) => {
      return list.map((item) => {
        // item.created_at = dateFormatter(item.created_at);
        // item.date = dateFormatter(item.date);
        // item.payment = priceFormater(item.payment);
        // item.deficiency_reformat = priceFormater(item.deficiency);
        if (item.price) {
          item.price_reformat = priceFormater(item.price);
        }
        return item;
      });
    };
    const resetKamar = () => {
      selectedKamar.v_select = "";
      listKamar.value = [];
    };

    //computed
    const computedVSelectName = computed(() => {
      return selectedName.v_select;
    });
    const computedVSelectPaket = computed(() => {
      return selectedPaket.v_select;
    });
    const computedVSelectKamar = computed(() => {
      return selectedKamar.v_select;
    });
    const computedVSelectBangunan = computed(() => {
      return selectedBangunan.v_select;
    });

    const canContinue = computed(() => {
      return (
        form.start_kos && selectedPaket.v_select && selectedBangunan.v_select
      );
    });
    const totalPrice = computed(() => {
      console.log(selectedPaket.duration);
      console.log("price:", selectedKamar.price);

      return priceFormater(
        selectedPaket.duration * selectedKamar.price - form.discount
      );
    });

    const listKamarEmpty = computed(() => {
      return listKamar.value.filter((kamar) => {
        return !kamar.start_kos;
      });
    });
    // const selectedName

    watchEffect(async () => {
      if (computedVSelectName.value) {
        Object.assign(selectedName, computedVSelectName.value);
      }
      if (computedVSelectPaket.value) {
        Object.assign(selectedPaket, computedVSelectPaket.value);
      }
      if (computedVSelectKamar.value) {
        Object.assign(selectedKamar, computedVSelectKamar.value);
      }
    });
    watchEffect(async () => {
      if (computedVSelectBangunan.value) {
        Object.assign(selectedBangunan, computedVSelectBangunan.value);
        resetKamar();
        await fetchKamarByBangunan(
          {
            build_id: selectedBangunan.id,
            start_date: form.start_kos,
            end_date: form.end_kos,
          },
          "",
          "",
          ""
        );
      }
    });
    watchEffect(() => {
      if (form.start_kos && computedVSelectPaket.value) {
        form.end_kos = moment(form.start_kos)
          .add(computedVSelectPaket.value.duration, "month")
          .subtract(1, "days")
          .format("YYYY-MM-DD");
        console.log("end", form.end_kos);
      }
    });

    onMounted(async () => {
      await fetchNama("", "", "");
      await fetchPaket("", "", "");
      // await fetchKamar("", "", "");
      await fetchBangunan("", "", "");
      // console.log(activeTagihan.value);
      // console.log(moment);
    });

    return {
      type_pembayaran,
      checkboxDiscount,
      form,
      formDp,

      maxTagihan,
      selectedName,
      selectedPaket,
      selectedKamar,
      selectedBangunan,

      //methods
      onChangeTagihan,
      handleSubmit,
      handleLunas,
      listData,
      listNama,
      listPaket,
      listKamar,
      listBangunan,

      //computed

      computedVSelectName,
      computedVSelectPaket,
      computedVSelectKamar,
      computedVSelectBangunan,
      canContinue,
      totalPrice,
      listKamarEmpty,

      options,
    };
  },
};
</script>

<style>
</style>