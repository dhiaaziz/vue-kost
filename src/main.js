/*
=========================================================
* Vite Soft UI Dashboard - v1.0.0
=========================================================
* Product Page: https://creative-tim.com/product/vite-soft-ui-dashboard
* Copyright 2022 Creative Tim (https://www.creative-tim.com)
Coded by www.creative-tim.com
* Licensed under MIT (https://github.com/creativetimofficial/vite-soft-ui-dashboard/blob/556f77210e261adc3ec12197dab1471a1295afd8/LICENSE.md)
=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { createApp } from "vue";
import App from "./App.vue";
import store from "./store";
import router from "./router";
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import SoftUIDashboard from "./soft-ui-dashboard";
import vSelect from "vue-select";
import "vue-select/dist/vue-select.css";
import Vue3EasyDataTable from "vue3-easy-data-table";
import "vue3-easy-data-table/dist/style.css";

import axios from "axios";
import moment from "moment";
import ModalComponent from "./views/components/shared/ModalComponent.vue";
import SearchComponent from "./views/components/shared/SearchComponent.vue";

import {IP_BACKEND} from "./config/ip.js";

axios.interceptors.request.use((config) => {
  // config.baseURL = 'http://13.250.38.197:8800'
  config.baseURL = IP_BACKEND;
  // config.withCredentials = true
  return config;
});

createApp(App)
  .use(store)
  .use(router)
  .use(SoftUIDashboard)
  .provide("$axios", axios)
  .provide("$moment", moment)
  .component("ModalComponent", ModalComponent)
  .component("SearchComponent", SearchComponent)
  .component("v-select", vSelect)
  .component("EasyDataTable", Vue3EasyDataTable)
  .mount("#app");

// app.provide("$axios", axios);
