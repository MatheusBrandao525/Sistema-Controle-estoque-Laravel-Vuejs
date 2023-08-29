import { createStore } from 'vuex';

const store = createStore({
  state() {
    return {
      products: [],
    };
  },
  mutations: {
    addProduct(state, product) {
      state.products.push(product);
    },
  },
});

export default store;
