<template>
  <b-navbar
    class="px-5"
    toggleable="lg"
    type="light"
    style="background-color: #2962FF !important; color: #FFF"
    variant="light"
  >
    <b-navbar-nav class="ml-auto">
      <language
        v-for="(language, index) in languages"
        :key="index"
        :language="language"
      />
    </b-navbar-nav>
  </b-navbar>
</template>

<script>
import { mapGetters } from "vuex";
import Language from "./language/index";

export default {
  name: "LanguageNavbar",
  components: {
    Language
  },
  computed: {
    ...mapGetters(["languages"])
  }
};
</script>

<style scoped></style>
