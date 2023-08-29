<!-- ProductForm.vue -->
<template>
    <form @submit.prevent="submitForm">
      <div>
        <label for="nome">Nome:</label>
        <input type="text" id="nome" v-model="nome" required>
      </div>
      <div>
        <label for="quantidade">Quantidade:</label>
        <input type="number" id="quantidade" v-model="quantidade" required>
      </div>
      <div>
        <label for="valor">Valor:</label>
        <input type="number" id="valor" v-model="valor" required>
      </div>
      <div>
        <button type="submit">Cadastrar Produto</button>
      </div>
    </form>
  </template>

  <script>
  export default {
    data() {
      return {
        nome: '',
        quantidade: '',
        valor: '',
      };
    },
    methods: {
      submitForm() {
        const productData = {
          nome: this.nome,
          quantidade: this.quantidade,
          valor: this.valor,
        };
        this.$store.commit('addProduct', productData);
        this.clearForm();
      },
      clearForm() {
        this.nome = '';
        this.quantidade = '';
        this.valor = '';
      },
    },
  };
  </script>
