<template>
  <b-row>
    <b-col cols="8">
      <div id="listgroup" class="text-left position-relative">
        <b-card
          title="Personal information"
          id="personal-information"
          class="my-4"
          style="box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
        >
          <b-card-body>
            <b-row class="px-3 py-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0711 12.9289C15.9819 11.8398 14.6855 11.0335 13.2711 10.5454C14.786 9.50199 15.7812 7.75578 15.7812 5.78125C15.7812 2.59348 13.1878 0 10 0C6.81223 0 4.21875 2.59348 4.21875 5.78125C4.21875 7.75578 5.21402 9.50199 6.72898 10.5454C5.31453 11.0335 4.01813 11.8398 2.92895 12.9289C1.0402 14.8177 0 17.3289 0 20H1.5625C1.5625 15.3475 5.34754 11.5625 10 11.5625C14.6525 11.5625 18.4375 15.3475 18.4375 20H20C20 17.3289 18.9598 14.8177 17.0711 12.9289ZM10 10C7.67379 10 5.78125 8.1075 5.78125 5.78125C5.78125 3.455 7.67379 1.5625 10 1.5625C12.3262 1.5625 14.2188 3.455 14.2188 5.78125C14.2188 8.1075 12.3262 10 10 10Z"
                  fill="black"
                />
              </svg>
              <span class="px-3" style="color: #A6A6A6">Name:</span> {{ name }}
            </b-row>
            <b-row class="px-3 py-1">
              <svg
                width="20"
                height="20"
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M17.0711 12.9289C15.9819 11.8398 14.6855 11.0335 13.2711 10.5454C14.786 9.50199 15.7812 7.75578 15.7812 5.78125C15.7812 2.59348 13.1878 0 10 0C6.81223 0 4.21875 2.59348 4.21875 5.78125C4.21875 7.75578 5.21402 9.50199 6.72898 10.5454C5.31453 11.0335 4.01813 11.8398 2.92895 12.9289C1.0402 14.8177 0 17.3289 0 20H1.5625C1.5625 15.3475 5.34754 11.5625 10 11.5625C14.6525 11.5625 18.4375 15.3475 18.4375 20H20C20 17.3289 18.9598 14.8177 17.0711 12.9289ZM10 10C7.67379 10 5.78125 8.1075 5.78125 5.78125C5.78125 3.455 7.67379 1.5625 10 1.5625C12.3262 1.5625 14.2188 3.455 14.2188 5.78125C14.2188 8.1075 12.3262 10 10 10Z"
                  fill="black"
                ></path>
              </svg>
              <span class="px-3" style="color: #A6A6A6">Age:</span> {{ age }}
            </b-row>
          </b-card-body>
        </b-card>
        <b-card
          title="Biography"
          id="biography"
          class="my-4"
          style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
        >
          <b-card-body>
            {{ biography }}
          </b-card-body>
        </b-card>
        <b-card
          title="Badges"
          id="badges"
          class="my-4"
          style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
        >
          <b-card-body>
            <span style="color: darkgrey">blank</span>
          </b-card-body>
        </b-card>
        <b-card
          title="Pinned works"
          id="pinned-works"
          class="my-4"
          style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
        >
          <b-card-body>
            <span style="color: darkgrey">blank</span>
          </b-card-body>
        </b-card>
        <b-card
          title="Carrier summary"
          id="carrier-summary"
          class="my-4"
          style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
        >
          <b-card-body>
            <span style="color: darkgrey">blank</span>
          </b-card-body>
        </b-card>
        <b-card
          title="Education"
          id="education"
          class="my-4"
          style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
        >
          <b-card-body>
            <span style="color: darkgrey">blank</span>
          </b-card-body>
        </b-card>
        <b-card
          title="Other experience"
          id="other-experience"
          class="my-4"
          style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
        >
          <b-card-body>
            <span style="color: darkgrey">blank</span>
          </b-card-body>
        </b-card>
        <b-card
          title="Certification"
          id="certification"
          class="my-4"
          style="min-height: 170px; box-shadow: 0 0 10px 1px rgba(0,0,0,0.2)"
        >
          <b-card-body>
            <span style="color: darkgrey">blank</span>
          </b-card-body>
        </b-card>
      </div>
    </b-col>
    <b-col
      cols="4"
      class="text-left"
      style="position: sticky;top: 20px;display: block;height: 28em;"
    >
      <b-button size="lg" variant="primary" disabled style="padding: 15px 50px;"
        >Edit profile</b-button
      >
      <br />
      <label>Last updated: 2019/06/30</label>
      <b-navbar v-b-scrollspy vertical class="spyable">
        <b-nav class="flex-column">
          <b-nav-item href="#personal-information"
            >Personal information</b-nav-item
          >
          <b-nav-item href="#biography">Biography</b-nav-item>
          <b-nav-item href="#badges">Badges</b-nav-item>
          <b-nav-item href="#pinned-works">Pinned works</b-nav-item>
          <b-nav-item href="#carrier-summary">Carrier summary</b-nav-item>
          <b-nav-item href="#education">Education</b-nav-item>
          <b-nav-item href="#other-experience">Other Experience</b-nav-item>
          <b-nav-item href="#certification">Certification</b-nav-item>
        </b-nav>
      </b-navbar>
    </b-col>
  </b-row>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  name: "Profile",
  computed: {
    ...mapGetters(["name", "age", "biography"])
  }
};
</script>

<style scoped>
.spyable .nav-item {
  border-left: 3px solid transparent;
}
.spyable .nav-item.active {
  border-left: 3px solid #2962ff;
}
</style>
