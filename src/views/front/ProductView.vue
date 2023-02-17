<template>
  <h3>產品細節</h3>
  <h2>{{ product.title }}</h2>
  <img :src="product.imageUrl" class="img-fluid w-50" alt="" />
  <p>NT$ {{ product.price }}</p>
  <p>{{ product.description }}</p>
</template>

<script>
const { VITE_APP_URL, VITE_APP_PATH } = import.meta.env;
export default {
  data() {
    return {
      product: {},
    };
  },
  methods: {
    getProduct() {
      const { id } = this.$route.params;
      this.$http
        .get(`${VITE_APP_URL}/api/${VITE_APP_PATH}/product/${id}`)
        .then((res) => {
          this.product = res.data.product;
        });
    },
  },
  mounted() {
    this.getProduct();
  },
};
</script>
