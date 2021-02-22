<template>
  <div class="main-wrapper">
    <catalog></catalog>
    <cart></cart>
  </div>
</template>

<script>
import catalog from "./catalog";
import cart from "./cart";

export default {
  name: "main-wrapper",
  components: {
    catalog,
    cart,
  },
  props: {},
  data() {
    return {
      title: "main wrapper",
    };
  },
  computed: {},
  methods: {},
  watch: {},
  mounted() {
    console.log("here");
  },
};
</script>

<style scoped>
.main-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  max-width: 900px;
  margin: auto;
}
</style>