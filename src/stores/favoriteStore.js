import { defineStore } from "pinia";
import { Toast } from "../utils/toast.js";
const favoriteStore = defineStore("favoriteStore", {
  state: () => {
    return {
      myFavoriteList: JSON.parse(localStorage.getItem("myFavoriteList")) || [],
    };
  },
  actions: {
    toggleFavorite(product) {
      //
      const favoriteIndex = this.myFavoriteList.findIndex(
        (item) => item.id === product.id
      );
      // 如果找不到相符資料，就將資料新增一筆進去
      if (favoriteIndex === -1) {
        this.myFavoriteList.push(product);
        console.log("加到我得最愛");
        Toast.fire({
          icon: "success",
          title: "加入我的最愛",
        });
      } else {
        // 如果有找到相符資料，就將資料刪除一筆
        this.myFavoriteList.splice(favoriteIndex, 1);
        console.log("重複刪除");
        Toast.fire({
          icon: "success",
          title: "移除我的最愛",
        });
      }
    },
    removeFavorite(index) {
      this.myFavoriteList.splice(index, 1);
      localStorage.setItem(
        "myFavoriteList",
        JSON.stringify(this.myFavoriteList)
      );
      console.log("移除產品");
    },
    isFavorite(item) {
      return this.myFavoriteList.some((element) => element.id === item.id);
    },
  },
  // 定義要做深層監聽的屬性
  deep: ["myFavoriteList"],
});

export default favoriteStore;
