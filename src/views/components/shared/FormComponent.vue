<template>
  <div class="container">
    <div class="mb-4 card">
      <div class="pb-0 card-header d-flex justify-content-between">
        <!-- <h6>Kamar table</h6> -->
      </div>
      <div class="card-body">
        <form v-bind="$attrs" @submit.prevent="handleSubmit">
          <slot name="input-detail"></slot>
          <div class="row">
            <div class="col-3 offset-lg-1">
              <div class="d-flex justify-content-start">
                <a
                  href="javascript:;"
                  class="link-secondary"
                  @click="$router.go(-1)"
                >
                  Kembali</a
                >
              </div>
            </div>
            <div class="offset-lg-4 offset-6 col-3">
              <div class="d-flex justify-content-end">
                <button type="submit" class="btn btn-primary">Simpan</button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "KamarForm",
  emits: ["handleSubmit"],
  setup(props, { emit }) {
    const handleSubmit = (e) => {
      e.preventDefault();
      // console.log("submit dalam component");
      emit("handleSubmit");
    };

    return {
      handleSubmit,
    };
  },
};
</script>

<style>
</style>