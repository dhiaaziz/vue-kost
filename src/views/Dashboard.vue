<template>
  <div class="py-4 container-fluid">
    <div class="row">
      <div class="mb-4 col-xl-3 col-sm-6 mb-xl-0">
        <card
          :title="stats.money.title"
          :value="stats.money.value"
          :percentage="stats.money.percentage"
          :icon-class="stats.money.iconClass"
          :icon-background="stats.iconBackground"
          direction-reverse
        ></card>
      </div>
      <div class="mb-4 col-xl-3 col-sm-6 mb-xl-0">
        <card
          :title="stats.users.title"
          :value="stats.users.value"
          :percentage="stats.users.percentage"
          :icon-class="stats.users.iconClass"
          :icon-background="stats.iconBackground"
          direction-reverse
        ></card>
      </div>
      <div class="mb-4 col-xl-3 col-sm-6 mb-xl-0">
        <card
          :title="stats.clients.title"
          :value="stats.clients.value"
          :percentage="stats.clients.percentage"
          :icon-class="stats.clients.iconClass"
          :icon-background="stats.iconBackground"
          :percentage-color="stats.clients.percentageColor"
          direction-reverse
        ></card>
      </div>
      <div class="col-xl-3 col-sm-6 mb-xl-0">
        <card
          :title="stats.sales.title"
          :value="stats.sales.value"
          :percentage="stats.sales.percentage"
          :icon-class="stats.sales.iconClass"
          :icon-background="stats.iconBackground"
          direction-reverse
        ></card>
      </div>
    </div>
    <div class="row">
      <div class="mb-4 col-lg-7 mb-lg-0">
        <div class="card">
          <div class="p-3 card-body">
            <div class="row">
              <div class="col-lg-6">
                <div class="d-flex flex-column h-100">
                  <p class="pt-2 mb-1 text-bold">Built by developers</p>
                  <h5 class="font-weight-bolder">Vite Soft UI Dashboard</h5>
                  <p class="mb-5">
                    From colors, cards, typography to complex elements, you will
                    find the full documentation.
                  </p>
                  <a
                    class="mt-auto mb-0 text-sm  text-body font-weight-bold icon-move-right"
                    href="javascript:;"
                  >
                    Read More
                    <i
                      class="text-sm fas fa-arrow-right ms-1"
                      aria-hidden="true"
                    ></i>
                  </a>
                </div>
              </div>
              <div class="mt-5 text-center col-lg-5 ms-auto mt-lg-0">
                <div class="bg-gradient-success border-radius-lg h-100">
                  <img
                    src="../assets/img/shapes/waves-white.svg"
                    class="top-0 position-absolute h-100 w-50 d-lg-block d-none"
                    alt="waves"
                  />
                  <div
                    class=" position-relative d-flex align-items-center justify-content-center h-100"
                  >
                    <img
                      class="pt-4 w-100 position-relative z-index-2"
                      src="../assets/img/illustrations/rocket-white.png"
                      alt="rocket"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="col-lg-5">
        <div class="p-3 card h-100">
          <div
            class="overflow-hidden bg-cover  position-relative border-radius-lg h-100"
            style="
              background-image: url('https://demos.creative-tim.com/soft-ui-dashboard/assets/img/ivancik.jpg');
            "
          >
            <span class="mask bg-gradient-dark"></span>
            <div
              class="p-3  card-body position-relative z-index-1 d-flex flex-column h-100"
            >
              <h5 class="pt-2 mb-4 text-white font-weight-bolder">
                Work with the rockets
              </h5>
              <p class="text-white">
                Wealth creation is an evolutionarily recent positive-sum game.
                It is all about who take the opportunity first.
              </p>
              <a
                class="mt-auto mb-0 text-sm text-white  font-weight-bold icon-move-right"
                href="javascript:;"
              >
                Read More
                <i
                  class="text-sm fas fa-arrow-right ms-1"
                  aria-hidden="true"
                ></i>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="mt-4 row">
      <div class="mb-4 col-lg-5 mb-lg-0">
        <div class="card z-index-2">
          <div class="p-3 card-body">
            <!-- chart -->
            <active-users-chart />
          </div>
        </div>
      </div>
      <div class="col-lg-7">
        <!-- line chart -->
        <div class="card z-index-2">
          <gradient-line-chart />
        </div>
      </div>
    </div>
    <div class="my-4 row">
      <div class="mb-4 col-lg-8 col-md-6 mb-md-0">
        <projects-card />
      </div>
      <div class="col-lg-4 col-md-6">
        <Orders-card />
      </div>
    </div>
  </div>
</template>
<script>
import Card from "@/examples/Cards/Card.vue";
import ActiveUsersChart from "@/examples/Charts/ActiveUsersChart.vue";
import GradientLineChart from "@/examples/Charts/GradientLineChart.vue";
import OrdersCard from "./components/OrdersCard.vue";
import ProjectsCard from "./components/ProjectsCard.vue";
import US from "../assets/img/icons/flags/US.png";
import DE from "../assets/img/icons/flags/DE.png";
import GB from "../assets/img/icons/flags/GB.png";
import BR from "../assets/img/icons/flags/BR.png";

export default {
  name: "DashboardDefault",
  components: {
    Card,
    ActiveUsersChart,
    GradientLineChart,
    ProjectsCard,
    OrdersCard,
  },
  data() {
    return {
      stats: {
        iconBackground: "bg-gradient-success",
        money: {
          title: "Today's Money",
          value: "$53,000",
          percentage: "+55%",
          iconClass: "ni ni-money-coins",
        },
        users: {
          title: "Today's Users",
          value: "2,300",
          percentage: "+3%",
          iconClass: "ni ni-world",
        },
        clients: {
          title: "New Clients",
          value: "+3,462",
          percentage: "-2%",
          iconClass: "ni ni-paper-diploma",
          percentageColor: "text-danger",
        },
        sales: {
          title: "Sales",
          value: "$103,430",
          percentage: "+5%",
          iconClass: "ni ni-cart",
        },
      },
      sales: {
        us: {
          country: "United States",
          sales: 2500,
          value: "$230,900",
          bounce: "29.9%",
          flag: US,
        },
        germany: {
          country: "Germany",
          sales: "3.900",
          value: "$440,000",
          bounce: "40.22%",
          flag: DE,
        },
        britain: {
          country: "Great Britain",
          sales: "1.400",
          value: "$190,700",
          bounce: "23.44%",
          flag: GB,
        },
        brasil: {
          country: "Brasil",
          sales: "562",
          value: "$143,960",
          bounce: "32.14%",
          flag: BR,
        },
      },
    };
  },
};
</script>
