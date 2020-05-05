import Vue from "vue";
import NProgress from "nprogress";
import Router from "vue-router";
// import store from "@/store/store";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "",
      redirect: { name: "deck" }
    },
    {
      component: () => import("@/views/Deck"),
      name: "deck",
      path: "/deck/new",
      props: true
    },
    {
      // Add to fetch card deck and get assets using beforeRouteUpdate(routeTo, routeFrom, next)
      component: () => import("@/views/DeckShow"),
      name: "deck-show",
      path: "/deck/:deck_id",
      props: true
    },
    {
      path: "/404",
      name: "404",
      component: () => import("@/views/NotFound")
    },
    {
      component: () => import("@/views/NotFound"),
      path: "*",
      redirect: { name: "404" }
    }
  ]
});

router.beforeEach((routeTo, routeFrom, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});

export default router;
