<template>
  <div id="app">
    <main-navbar />
    <router-view />
    <footer style="background-color: #E3E3E3; min-height: 350px; z-index: 100" class="d-flex">
      <b-container class="d-flex flex-wrap">
        <b-row class="pt-5 col-12">
          <b-col cols="5">
            <ForkwellJobsSVG/>
            <br />
            Requierment site for IT engeneres
          </b-col>
          <b-col cols="7" class="text-left">
            What is Forkwell Portfolio
            <br />
            Operating company
            <br />
            Terms of service
            <br />
            Privacy Policy
          </b-col>
        </b-row>
        <b-container class="mt-auto mb-5">
          © 2017 Forkwell / Grooves Inc.
        </b-container>
      </b-container>
    </footer>
  </div>
</template>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
<script>
import MainNavbar from "./components/headers/MainNavbar";
import ForkwellJobsSVG from "./components/svgs/ForkwellJobsSVG";
export default {
  components: {ForkwellJobsSVG, MainNavbar }
};
</script>
