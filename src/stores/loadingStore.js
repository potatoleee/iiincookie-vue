import { defineStore } from "pinia";

export default defineStore("loadingStore", {
  state: () => {
    return {
      loadingItem: "",
      isLoading: true,
    };
  },
});
