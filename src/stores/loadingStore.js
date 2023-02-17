import { defineStore } from "pinia";

export default defineStore("loadingStore", {
  state: () => ({
    loadingItem: "",
    isLoading: false,
  }),
});
