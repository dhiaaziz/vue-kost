import { createRouter, createWebHashHistory } from "vue-router";
import Dashboard from "@/views/Dashboard.vue";
import Tables from "@/views/Tables.vue";
import Billing from "@/views/Billing.vue";
import VirtualReality from "@/views/VirtualReality.vue";
import Profile from "@/views/Profile.vue";
import Rtl from "@/views/Rtl.vue";
import SignIn from "@/views/SignIn.vue";
import SignUp from "@/views/SignUp.vue";

import UserPage from "@/views/User/UserExample.vue";
import DashboardKos from "@/views/Admin/Dashboard.vue";

import store from "@/store";

// lazyload
const ContohComponent = () => import("@/views/Admin/ContohComponent.vue");
const IndexKamar = () => import("@/views/Admin/Kamar/IndexKamar.vue");
const CreateKamar = () => import("@/views/Admin/Kamar/CreateKamar.vue");
const EditKamar = () => import("@/views/Admin/Kamar/EditKamar.vue");

const IndexBangunan = () => import("@/views/Admin/Bangunan/IndexBangunan.vue");
const EditBangunan = () => import("@/views/Admin/Bangunan/EditBangunan.vue");
const CreateBangunan = () =>
  import("@/views/Admin/Bangunan/CreateBangunan.vue");

const APP_NAME = "KosBangIjal";

const routes = [
  {
    path: "/",
    name: "/",
    redirect: "/sign-in",
  },
  {
    path: "/dashboard",
    name: "Dashboard",
    component: DashboardKos,
    meta: {
      requiresAuth: true,
      title: "Dashboard",
    },
  },
  {
    path: "/dashboard2",
    name: "Dashboard2",
    component: Dashboard,
  },
  {
    path: "/tables",
    name: "Tables",
    component: Tables,
  },
  {
    path: "/billing",
    name: "Billing",
    component: Billing,
  },
  {
    path: "/virtual-reality",
    name: "Virtual Reality",
    component: VirtualReality,
  },
  {
    path: "/profile",
    name: "Profile",
    component: Profile,
  },
  {
    path: "/rtl-page",
    name: "Rtl",
    component: Rtl,
  },
  {
    path: "/sign-in",
    name: "Sign In",
    component: SignIn,
    meta: {
      requiresGuest: true,
      title: "Sign In @" + APP_NAME,
      metaTags: [
        {
          name: "description",
          content: "The about page of our example app.",
        },
        {
          property: "og:description",
          content: "The about page of our example app.",
        },
      ],
    },
  },
  {
    path: "/sign-up",
    name: "Sign Up",
    component: SignUp,
    meta: {
      requiresGuest: true,
      title: "Sign Up @" + APP_NAME,
    },
  },
  //Route User
  {
    path: "/user-example",
    name: "User Example",
    component: UserPage,
  },
  // Route Kamar
  {
    path: "/kamar",
    name: "Kamar",
    component: IndexKamar,
    meta: {
      requiresAuth: true,
      title: "Kamar @" + APP_NAME,
    },
  },
  {
    path: "/kamar/create",
    name: "Input Kamar",
    component: CreateKamar,
  },
  {
    path: "/kamar/:id/edit",
    name: "Edit Kamar",
    component: EditKamar,
  },
  {
    path: "/tipe-kamar",
    name: "Tipe Kamar",
    component: IndexKamar,
  },
  // Route Bangunan
  {
    path: "/bangunan",
    name: "Bangunan",
    component: IndexBangunan,
  },
  {
    path: "/bangunan/create",
    name: "Input Bangunan",
    component: CreateBangunan,
  },
  {
    path: "/bangunan/:id/edit",
    name: "Edit Bangunan",
    component: EditBangunan,
  },
  // Route Pembayaran
  {
    path: "/pembayaran",
    name: "Pembayaran",
    component: ContohComponent,
  },
];

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: "active",
});

const redirectCheckAuth = (to, from, next) => {
  // console.log(store.getters["auth/isAuthenticated"]);
  if (to.meta.requiresAuth && !store.getters["auth/isAuthenticated"]) {
    next({ name: "Sign In" });
    return;
  } else if (to.meta.requiresGuest && store.getters["auth/isAuthenticated"]) {
    next({ name: "Dashboard" });
    return;
  } else {
    // console.log("sampai else");
    next();
    return;
  }
};
const checkMeta = (to, from, next) => {};

const renderMeta = (to, from, next) => {};
// https://www.digitalocean.com/community/tutorials/vuejs-vue-router-modify-head
// This callback runs before every route change, including on page load.
router.beforeEach((to, from, next) => {
  // This goes through the matched routes from last to first, finding the closest route with a title.
  // e.g., if we have `/some/deep/nested/route` and `/some`, `/deep`, and `/nested` have titles,
  // `/nested`'s will be chosen.
  const nearestWithTitle = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.title);

  // Find the nearest route element with meta tags.
  const nearestWithMeta = to.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  const previousNearestWithMeta = from.matched
    .slice()
    .reverse()
    .find((r) => r.meta && r.meta.metaTags);

  // If a route with a title was found, set the document (page) title to that value.
  if (nearestWithTitle) {
    document.title = nearestWithTitle.meta.title;
  } else if (previousNearestWithMeta) {
    document.title = previousNearestWithMeta.meta.title;
  }

  // Remove any stale meta tags from the document using the key attribute we set below.
  Array.from(document.querySelectorAll("[data-vue-router-controlled]")).map(
    (el) => el.parentNode.removeChild(el)
  );

  // Skip rendering meta tags if there are none.
  if (!nearestWithMeta) {
    redirectCheckAuth(to, from, next);
  }

  // Turn the meta tag definitions into actual elements in the head.
  nearestWithMeta.meta.metaTags
    .map((tagDef) => {
      const tag = document.createElement("meta");

      Object.keys(tagDef).forEach((key) => {
        tag.setAttribute(key, tagDef[key]);
      });

      // We use this to track which meta tags we create so we don't interfere with other ones.
      tag.setAttribute("data-vue-router-controlled", "");

      return tag;
    })
    // Add the meta tags to the document head.
    .forEach((tag) => document.head.appendChild(tag));
  // console.log("sampai sini");
  redirectCheckAuth(to, from, next);
});

export default router;
