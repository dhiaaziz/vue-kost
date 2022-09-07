<template>
  <div class="card h-100">
    <div class="p-3 pb-0 card-header">
      <div class="row">
        <div class="col-md-8 d-flex align-items-center">
          <h6 class="mb-0">{{ title }}</h6>
        </div>
        <div v-if="isEditable" class="col-md-4 text-end">
          <a href="javascript:;">
            <i
              class="text-sm fas fa-user-edit text-secondary"
              data-bs-toggle="tooltip"
              data-bs-placement="top"
              title="Edit Profile"
            ></i>
          </a>
        </div>
      </div>
    </div>
    <div class="p-3 card-body">
      <slot name="body"></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    title: {
      type: String,
      default: "Any Information",
    },
    isEditable: {
      type: Boolean,
      default: true,
    },
  },
};
</script>
