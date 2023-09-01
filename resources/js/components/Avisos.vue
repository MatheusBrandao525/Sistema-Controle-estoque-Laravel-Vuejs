<template>
    <div class="avisos">
        <b-card-group class="card-deck" deck>
            <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="card bg-secondary text-center">
                <b-card-header class="card-header"> Licença </b-card-header>
                <b-card-text class="card-body"> 23 </b-card-text>
                <a href="/vendas" class="card-footer"> Dias </a>
            </b-card>

            <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="card bg-secondary text-center">
                <b-card-header class="card-header"> Licença </b-card-header>
                <b-card-text class="card-body"> 23 </b-card-text>
                <a href="/vendas" class="card-footer"> Dias </a>
            </b-card>

            <b-card bg-variant="secondary" text-variant="white" header="Secondary" class="card bg-secondary text-center">
                <b-card-header class="card-header"> Licença </b-card-header>
                <b-card-text class="card-body"> 23 </b-card-text>
                <a href="/vendas" class="card-footer"> Dias </a>
            </b-card>
        </b-card-group>
    </div>
</template>

<script>

</script>

<style scoped>
.avisos{
    background: #ebeaea;
    width: 330px;
    height: 585px;
}
.card-deck {
    display: -ms-flexbox;
    display: flex;
    flex-flow: column;
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
    background-color: #abb0b4 !important;
}

.card {
    position: relative;
    width: 327px;
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
</style>

