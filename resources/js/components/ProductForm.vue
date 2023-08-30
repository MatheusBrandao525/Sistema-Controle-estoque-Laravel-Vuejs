<!-- ProductForm.vue -->
<template>
  <div class="w50">
    <form @submit.prevent="submitForm" class="form-cadastro-prod">
      <div class="form-group">
        <label for="nome">Nome:</label>
        <input type="text" class="form-control" id="nome" v-model="nome" required />
      </div>
      <div class="form-group">
        <label for="quantidade">Quantidade:</label>
        <input type="number" class="form-control" id="quantidade" v-model="quantidade" required />
      </div>
      <div class="form-group">
        <label for="valor">Valor:</label>
        <input type="number" class="form-control" id="valor" v-model="valor" required />
      </div>
      <div class="form-group">
        <button type="submit" class="btn-submit">Cadastrar Produto</button>
      </div>
    </form>
  </div>
</template>

  <script>
export default {
  data() {
    return {
      nome: "",
      quantidade: "",
      valor: "",
    };
  },
  methods: {
    submitForm() {
      const productData = {
        nome: this.nome,
        quantidade: this.quantidade,
        valor: this.valor,
      };
      this.$store.commit("addProduct", productData);
      this.clearForm();
    },
    clearForm() {
      this.nome = "";
      this.quantidade = "";
      this.valor = "";
    },
  },
};
</script>

<style scoped>
.w50{
    width: 50%;
    background-color: #f3f3f3;
}

.form-cadastro-prod {
  margin-top: 1rem;
  padding: 1rem;
}

.form-group{
    display: flex;
    flex-direction:column;
}

.form-control{
    height: 40px;
    border-radius: 3px;
    margin-bottom: 1rem;
    border: 1px solid #ccc;
}

.btn-submit{
    height:40px;
    background-color:rgb(8, 70, 87);
    color:#fff;
    font-size: 1rem;
    font-weight: bold;
}
</style>
