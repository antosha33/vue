<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <catalog-item
        v-for="product in PRODUCTS"
        :key="product.id"
        v-bind:product_data="product"
        @sendArticle="showArticle"
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
    ...mapActions(["GET_PRODUCTS"]),
    showArticle(data) {
      console.log(data);
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
