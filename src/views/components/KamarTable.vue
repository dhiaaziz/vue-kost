<template>
  <div class="mb-4 card">
    <div class="pb-0 card-header">
      <h6>Kamar table</h6>
    </div>
    <div class="px-0 pt-0 pb-2 card-body">
      <div class="p-0 table-responsive">
        <table class="table mb-0 align-items-center">
          <thead>
            <tr>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Kamar
              </th>
              <th
                class=" text-uppercase text-secondary text-xxs font-weight-bolder opacity-7 ps-2"
              >
                Ukuran
              </th>
              <th
                class="text-center  text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Status
              </th>
              <th
                class="text-center  text-uppercase text-secondary text-xxs font-weight-bolder opacity-7"
              >
                Dihuni Hingga
              </th>
              <th class="text-secondary opacity-7"></th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div class="px-3 py-1 d-flex">
                  <p class="mb-0 text-xs font-weight-bold">Kamar 103</p>
                </div>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">4x4</p>
              </td>
              <td class="text-sm text-center align-middle">
                <vsud-badge color="success" variant="gradient" size="sm"
                  >Tersedia</vsud-badge
                >
              </td>
              <td class="text-center align-middle">
                <span class="text-xs text-secondary font-weight-bold">-</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-xs text-secondary font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1 d-flex">
                  <p class="mb-0 text-xs font-weight-bold">Kamar 104</p>
                </div>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">4x4</p>
              </td>
              <td class="text-sm text-center align-middle">
                <vsud-badge color="success" variant="gradient" size="sm"
                  >Tersedia</vsud-badge
                >
              </td>
              <td class="text-center align-middle">
                <span class="text-xs text-secondary font-weight-bold">-</span>
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-xs text-secondary font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1 d-flex">
                  <p class="mb-0 text-xs font-weight-bold">Kamar 101</p>
                </div>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">4x4</p>
                <!-- <p class="mb-0 text-xs text-secondary">Organization</p> -->
              </td>
              <td class="text-sm text-center align-middle">
                <div class="px-2 py-1 align-items-center flex-column d-flex">
                  <div style="min-width: 100px">
                    <vsud-badge color="secondary" variant="gradient" size="sm"
                      >Dihuni</vsud-badge
                    >
                  </div>

                  <div class="px-2 py-1 d-flex justify-content-center">
                    <!-- <div>
                      <vsud-avatar
                        :img="img1"
                        size="sm"
                        border-radius="lg"
                        class="me-3"
                        alt="user1"
                      />
                    </div> -->
                    <div class="d-flex flex-column justify-content-center">
                      <a href="">
                        <h6 class="mb-0 text-sm">John Michael</h6>
                        <p class="mb-0 text-xs text-secondary">
                          john@creative-tim.com
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center align-middle">
                <span class="text-xs text-secondary font-weight-bold"
                  >23/04/18</span
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-xs text-secondary font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
            <tr>
              <td>
                <div class="px-3 py-1 d-flex">
                  <p class="mb-0 text-xs font-weight-bold">Kamar 101</p>
                </div>
              </td>
              <td>
                <p class="mb-0 text-xs font-weight-bold">4x4</p>
                <!-- <p class="mb-0 text-xs text-secondary">Organization</p> -->
              </td>
              <td class="text-sm text-center align-middle">
                <div class="px-2 py-1 align-items-center flex-column d-flex">
                  <div style="min-width: 100px">
                    <vsud-badge color="secondary" variant="gradient" size="sm"
                      >Dihuni</vsud-badge
                    >
                  </div>

                  <div class="px-2 py-1 d-flex justify-content-center">
                    <!-- <div>
                      <vsud-avatar
                        :img="img1"
                        size="sm"
                        border-radius="lg"
                        class="me-3"
                        alt="user1"
                      />
                    </div> -->
                    <div class="d-flex flex-column justify-content-center">
                      <a href="">
                        <h6 class="mb-0 text-sm">John Michael</h6>
                        <p class="mb-0 text-xs text-secondary">
                          john@creative-tim.com
                        </p>
                      </a>
                    </div>
                  </div>
                </div>
              </td>
              <td class="text-center align-middle">
                <span class="text-xs text-secondary font-weight-bold"
                  >23/04/18</span
                >
              </td>
              <td class="align-middle">
                <a
                  href="javascript:;"
                  class="text-xs text-secondary font-weight-bold"
                  data-toggle="tooltip"
                  data-original-title="Edit user"
                  >Edit</a
                >
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  </div>
</template>

<script>
// import VsudAvatar from "@/components/VsudAvatar.vue";
import VsudBadge from "@/components/VsudBadge.vue";
import img1 from "../../assets/img/team-2.jpg";
import img2 from "../../assets/img/team-3.jpg";
import img3 from "../../assets/img/team-4.jpg";
import img4 from "../../assets/img/team-3.jpg";
import img5 from "../../assets/img/team-2.jpg";
import img6 from "../../assets/img/team-4.jpg";

export default {
  name: "AuthorsTable",
  components: {
    // VsudAvatar,
    VsudBadge,
  },
  data() {
    return {
      img1,
      img2,
      img3,
      img4,
      img5,
      img6,
    };
  },
};
</script>