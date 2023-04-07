<template>
  <VueLoading v-model:active="isLoading"></VueLoading>

  <div class="mt-4">
    <h2 class="fs-xl">圖片上傳區</h2>
    <label for="file" class="mb-2"
      >圖片檔案僅接受 jpg、png 格式，感謝配合～</label
    >
    <input
      type="file"
      class="form-control mb-2"
      id="file"
      placeholder="請輸入圖片連結"
      @change="upload"
    />

    <a v-if="imageUrl" :href="imageUrl" target="_blank"
      >上傳的圖片連結(右鍵可複製網址)</a
    >
  </div>
</template>

<script>
import { Toast } from "../../utils/toast.js";

const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      imageUrl: "",
      isLoading: false,
    };
  },
  methods: {
    upload(event) {
      // 取得上傳的檔案
      const file = event.target.files[0];

      /* 限制檔案上傳型別 */
      let fileType = file.name.substring(
        file.name.lastIndexOf(".") + 1
      ); /* 得到檔案字尾名 */
      if (fileType !== "jpg" && fileType !== "JPG" && fileType !== "png") {
        alert("上傳檔案只能是 jpg、png 格式!，請注意格式上傳呦");
        return;
      }
      const formData = new FormData();
      formData.append("file-to-upload", file);
      this.isLoading = true;
      this.$http
        .post(`${VITE_APP_URL}/api/${VITE_APP_PATH}/admin/upload`, formData)
        .then((res) => {
          this.imageUrl = res.data.imageUrl;
          Toast.fire({
            icon: "success",
            title: "圖片上傳成功",
          });
        })
        .catch((error) => {
          Toast.fire({
            icon: "error",
            title: `${error.response.data.message}`,
          });
        })
        .finally(() => {
          this.isLoading = false;
        });
    },
  },
};
</script>
