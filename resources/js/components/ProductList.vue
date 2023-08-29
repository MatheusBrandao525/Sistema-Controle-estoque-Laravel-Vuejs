<template>
    <div>
      <div v-for="(product, index) in products" :key="index">
        {{ product.nome }} - {{ product.quantidade }} - {{ product.valor }}
      </div>
    </div>
  </template>

  <script>
  export default {
    name: 'ProdutosList',
    props: ['products'],
  };
  </script>
