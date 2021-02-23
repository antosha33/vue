<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <router-link :to="{ name: 'cart', params: { cart_data: CART } }">
      <button class="to-cart">Cart {{ CART.length }}</button>
    </router-link>

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
    ...mapGetters(["PRODUCTS", "CART"]),
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
  .to-cart {
    position: absolute;
    padding: 10px;
    border: 1px solid lightcoral;
    right: 0;
    top: 0;
  }
}
</style>
