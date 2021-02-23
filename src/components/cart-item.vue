<template>
  <div class="cart-item">
    <div class="cart-item__info">
      <p>{{ cart_item_data.name }}</p>
      <p>{{ [x + 1] }}</p>
    </div>
    <button @click="deleteFromCart">delete</button>
  </div>
</template>

<script>
export default {
  name: "cart-item",
  props: {
    cart_item_data: {
      type: Object,
      default() {
        return {};
      },
    },
  },
  data() {
    return {};
  },
  methods: {
    deleteFromCart() {
      this.$emit("deleteFromCart");
    },
  },
  computed: {},
  mounted() {},
};
</script>
