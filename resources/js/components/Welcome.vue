<template>
    <div class="welcome">
        <h2 class="nome-sistema">Sistema de Gerenciamento de Estoque</h2>

        <div style="display: flex; flex-direction:column; justify-content: center !important;">
            <div>
                <div class="mt-4 flex-center">
                    <b-card-group class="card-deck" deck>
                        <b-card bg-variant="primary" text-variant="white" header="Primary"
                            class="card bg-primary text-center">
                            <b-card-header class="card-header"> Vendas </b-card-header>
                            <b-card-text class="card-body"> 23 </b-card-text>
                            <a href="/vendas" class="card-footer"> Acessar </a>
                        </b-card>

                        <b-card bg-variant="secondary" text-variant="white" header="Secondary"
                            class="card bg-secondary text-center">
                            <b-card-header class="card-header"> Clientes </b-card-header>
                            <b-card-text class="card-body"> 236 </b-card-text>
                            <a href="/clientes" class="card-footer"> Acessar </a>
                        </b-card>

                        <b-card bg-variant="success" text-variant="white" header="Success"
                            class="card bg-success text-center">
                            <b-card-header class="card-header"> Produtos </b-card-header>
                            <b-card-text class="card-body"> 53 </b-card-text>
                            a
                            <a href="/produtos" class="card-footer"> Acessar </a>
                        </b-card>

                        <b-card bg-variant="primary" text-variant="white" header="Primary" class="card bg-info text-center">
                            <b-card-header class="card-header"> Financeiro </b-card-header>
                            <b-card-text class="card-body"> Relatorios </b-card-text>
                            <a href="/financeiro" class="card-footer"> Acessar </a>
                        </b-card>
                    </b-card-group>
                </div>
            </div>

            <div class="flex-center">
                <div class="conteudo"></div>
                <avisos-view></avisos-view>
            </div>


        </div>


    </div>
</template>

<script>
import ProductForm from './ProductForm.vue';
export default {
    name: "WelcomeView",
    components: { ProductForm },
};
</script>

<style>


.conteudo{
    background-color: #007bff;
    width: 1058px;
    height: 585px;
    margin-right: 2rem;
}

a {
    text-decoration: none !important;
    color: #000;
}

.flex-center {
    width: 80vw;
    display: flex;
    justify-content: center;
}

column{
    background-color: #007bff;
    margin: 1rem;
}

.text-center {
    text-align: center;
}

.welcome {
    width: 80% !important;
    padding: 2rem;
}

.card-deck {
    display: -ms-flexbox;
    display: flex;
    -ms-flex-flow: row wrap;
    flex-flow: row wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.card-deck .card {
    flex: 1 0 0%;
    margin: 1rem;
}

.bg-warning {
    background-color: #ffc107 !important;
}

.bg-danger {
    background-color: #dc3545 !important;
}

.bg-info {
    background-color: #17a2b8 !important;
}

.bg-primary {
    background-color: #007bff !important;
}

.bg-success {
    background-color: #28a745 !important;
}

.bg-secondary {
    background-color: #6c757d !important;
}

.card {
    position: relative;
    width: 330px;
    display: -ms-flexbox;
    display: flex;
    -ms-flex-direction: column;
    flex-direction: column;
    min-width: 0;
    word-wrap: break-word;
    background-color: #fff;
    background-clip: border-box;
    border: 1px solid rgba(0, 0, 0, 0.125);
    border-radius: 0.25rem;
}

.card-header {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.card-body {
    -ms-flex: 1 1 auto;
    flex: 1 1 auto;
    min-height: 1px;
    padding: 1rem;
    font-size: 2rem;
    color: #0008;
    font-weight: bold;
}

.card-footer {
    padding: 0.75rem 1.25rem;
    margin-bottom: 0;
    background-color: rgba(0, 0, 0, 0.03);
    border-bottom: 1px solid rgba(0, 0, 0, 0.125);
}

.nome-sistema {
    font-size: 4rem;
    font-weight: bold;
    color: darkgray;
}
</style>
