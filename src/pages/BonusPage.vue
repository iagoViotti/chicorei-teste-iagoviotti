<template>
  <div class="app-finance">
    <div class="header">
      <div>
        <h4>INCOME</h4>
        <h1>$567,00</h1>
      </div>
      <h2>LOGO</h2>
    </div>
    <div class="navbar">
      <ul>
        <label class="nav-label">
          <li>SEND</li>
        </label>
        <label class="nav-label">
          <li>CHANGE</li>
        </label>
        <label class=" nav-label">
          <li>PAY</li>
        </label>
        <label class="nav-label">
          <li>BORROW</li>
        </label class="nav-label">
        <label>
          <li>INSURANCE</li>
        </label>
      </ul>
    </div>
    <div class="income-dashboard">
      <div class="dashboard-header">
        <h2>INCOME</h2>
        <h1>$1567,00</h1>
      </div>
      <div clas="graph-div">
        <lineChart />
      </div>
    </div>
    <div class="expenses-dashboard">
      <div class="expenses-header">
        <h2>EXPENSES</h2>
        <h1>-$898,00</h1>
      </div>
      <circleChart />
      <!-- <div v-for="expense in expenses">
        <div>
          <h3>{{ expense.name }}</h3>
          <p>{{ expense.category }}</p>
        </div>
        <div>
          <h3>${{ expense.value }}</h3>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';
import lineChart from '../components/lineChart.vue';
import circleChart from '../components/circleChart.vue';

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

<style lang="less">
.app-finance {
  background: rgb(56, 56, 56);
  background: linear-gradient(0deg, rgba(255, 255, 255, 0) 56%, rgba(119, 108, 230, 1) 80%);
  display: flex;
  flex-direction: column;
  overflow-x: hidden;
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 2em;
  padding-bottom: 0;
  color: white;
}

.balance {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px;
}

.header h1 {
  font-size: 2.5em;
  margin: 0;
  font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
  color: white;
  font-weight: 100;
}

.header h2 {
  font-size: 1.5em;
  margin: 0;
  align-self: flex-start;
  color: white;
}

.header h4 {
  font-size: 0.9em;
  margin: 0;
  align-self: flex-start;
}

.navbar {
  display: flex;
  width: 100%;
  overflow-x: auto;
  padding: 15px 15px;
}

.navbar ul {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin: 0;
  padding: 0;
}

.navbar label {
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 20px;
  height: 70px;
  width: 70px;
  font-size: 0.8em;
  margin: 0 10px;
}

.navbar li {
  list-style: none;
}

::-webkit-scrollbar {
  display: none;
}

.income-dashboard {
  display: flex;
  flex-direction: column;
  padding: 20px;
  padding-bottom: 40px;
  background-color: white;
  width: 80%;
  justify-self: center;
  align-self: center;
  border-radius: 25px;
}

.dashboard-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}

.income-dashboard h2 {
  font-size: 0.8em;
  margin: 0;
  font-weight: 300;
  color: black;
}

.income-dashboard h1 {
  font-size: 2.3em;
  margin: 0;
  font-weight: 300;
  color: black;
}

.expenses-dashboard {
  display: flex;
  flex-direction: column;
  background-color: white;
  padding: 20px;
  width: 80%;
  justify-self: center;
  align-self: center;
  border-radius: 20px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.expenses-dashboard h2 {
  font-size: 0.8em;
  margin: 0;
  font-weight: 300;
  color: black;
}

.expenses-dashboard h1 {
  font-size: 2.3em;
  margin: 0;
  font-weight: 400;
  color: black;
}

.expenses-dashboard h3 {
  font-size: 1em;
  margin: 0;
  font-weight: 400;
  color: black;
}

.expenses-dashboard p {
  font-size: 0.8em;
  margin: 0;
  font-weight: 300;
  color: black;
}

</style>