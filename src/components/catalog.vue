<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.article"
        v-bind:product_data="product"
        @addToCart="addToCart"
      />
    </div>
  </div>
</template>

<script>
import catalogItem from "./catalog-item";
import { mapActions, mapGetters } from "vuex";

export default {
  name: "catalog",
  components: {
    catalogItem,
  },
  data() {
    return {};
  },
  methods: {
    ...mapActions(["GET_PRODUCTS", "ADD_TO_CART"]),
    addToCart(data) {
      this.ADD_TO_CART(data);
    },
  },
  computed: {
    ...mapGetters(["PRODUCTS"]),
  },
  mounted() {
    this.GET_PRODUCTS();
  },
};
</script>

<style scoped lang="scss">
.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>
