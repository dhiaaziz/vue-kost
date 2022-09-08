<template>
  <div class="card card-blog card-plain">
    <div class="position-relative">
      <a class="shadow-xl d-block border-radius-xl">
        <img
          :src="img"
          v-bind="$attrs"
          alt="img-blur-shadow"
          class="shadow img-fluid border-radius-xl"
        />
      </a>
    </div>
  </div>
</template>

<script>
export default {
  name: "ProjectsCard",
  props: {
    img: {
      type: String,
      default: "",
    },
  },
};
</script>
