<template>
  <div>
    <b-tabs class="py-4" align="center">
      <b-tab
        title="Employee search"
        class="d-flex justify-content-center flex-wrap"
      >
        <b-row class="mt-5 px-5 col-8 mb-3">
          <b-input-group class="col-9" size="lg">
            <b-form-input placeholder="php" />
            <b-input-group-append>
              <b-button variant="outline-secondary" v-b-toggle.collapse
                ><svg
                  width="25"
                  height="25"
                  viewBox="0 0 35 35"
                  fill="#AA00FF"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5629 18.1572L1.13156 2.05354L1.13157 2.05353L1.1298 2.05108C0.913427 1.75013 0.88389 1.35358 1.05299 1.02459L1.05302 1.02454C1.2188 0.701893 1.55122 0.499316 1.91415 0.500003H1.9151L33.1185 0.500004L33.1195 0.500002C33.4821 0.499316 33.8147 0.701922 33.9801 1.02451L33.9803 1.02494C34.1494 1.35397 34.1198 1.75009 33.9036 2.05058L33.9017 2.05319L22.4709 18.1561L22.4703 18.1568L22.47 18.1572L22.4698 18.1575L22.4697 18.1575L22.4685 18.1593L22.4644 18.1649C22.4632 18.1665 22.4618 18.1685 22.4602 18.1707C21.984 18.8163 21.726 19.5978 21.7248 20.4005V20.4013V31.0626C21.7248 31.5192 21.4654 31.8519 21.1212 31.9572L21.105 31.9621L21.0893 31.9681L14.6656 34.4172L14.6585 34.4199L14.6515 34.4229C14.5297 34.4735 14.3991 34.4997 14.2673 34.5C14.0126 34.4998 13.7679 34.3979 13.5875 34.2168C13.4073 34.0353 13.3069 33.7895 13.3085 33.5339V33.5308L13.3085 20.4013L13.3085 20.4005C13.3073 19.5978 13.0493 18.8162 12.5726 18.1705C12.5722 18.1698 12.5717 18.1692 12.5712 18.1686C12.5703 18.1672 12.5694 18.166 12.5686 18.1649L12.5636 18.1581L12.5632 18.1575L12.5629 18.1572ZM12.5629 18.1572L12.5626 18.1568C12.562 18.156 12.5617 18.1555 12.5629 18.1572ZM1.9151 2.63534e-06H33.1185C33.6689 -0.00103837 34.1738 0.306405 34.425 0.796372L1.9151 2.63534e-06ZM1.9151 2.63534e-06C1.36441 -0.00103837 0.859865 0.306405 0.608288 0.796025L1.9151 2.63534e-06Z"
                    stroke="#AA00FF"
                  />
                </svg>
              </b-button>
            </b-input-group-append>
          </b-input-group>
          <b-button
            class="ml-auto col-3"
            variant="light"
            style="background-color: #AA00FF; color: #FFF"
            >Search</b-button
          >
        </b-row>
        <b-row class="col-8 px-5 text-left">
          <b-collapse id="collapse" class="px-3 col-12">
            <h3>Tag filtering</h3>
            <hr />
            <b-form-group label="Professional skills" label-for="profi">
              <b-form-input id="profi" class="col-3" placeholder="PHP 7.3" />
            </b-form-group>
            <hr />
            <b-form-group label="Professional skills" label-for="social">
              <b-form-input id="social" class="col-3" placeholder="Sport" />
            </b-form-group>
          </b-collapse>
        </b-row>
      </b-tab>
      <b-tab title="Saved search" disabled> </b-tab>
    </b-tabs>
    <hr />
    <b-container>
      <div>
        <b-breadcrumb :items="query" style="background-color: transparent" />
      </div>
      <div class="mt-4 text-left px-2 ">
        <b-row>
          <b-col>
            <span>
              <span style="color: #AA00FF">{{ employeers }}</span>
              employee
            </span>
          </b-col>
          <b-col cols="4">
            <b-form-select
              :options="[{ value: 0, text: 'Popularity order' }]"
            />
          </b-col>
        </b-row>
      </div>
      <div>
        <user :key="index" v-for="(_, index) in [1, 2, 3]" :user="cUser" />
        <b-pagination v-model="currentPage" :total-rows="100" align="center" />
      </div>
    </b-container>
  </div>
</template>

<script>
import User from "../../components/search/user";
export default {
  name: "Search",
  components: { User },
  computed: {
    query() {
      return [
        {
          text: "People",
          to: "/people"
        },
        {
          text: "php",
          active: true
        }
      ];
    }
  },
  data() {
    return {
      employeers: 193,
      cUser: {
        name: "Ricardo Fink - looking for a job",
        tags: ["php", "python", "golang"],
        contract: "Full time",
        spec: "PHP Senior",
        location: "SPb",
        cast: "750$ per/h",
        other: " - ",
        time: "Once upon a time"
      },
      currentPage: 1
    };
  }
};
</script>

<style scoped>
  .page-link {
    color: #AA00FF;
  }
  .page-item.active .page-link {
    background-color: #AA00FF;
    border-color: #AA00FF;
    color: #fff;
  }

</style>
