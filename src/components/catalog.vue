<template>
  <div class="catalog">
    <h1>Catalog</h1>
    <div class="catalog__list">
      <catalog-item
        v-for="product in products"
        :key="product.id"
        v-bind:product_data="product"
        @sendArticle="showArticle"
      />
    </div>
  </div>
</template>

<script>
import catalogItem from "./catalog-item";

export default {
  name: "catalog",
  components: {
    catalogItem,
  },
  data() {
    return {
      products: [
        {
          name: "Товар1",
          price: "100",
          article: "1",
          available: true,
        },
        {
          name: "Товар2",
          price: "400",
          article: "2",
          available: true,
        },
        {
          name: "Товар3",
          price: "300",
          article: "3",
          available: true,
        },
        {
          name: "Товар4",
          price: "100",
          article: "4",
          available: true,
        },
        {
          name: "Товар5",
          price: "100",
          article: "5",
          available: false,
        },
        {
          name: "Товар6",
          price: "600",
          article: "6",
          available: true,
        },
        {
          name: "Товар7",
          price: "800",
          article: "7",
          available: false,
        },
      ],
    };
  },
  methods: {
    showArticle(data) {
      console.log(data);
    },
  },
};
</script>

<style scoped lang="scss" >
.catalog {
  &__list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
  }
}
</style>