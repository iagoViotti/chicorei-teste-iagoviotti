<template>
  <div>
    <div>
      <h2>INCOME</h2>
      <h1>R$ 567,00</h1>
    </div>
    <h2>LOGO</h2>
  </div>
  <navbar>
    <nav>
      <ul>
        <li><router-link to="/">SEND</router-link></li>
        <li><router-link to="/bonus">CHANGE</router-link></li>
        <li><router-link to="/about">PAY</router-link></li>
        <li><router-link to="/about">BORROW</router-link></li>
        <li><router-link to="/about">INSURANCE</router-link></li>
      </ul>
    </nav>
  </navbar>
  <div class="income-dashboard">
    <h2>INCOME</h2>
    <h1>R$ 1567,00</h1>
    <div clas="graph-div">
      <!-- svg graphs -->
      <img src="../assets/graph.svg" alt="graph" />
    </div>
  </div>
  <div class="expenses-dashboard">
    <div>
      <h2>EXPENSES</h2>
      <h1>R$ 898,00</h1>
    </div>
    <img src="../assets/arrow-down.svg" alt="graph" />
  </div>
  <div v-for="expense in expenses">
    <div>
      <h3>{{ expense.name }}</h3>
      <p>{{ expense.category }}</p>
    </div>
    <div>
      <h3>R$ {{ expense.value }}</h3>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const expenses = ref([
  {
    name: 'burguer',
    category: 'food',
    value: 20,
  },
  {
    name: 'rent',
    category: 'home',
    value: 500,
  },
  {
    name: 'internet',
    category: 'home',
    value: 100,
  },
  {
    name: 'gas',
    category: 'car',
    value: 50,
  },
  {
    name: 'insurance',
    category: 'car',
    value: 100,
  },
]);

</script>
