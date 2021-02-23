<template>
  <div class="main-wrapper">
    <h1>CATALOG</h1>
    <router-view></router-view>
    <!-- <catalog></catalog>
    <cart v-if="CART.length" :cart_data="CART" /> -->
  </div>
</template>

<script>
// import catalog from "./catalog";
// import cart from "./cart";
import { mapGetters } from "vuex";

export default {
  name: "main-wrapper",
  components: {
    //  catalog,
    //  cart,
  },
  props: {},
  data() {
    return {
      title: "main wrapper",
    };
  },
  computed: {
    ...mapGetters(["CART"]),
  },
  methods: {},
  watch: {},
  mounted() {
    console.log("here");
  },
};
</script>

<style scoped>
.main-wrapper {
  display: block;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: auto;
}
</style>