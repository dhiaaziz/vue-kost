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
    </Transition>
    <div class="row">
      <div class="col-12">
        <user-table @alert-event="alertListener" />
      </div>
    </div>
  </div>
</template>

<script>
import { onMounted, reactive } from "vue";
import UserTable from "@/views/components/User/UserTable.vue";
import VsudAlert from "@/components/VsudAlert.vue";

export default {
  name: "UserPage",
  components: {
    UserTable,
    VsudAlert,
  },
  setup() {
    const alert = reactive({
      show: false,
      icon: "",
      message:
        "<strong>Primary!</strong> This is a primary alert—check it out!",
      color: "",
    });

    const alertListener = (params) => {
      alert.show = true;
      alert.message = params.message;
      alert.color = params.color;
    };

    onMounted(() => {
      console.log("mounted");
    });
    return {
      alert,
      alertListener,
      // toggleTest,
    };
  },
};
</script>

<style>
</style>