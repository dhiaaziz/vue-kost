<template>
  <div class="container">
    <div class="mb-4 card">
      <div class="pb-0 card-header d-flex justify-content-between">
        <!-- <h6>Kamar table</h6> -->
      </div>
      <div class="card-body">
        <form>
          <div class="mb-4 row">
            <div class="mb-2 offset-lg-1 col-lg-5">
              <label>Name</label>
              <vsud-input
                success
                v-model="form.name"
                type="name"
                placeholder="Bang Rijal"
                name="name"
              />
            </div>
            <div class="mb-2 col-lg-5">
              <label>Size</label>
              <vsud-input
                v-model="form.size"
                type="size"
                placeholder="4x4"
                name="size"
              />
            </div>
            <div class="mb-2 offset-lg-1 col-lg-10">
              <label>Size</label>
              <vsud-input
                v-model="form.size"
                type="size"
                placeholder="4x4"
                name="size"
              />
            </div>
            <div class="mb-2 offset-lg-1 col-lg-10">
              <label>Bangunan</label>
              <select name="bangunan" id="" class="form-control">
                <option value="" disabled selected>Pilih Bangunan</option>
                <option value="">Bang Rijal</option>
                <option value="">Bang Rijal</option>
              </select>
            </div>
          </div>
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
export default {};
</script>

<style>
</style>