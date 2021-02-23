<template>
  <div class="catalog-item">
    <div class="catalog-item__title">{{ product_data.name }}</div>
    <div class="catalog-item__price">{{ product_data.mass }}</div>
    <div class="catalog-item__price">{{ product_data.hair_color }}</div>
    <div class="catalog-item__descr">Описание</div>
    <button class="btn" @click="addToCart">add to cart</button>
  </div>
</template>

<script>
export default {
  name: "catalog-item",
  props: {
    product_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },

  methods: {
    addToCart() {
      this.$emit("addToCart", this.product_data);
    },
  },
};
</script>

<style lang="scss">
.catalog-item {
  flex-basis: 25%;
  box-shadow: 0 0 8px 0 #e0e0e0;
  padding: $radius;
  margin-bottom: 10px;
}
</style>