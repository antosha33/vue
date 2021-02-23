<template>
  <div class="cart">
    <h1>Корзина</h1>
    <cartItem
      v-for="(item, ind) in cart_data"
      :key="item.mass"
      :cart_item_data="item"
      @deleteFromCart="deleteFromCart(ind)"
    />
  </div>
</template>

<script>
import cartItem from "./cart-item";
import { mapActions } from "vuex";

export default {
  name: "cart",
  props: {
    cart_data: {
      type: Array,
      default() {
        return [];
      },
    },
  },
  components: {
    cartItem,
  },
  methods: {
    ...mapActions(["DELETE_FROM_CART"]),

    deleteFromCart(ind) {
      this.DELETE_FROM_CART(ind);
    },
  },
};
</script>
