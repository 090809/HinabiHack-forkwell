import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  base: process.env.BASE_URL,
  routes: [
    {
      path: "/",
      name: "home",
      component: Home
    },
    {
      path: "/user/",
      name: "User Profile",
      component: () => import("./views/User"),
      redirect: "/user/profile",
      children: [
        {
          path: "profile",
          component: () => import("./views/user/Profile")
        },
        {
          path: "preferences",
          component: () => import("./views/user/Preferences")
        },
        {
          path: "reports",
          component: () => import("./views/user/Reports")
        },
        {
          path: "daily-reports",
          component: () => import("./views/user/DailyReports")
        }
      ]
    },
    {
      name: "people",
      path: "/people",
      component: () => import("./views/People.vue")
    },
    {
      name: "search",
      path: "/people/search",
      component: () => import("./views/people/Search.vue")
    }
  ]
});
