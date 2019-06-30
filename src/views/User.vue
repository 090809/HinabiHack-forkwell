<template>
  <div>
    <language-navbar />
    <b-container>
      <user-info />
      <b-nav class="py-5">
        <b-nav-item to="profile">Profile</b-nav-item>
        <b-nav-item to="preferences">Preferences</b-nav-item>
        <b-nav-item to="reports">Reports</b-nav-item>
        <b-nav-item to="daily-reports">Daily reports</b-nav-item>
      </b-nav>
      <router-view />
    </b-container>
  </div>
</template>

<script>
import info from "@/components/user/Info";
import LanguageNavbar from "@/components/headers/LanguageNavbar";

export default {
  name: "Profile",
  components: {
    userInfo: info,
    LanguageNavbar
  }
};
</script>

<style scoped>
.router-link-exact-active {
  border-bottom: 2px solid #2962ff;
}
</style>
