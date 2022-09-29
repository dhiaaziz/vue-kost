<template>
  {{ props.lastPage }}
  {{ page }}
  <!-- {{ props.total }} -->
  <!-- {{ total }} -->
  <span>
    <pagination-component v-if="isBelowFive">
      <!-- <pagination-item first :disabled="pagination.pageNow <= 1"/> -->
      <pagination-item prev :disabled="props.currentPage <= 1" />
      <pagination-item
        label="1"
        :active="props.currentPage == 1"
        @click="changePage(1)"
      />
      <pagination-item
        v-if="isBelowFive"
        label="2"
        :active="props.currentPage == 2"
      />
      <pagination-item next :disabled="props.currentPage >= pages" />
    </pagination-component>

    <!-- <pagination-component>
      <pagination-item first :disabled="pagination.pageNow <= 1"/>
      <pagination-item prev :disabled="props.currentPage <= 1" />
      <pagination-item label="1" />
      <span class="mx-2">...</span>
      <pagination-item :label="pages" />
      <pagination-item next :disabled="props.currentPage >= pages" />
      <pagination-item last :disabled="pagination.pageNow >= pagination.pageLast" />
    </pagination-component> -->
  </span>
</template>

<script setup>
import PaginationComponent from "@/components/VsudPagination.vue";
import PaginationItem from "@/components/VsudPaginationItem.vue";

import {
  ref,
  computed,
  watch,
  defineProps,
  defineEmits,
  toRef,
  onMounted,
} from "vue";
import { useRoute, useRouter } from "vue-router";

const props = defineProps({
  total: {
    type: Number,
    required: true,
  },
  perPage: {
    type: Number,
    required: true,
  },
  currentPage: {
    type: Number,
    required: true,
  },
  lastPage: {
    type: Number,
    required: true,
  },
});

const emit = defineEmits(["page-change"]);

const route = useRoute();
const router = useRouter();

const page = ref(route.query.page || 1);
const perPage = ref(route.query.perPage || 10);
const total = toRef(props, "total");

// const pages = computed(() => Math.ceil(total.value / perPage.value));
const isBelowFive = computed(() => props.lastPage <= 5);

const changePage = (page) => {
  // router.push({
  //   query: {
  //     ...route.query,
  //     page,
  //   },
  // });
  emit("page-change", page);
};

const changePerPage = (perPage) => {
  router.push({
    query: {
      ...route.query,
      perPage,
    },
  });
};

watch(
  () => route.query,
  (query) => {
    page.value = query.page || 1;
    perPage.value = query.perPage || 10;
  }
);

onMounted(() => {
  console.log(props.total, "ini total");

  // changePage(page.value);
  // changePerPage(perPage.value);
});

// export {
//   PaginationComponent,
//   PaginationItem,
//   page,
//   perPage,
//   total,
//   pages,
//   changePage,
//   changePerPage,
// };
</script>

<style>
</style>