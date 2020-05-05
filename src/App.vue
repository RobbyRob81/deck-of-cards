<template>
  <div id="app">
    <router-view :key="$route.fullPath" />
    <Nprogress></Nprogress>
    <NotificationContainer />
  </div>
</template>

<script>
import NotificationContainer from "@/components/NotificationContainer.vue";
import Nprogress from "nprogress";

export default {
  name: "app",
  components: { NotificationContainer, Nprogress }
};
</script>
<style>
@import "./index.css";
</style>
