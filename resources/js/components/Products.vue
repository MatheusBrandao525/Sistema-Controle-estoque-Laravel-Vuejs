<template>
  <div style="display: flex">
    <menu-lateral></menu-lateral>
    <div class="produtos-view">
      <h2>Produtos</h2>
      <button @click="showProductForm = true">
        <span class="material-symbols-outlined"> add </span>
      </button>

      <product-form v-if="showProductForm"></product-form>
      <div v-for="(product, index) in $store.state.products" :key="index">
        {{ product.nome }} - {{ product.quantidade }} - {{ product.valor }}
      </div>
    </div>
  </div>
</template>

<script>
import MenuLateral from "../components/MenuLateral.vue";
import ProductForm from "../components/ProductForm.vue";

export default {
  components: {
    "menu-lateral": MenuLateral,
    "product-form": ProductForm,
  },
  data() {
    return {
      showProductForm: false,
    };
  },
};
</script>

<style>
.produtos-view {
  width: 80%;
  padding: 2rem;
}
h2 {
  font-size: 4rem;
  font-weight: bold;
  color: darkgray;
}
</style>
