<template>
  <div>
    <h1>Create a Deck</h1>
    <router-link to="deck-show">Show deck</router-link>
    <form @submit.prevent="createDeck">
      <ul>
        <li v-for="input in inputs" :key="input.title">
          <BaseInput :label="input.title" v-model="input.value" />
        </li>
        <li>
          <BaseButton type="submit" buttonClass="-fill-gradient"
            >Submit</BaseButton
          >
        </li>
      </ul>
    </form>
    {{ data.deck.deck_id }}
  </div>
</template>

<script>
import { mapState } from "vuex";
import NProgress from "nprogress";

export default {
  name: "deck",
  data: function() {
    return {
      inputs: Array.from({ length: 11 }).map((item, index) => ({
        title: index < 10 ? `Card ${index + 1}` : "Rotation Card",
        value: null
      }))
    };
  },
  computed: mapState({ data: state => state }),
  methods: {
    createDeck() {
      NProgress.start(); // <-- Start the progress bar

      // TODO: use asyncFlow to create linear data flow
      let cards = this.inputs.filter(input => input.value);
      let pivot = cards.filter(input => input.title === "Rotation Card");

      // TODO: move out of the component
      // Does not do any safe checking before fetching/routing
      if (pivot.length && cards.length) {
        this.$store
          .dispatch("deck/fetchDeck", cards)
          .then(() => {
            this.$router.push({
              name: "deck-show",
              params: { deck_id: this.data.deck.deck_id }
            });
          })
          .catch(() => {
            NProgress.done(); // <-- if errors out stop the progress bar
          });
      }
    }
  }
};
</script>
<style>
*,
a {
  color: navy;
}
</style>
