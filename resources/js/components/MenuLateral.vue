<template>
<nav class="sidebar">
    <ul class="nav flex-column">
      <li class="nav-item">
        <router-link to="/" class="nav-link">Página Inicial</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/dashboard" class="nav-link">Dashboard</router-link>
      </li>
      <li class="nav-item">
        <router-link to="/products" class="nav-link">Dashboard</router-link>
      </li>
      <!-- Mais links do menu -->
    </ul>
  </nav>
  </template>

  <script>
  export default {
    name: 'MenuLateral',
  };
  </script>

  <style scoped>

  </style>
