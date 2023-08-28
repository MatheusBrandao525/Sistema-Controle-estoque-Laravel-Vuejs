<!-- Dentro de ProductDetails.vue -->
<template>
    <div>
      <!-- Exibir detalhes do produto -->
      <button @click="showForm">Editar Produto</button>
    </div>
  </template>

  <script>
  export default {
    name: 'ProductDetails',
    methods: {
      showForm() {
        // Navegar para a rota do formulário usando o nome da rota
        this.$router.push({ name: 'product-details', params: { id: this.productId } });
      },
    },
  };
  </script>
