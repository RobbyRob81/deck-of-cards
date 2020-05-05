import axios from "axios";

const apiClient = axios.create({
  baseURL: process.env.VUE_APP_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json"
  }
});

export default {
  getDeck() {
    return apiClient.get("/new/");
  },
  getPile(deck_id) {
    return apiClient.get(`${deck_id}/pile/add/?cards=AS`);
  },
  async getCustomDeck({ commit, dispatch }) {
    let cards = "7D,AS,QH,9S,6D";
    let response = await apiClient.get(`/new/shuffle/?cards=${cards}`);
    return { commit, dispatch, response };
  }
};
