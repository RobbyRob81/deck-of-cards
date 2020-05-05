import DeckService from "@/services/DeckService.js";
// import NOTIFICATIONS from "@/constants/notifications";

export const namespaced = true;

export const state = {
  deck_id: null,
  success: false,
  remaining: null,
  shuffled: null,
  isLoading: true,
  error: null
};

export const mutations = {
  ADD_DECK(state, { deck_id, success, remaining, shuffled }) {
    state.deck_id = deck_id;
    state.isLoading = false;
    state.remaining = remaining;
    state.shuffled = shuffled;
    state.success = success;
  }
};

export const NOTIFICATIONS = {
  action: {
    add: "notification/add"
  },
  success: {
    type: "success",
    message: "Success creating your deck"
  },
  error: ({ message }) => ({
    type: "error",
    message: `There was a problem creating your event ${message}`
  })
};

const flow = (f1, f2) => async x => f2(await f1(x));
const flowArgs = (...args) => args.reduce(flow, x => x);

const addDeck = props => {
  props.commit("ADD_DECK", props.response.data);
  return props;
};

const dispatchErrorNotification = (error, dispatch) =>
  dispatch("notification/add", NOTIFICATIONS.error(error), { root: true });

const dispatchSuccessNotification = props =>
  props.dispatch("notification/add", NOTIFICATIONS.success, { root: true });

const getCustomDeck = flowArgs(
  DeckService.getCustomDeck,
  addDeck,
  dispatchSuccessNotification
);

export const actions = {
  fetchDeck({ commit, dispatch, state }, cards) {
    console.log("state: ", state);
    console.log("cards:", cards);

    return getCustomDeck({ commit, dispatch }).catch(error =>
      dispatchErrorNotification(error, dispatch)
    );
  }
};

// dont need these since we're using route handlers
export const getters = {
  getDeckById: state => id => {
    return { state, id };
  },
  isLoading: state => {
    return state.isLoading;
  },
  deckId: state => {
    return state.deck_id;
  }
};
