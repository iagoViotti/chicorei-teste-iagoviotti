<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import { ref } from 'vue';

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

</script>
<template>
  <Sidebar :is-sidebar-open="isSidebarOpen" />
  <div class="page">
    <header>
      <button @click='toggleSidebar' >Click me</button>
      <h1>Francisco, O Monarca</h1>
    </header>
    <router-view />
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
  justify-content: space-around;
  /* transition: all 0.3s; */
}

header button {
  justify-self: flex-start;
  /* transition: all 0.3s; */
}

.page {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
