<template>
  <PersonalizedAlert :message="message" />
  <div class="page">
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import PersonalizedAlert from './components/PersonalizedAlert.vue';
import { useLoadingState } from './utils/loadingState';

const { message } = useLoadingState();


</script>

<style lang="less">
header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row-reverse;
  background-color: @accent-color;
}

header h1 {
  margin: 0.5em 1em;
  text-align: end;
  color: @primary-color;
}

header button {
  border-radius: 10px;
  background-color: transparent;
  border: none;
}

.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

main {
  overflow-y: scroll;
}
</style>
