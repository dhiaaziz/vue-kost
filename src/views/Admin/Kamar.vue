<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="col-12">
        <kamar-table />
      </div>
    </div>
    <!-- <div class="row">
      <div class="col-12">
        <projects-table />
      </div>
    </div> -->
  </div>
</template>

<script>
// import AuthorsTable from "@/views/components/AuthorsTable.vue";
// import ProjectsTable from "@/views/components/ProjectsTable.vue";
import KamarTable from "@/views/components/Kamar/KamarTable.vue";

export default {
  name: "KamarPage",
  components: {
    // AuthorsTable,
    KamarTable,
    // ProjectsTable,
  },
};
</script>
