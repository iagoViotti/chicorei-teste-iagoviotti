<template>
<div v-for="expense in expenses" :key="expense"  class="chart-wrapper">
  <div class="circle-chart">
    <svg width="50" height="50" viewBox="0 0 120 120">
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke="#e5e7eb"
        stroke-width="12"
      />
      <circle
        cx="60"
        cy="60"
        r="54"
        fill="none"
        stroke-width="12"
        :class="['progress-circle','blue']"
        :style="{
          strokeDasharray: `${circumference} ${circumference}`,
          strokeDashoffset: circumference - (expense.percentage / 100) * circumference
        }"
        transform="rotate(-90 60 60)"
      />
    </svg>
    <div class="percentage circle-percentage">{{ expense.percentage }}%</div>
  </div>
  <div class="info-div">
    <h3>{{expense.name.toUpperCase()}}</h3>
    <p>{{expense.category.toUpperCase()}}</p>
  </div>
  <h4>-S{{expense.value}},00</h4>
</div>
</template>

<script setup>
import { ref, computed } from 'vue'

const expenses = ref([
  {
    name: 'aluguel',
    category: 'home',
    value: 500,
    percentage: 53
  },
  {
    name: 'internet',
    category: 'home',
    value: 100,
    percentage: 20
  },
  {
    name: 'gas',
    category: 'car',
    value: 50,
    percentage: 5
  },
  {
    name: 'insurance',
    category: 'car',
    value: 100,
    percentage: 10
  },
])

const radius = 54
const circumference = computed(() => 2 * Math.PI * radius)

</script>

<style lang="less" scoped>
.charts-container {
  display: flex;
  gap: 2rem;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
}

.chart-wrapper {
  display: flex;
  padding: 0.5rem;
}

.circle-chart {
  position: relative;
  display: inline-flex;
  justify-content: center;
  align-items: center;

  .circle-percentage {
    position: absolute;
    font-weight: 400;
  }
}

.progress-circle {
  &.blue {
    stroke: blue; 
  }
}

.info-div {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  padding: 0 1rem;
}

.info-div h3 {
  margin: 0;
}

.info-div p {
  margin: 0;
}

.chart-wrapper h4 {
  margin: 0;
  color: orangered;
  margin-left: auto;
  font-weight: 400;
}
</style>