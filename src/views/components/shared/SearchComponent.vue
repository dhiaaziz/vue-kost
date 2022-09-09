<template>
  <div class="input-group">
    <span class="input-group-text text-body">
      <i class="fas fa-search" aria-hidden="true"></i>
    </span>
    <input
      type="text"
      class="form-control"
      :placeholder="$store.state.isRTL ? 'أكتب هنا...' : placeholder"
      @keyup="handleSearch"
    />
  </div>
</template>

<script>
import { delay } from "@/utils/eventDelay";
import { onMounted } from "@vue/runtime-core";

export default {
  name: "SearchComponent",
  props: {
    placeholder: {
      type: String,
      default: "Cari sesuatu...",
    },
  },
  emits: ["search"],
  setup(props, context) {
    const handleSearch = delay((e) => {
      context.emit("search", e.target.value);
    }, 800);
    // const handleSearch = () => {
    //   console.log("tes");
    // };

    onMounted(() => {
      // console.log(eventDelay.delay);
    });
    return {
      handleSearch,
    };
  },
};
</script>

<style>
</style>