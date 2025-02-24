<template>
  <div class="chart-wrapper">
    <div class='monthly-chart'>
          <div v-for="month in months" :key="month">
          <div class="vertical-chart">
            <svg width="6" height="100">
            <line x1="3" y1="100" x2="3" y2="20" stroke="cornflowerblue" stroke-width="8" stroke-linecap="round" stroke-dasharray="1111, 1111" />
            <line x1="3" y1="50" x2="3" y2="0" stroke="hotpink" stroke-width="8" stroke-linecap="round" stroke-dasharray="111, 5" />
            <line x1="3" y1="10" x2="3" y2="0" stroke="limegreen" stroke-width="8" stroke-linecap="round" stroke-dasharray="111, 5" />
            </svg>
            <small>{{getFirstLetter(month)}}</small>
          </div>
      </div>
      </div>
    </div>
</template>

<script setup>
import { ref } from 'vue'

const months = ref([ 'jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec' ])

const getFirstLetter = (str) => {
  return str.charAt(0).toUpperCase();
}

</script>

<style lang="less" scoped>
.chart-wrapper {
  text-align: center;
}

.monthly-chart {
  display: flex;
  justify-content: center;
  align-items: center;
}

.vertical-chart {
  display: inline-block;
  margin: 0 8px;
  text-align: center;
}

</style>