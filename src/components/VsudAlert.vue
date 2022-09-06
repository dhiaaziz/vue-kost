<template>
  <div
    v-show="showData"
    class="text-white alert font-weight-bold"
    role="alert"
    :class="getClasses(color, dismissible)"
  >
    <span class="alert-icon">
      <i :class="getIcon(icon)" />
    </span>
    <span class="alert-text">
      &nbsp;
      <slot />
    </span>
    <button
      v-if="dismissible"
      type="button"
      class="btn-close d-flex justify-content-center align-items-center"
      aria-label="Close"
      @click="showData = false"
    >
      <span aria-hidden="true" class="text-lg font-weight-bold">&times;</span>
    </button>
    <!-- <button
        v-if="dismissible"
        type="button"
        class="btn-close d-flex justify-content-center align-items-center"
        data-bs-dismiss="alert"
        aria-label="Close"
      >
        <span aria-hidden="true" class="text-lg font-weight-bold">&times;</span>
      </button> -->
  </div>
</template>

<script>
export default {
  name: "VsudAlert",
  props: {
    color: {
      type: String,
      default: "success",
    },
    icon: {
      type: String,
      default: "",
    },
    dismissible: {
      type: Boolean,
      default: false,
    },
    show: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      showData: this.show,
    };
  },
  watch: {
    show: function (val) {
      this.showData = val;
    },
    showData: function (val) {
      this.$emit("update:show", val);
    },
  },
  mounted() {
    // console.log(this.show);
  },
  methods: {
    getClasses: (color, dismissible) => {
      let colorValue, dismissibleValue;

      colorValue = color ? `alert-${color}` : null;

      dismissibleValue = dismissible ? "alert-dismissible fade show" : null;

      return `${colorValue} ${dismissibleValue}`;
    },
    getIcon: (icon) => (icon ? icon : null),
  },
};
</script>
