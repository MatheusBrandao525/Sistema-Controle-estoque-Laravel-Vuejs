import './bootstrap';
import { createApp } from 'vue';
import Alpine from 'alpinejs';
import App from './components/App.vue';
import router from './routes';
import store from './store';
import WelcomeView from './components/Welcome.vue';
import ProdutosView from './components/Products.vue';
import MenuLateral from './components/MenuLateral.vue';
import ProdutosList from './components/ProductList.vue';
import Avisos from './components/Avisos.vue';
import { Row, Column, Hidden } from 'vue-grid-responsive';


window.Alpine = Alpine;

Alpine.start();

const app = createApp();
app.use(router);
app.use(store);
app.component('app', App);
app.component('welcome-view', WelcomeView);
app.component('avisos-view', Avisos);
app.component('produtos-view', ProdutosView);
app.component('produtos-list', ProdutosList);
app.component('menulateral', MenuLateral);
app.component('row', Row);
app.component('column', Column);
app.component('hidden', Hidden);

app.mount("#app");



