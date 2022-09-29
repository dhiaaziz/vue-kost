<template>
  <!-- Button trigger modal -->
  <!-- <button
    type="button"
    class="btn btn-primary"
    data-bs-toggle="modal"
    :data-bs-target="'#' + modalId"
  >
    Launch demo modal
  </button> -->

  <!-- Modal -->
  <div
    :id="modalId"
    class="modal fade"
    tabindex="-1"
    :aria-labelledby="modalId + 'Label'"
    aria-hidden="true"
    data-bs-backdrop="static"
  >
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 :id="modalId + 'Label'" class="modal-title">{{ modalTitle }}</h5>
          <button
            type="button"
            class="btn-close d-flex justify-content-center align-items-center"
            data-bs-dismiss="modal"
            aria-label="Close"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-x-lg text-dark"
              viewBox="0 0 16 16"
            >
              <path
                d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"
              />
            </svg>
          </button>
        </div>
        <div class="modal-body">
          <slot name="modal-body"></slot>
        </div>
        <div class="modal-footer">
          <!-- <button
            type="button"
            class="btn btn-secondary"
            data-bs-dismiss="modal"
          >
            Close
          </button>
          <button type="button" class="btn btn-primary">Save changes</button> -->
          <slot name="modal-footer"></slot>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import 'bootstrap';

export default {
  name: "ModalComponent",
  props: {
    modalTitle: {
      type: String,
      default: "title",
    },
    modalId: {
      type: String,
      default: "modalId",
    },
    // show: {
    //   type: Boolean,
    //   default: false,
    // },
    // size: {
    //   type: String,
    //   default: "md",
    // },
  },
};
</script>
<style lang="scss">
.modal {
  // &-dialog {
  //   max-width: 800px;
  // }
  z-index: 10001;
}
.modal-backdrop {
  z-index: 10000;
}
</style>