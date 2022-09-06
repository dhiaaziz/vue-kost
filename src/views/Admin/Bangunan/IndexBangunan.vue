<template>
  <div class="py-4 container-fluid">
    <Transition>
      <vsud-alert
        :show="alert.show"
        :color="alert.color"
        icon="ni ni-like-2 ni-lg"
        dismissible
        @update:show="alert.show = $event"
      >
        <span v-html="alert.message"></span>
      </vsud-alert>
      <!-- 
      <vsud-alert
        :show="true"
        :color="alert.color"
        icon="ni ni-like-2 ni-lg"
        dismissible
      >
        <span v-html="alert.message"></span>
      </vsud-alert> -->
    </Transition>
    <!-- <Transition>
      <p v-show="alert.show">test</p>
    </Transition> -->
    <div class="row">
      <div class="col-12">
        <bangunan-table @alert-event="alertListener" />
      </div>
    </div>
    <!-- <button @click="toggleTest">Toggle test</button> -->
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
import BangunanTable from "@/views/components/Bangunan/BangunanTable.vue";
import VsudAlert from "@/components/VsudAlert.vue";
import { reactive } from "vue";
export default {
  name: "KamarPage",
  components: {
    // AuthorsTable,
    BangunanTable,
    VsudAlert,
    // ProjectsTable,
  },
  setup() {
    let alert = reactive({
      show: false,
      icon: "",
      message:
        "<strong>Primary!</strong> This is a primary alert—check it out!",
      color: "",
    });

    const alertListener = (params) => {
      // console.log(params);
      alert.show = true;
      // alert.icon = e.detail.icon;
      alert.message = params.message;
      alert.color = params.color;
    };
    // const toggleTest = () => {
    //   alert.show = !alert.show;
    // };
    return {
      alert,
      alertListener,
      // toggleTest,
    };
  },
};
</script>
