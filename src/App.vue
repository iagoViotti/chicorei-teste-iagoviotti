<template>
  <PersonalizedAlert :message="message" />
  <Sidebar :is-sidebar-open="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
  <div class="page">
    <header>
      <h1>e-commerce</h1>
      <button v-if="!isSidebarOpen" @click='toggleSidebar'><img :src="menu" alt="Menu" /></button>
    </header>
    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup lang="ts">
import PersonalizedAlert from './components/PersonalizedAlert.vue';
import Sidebar from './components/Sidebar.vue';
import { ref } from 'vue';
import { useLoadingState } from './utils/loadingState';
import menu from './assets/menu.svg'

const { message } = useLoadingState();

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

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
  // overflow: hidden;
}

main {
  overflow-y: scroll;
}
</style>
