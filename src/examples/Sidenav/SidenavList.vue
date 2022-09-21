<template>
  <div
    id="sidenav-collapse-main"
    class="w-auto h-auto collapse navbar-collapse h-100"
  >
    <!-- {{ currentRoute }} -->
    <!-- {{ currentRouteParent }} -->
    <ul class="navbar-nav">
      <li class="nav-item">
        <sidenav-collapse nav-text="Dashboard" :to="{ name: 'Dashboard' }">
          <template #icon>
            <icon name="dashboard" />
          </template>
        </sidenav-collapse>
      </li>

      <li class="mt-4 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Kelola Kos
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          nav-text="Bangunan"
          :to="{ name: 'Bangunan' }"
          :sub-is-active="subIsActive('/bangunan')"
          :class="{ true: 'active', false: '' }[subIsActive('/bangunan')]"
        >
          <template #icon>
            <icon name="dashboard" />
          </template>
        </sidenav-collapse>
      </li>
      <!-- <li class="nav-item dropdown"> -->
      <li class="nav-item">
        <sidenav-collapse
          nav-text="Kamar"
          :to="{ name: 'Kamar' }"
          :sub-is-active="subIsActive('/kamar')"
          :class="{ true: 'active', false: '' }[subIsActive('/kamar')]"
        >
          <template #icon>
            <icon name="dashboard" />
          </template>
        </sidenav-collapse>
        <!-- <div class="dropdown-menu2">
          <router-link class="dropdown-item" :to="{ name: 'Kamar' }">
            Kelola Kamar
          </router-link>
          <router-link class="dropdown-item" :to="{ name: 'Tipe Kamar' }"
            >Tipe Kamar</router-link
          >
          <router-link class="dropdown-item" :to="{ name: 'Test' }"
            >test</router-link
          >
        </div> -->
      </li>

      <li class="nav-item">
        <sidenav-collapse nav-text="User" :to="{ name: 'User' }">
          <template #icon>
            <icon name="dashboard" />
          </template>
        </sidenav-collapse>
      </li>

      <li class="mt-4 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Kelola Keuangan
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Paket" :to="{ name: 'Paket' }">
          <template #icon>
            <icon name="billing" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Tagihan" :to="{ name: 'Tagihan' }">
          <template #icon>
            <icon name="billing" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Pembayaran" :to="{ name: 'Pembayaran' }">
          <template #icon>
            <icon name="billing" />
          </template>
        </sidenav-collapse>
      </li>
   
      <li class="mt-4 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          Contoh Pages
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse
          nav-text="User Example"
          :to="{ name: 'User Example' }"
        >
          <template #icon>
            <icon name="dashboard" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Tables" :to="{ name: 'Tables' }">
          <template #icon>
            <icon name="tables" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Billing" :to="{ name: 'Billing' }">
          <template #icon>
            <icon name="billing" />
          </template>
        </sidenav-collapse>
      </li>

      <li class="nav-item">
        <sidenav-collapse
          nav-text="Virtual Reality"
          :to="{ name: 'Virtual Reality' }"
        >
          <template #icon>
            <icon name="virtual-reality" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="RTL" :to="{ name: 'Rtl' }">
          <template #icon>
            <icon name="rtl-page" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="mt-3 nav-item">
        <h6
          class="text-xs ps-4 text-uppercase font-weight-bolder opacity-6"
          :class="$store.state.isRTL ? 'me-4' : 'ms-2'"
        >
          PAGES
        </h6>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Profile" :to="{ name: 'Profile' }">
          <template #icon>
            <icon name="customer-support" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Sign In" :to="{ name: 'Sign In' }">
          <template #icon>
            <icon name="sign-in" />
          </template>
        </sidenav-collapse>
      </li>
      <li class="nav-item">
        <sidenav-collapse nav-text="Sign Up" :to="{ name: 'Sign Up' }">
          <template #icon>
            <icon name="sign-up" />
          </template>
        </sidenav-collapse>
      </li>
    </ul>
  </div>
  <div class="pt-3 mx-3 mt-3 sidenav-footer">
    <sidenav-card
      :class="cardBg"
      text-primary="Need Help?"
      text-secondary="Please check our docs"
      href="https://www.creative-tim.com/learning-lab/vue/overview/soft-ui-dashboard/"
      link-text="Documentation"
      icon-class="ni ni-diamond"
    />
    <a
      class="mt-4 btn bg-gradient-success w-100"
      href="https://www.creative-tim.com/product/vue-soft-ui-dashboard-pro?ref=vsud"
      type="button"
      >Upgrade to pro</a
    >
  </div>
</template>
<script>
import Icon from "@/components/Icon.vue";
import SidenavCollapse from "./SidenavCollapse.vue";
import SidenavCard from "./SidenavCard.vue";

export default {
  name: "SidenavList",
  components: {
    Icon,
    SidenavCollapse,
    SidenavCard,
  },
  props: {
    cardBg: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      title: "Vite Soft UI Dashboard",
      controls: "dashboardsExamples",
      isActive: "active",
    };
  },
  computed: {
    currentRoute() {
      return this.$route.path;
    },
    currentRouteParent() {
      return this.$route.path.split("/")[1];
    },
  },
  watch: {
    currentRoute() {
      // console.log(this.currentRouteParent);
      // console.log(this.subIsActive("/kamar"));
    },
  },
  mounted() {
    // console.log(this.currentRoute);
    // console.log(this.subIsActive("/test"));
  },

  methods: {
    // getRoute() {
    //   const routeArr = this.$route.path.split("/");
    //   return routeArr[1];
    // },
    // https://forum.vuejs.org/t/router-active-class-on-submenu-parent/7027
    subIsActive(input) {
      const paths = Array.isArray(input) ? input : [input];
      return paths.some((path) => {
        return this.$route.path.indexOf(path) === 0; // current path starts with this path string
      });
    },
  },
};
</script>
<style lang="scss" scoped>
.dropdown {
  .dropdown-menu2 {
    display: block;
    .dropdown-item {
      border-radius: 8px;
      margin: 10px 0 10px 30px;
      width: 100%;
      &.active {
        background-color: green;
        color: #f5f5f5;
      }
    }
  }
}
</style>

