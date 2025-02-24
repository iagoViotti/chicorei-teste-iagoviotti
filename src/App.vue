<script setup lang="ts">
import PersonalizedAlert from './components/PersonalizedAlert.vue';
import Sidebar from './components/Sidebar.vue';
import { ref } from 'vue';
import { useLoadingState } from './utils/loadingState';

const { message } = useLoadingState();

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

</script>
<template>
  <PersonalizedAlert :message="message" />
  <Sidebar :is-sidebar-open="isSidebarOpen" />
  <div class="page">
    <header>
      <button @click='toggleSidebar'>Click me</button>
      <h1>Francisco, O Monarca</h1>
    </header>
    <main class="content">
      <router-view />
    </main>
  </div>
</template>

<style scoped>
header {
  display: flex;
  align-items: center;
}

header button {
  justify-self: flex-start;
}

header h1 {
  margin: 0.5em 0.5em;
  flex: 1;
  text-align: end;
}

.page {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
}

.content {
  display: flex;
  flex-grow: 1;
  width: 100%;
  overflow: hidden;
}
</style>
