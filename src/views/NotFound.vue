<template>
  <div>
    Page Not found
    <router-link :to="{ name: 'deck' }" />
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "not-found-page",
  computed: {
    ...mapState(["error"])
  }
};
</script>
