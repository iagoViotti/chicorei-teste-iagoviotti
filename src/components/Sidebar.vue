<template>
  <Transition name="slide">
    <div v-if="isSidebarOpen" :class="{ navbar: true, 'navbar-open': isSidebarOpen }">
      <div class="sidebar-header">
        <h2>Menu</h2>
        <button @click="toggleSidebar">
          <img v-show="isSidebarOpen" :src="closeIcon" alt="Close" />
        </button>
      </div>
      <router-link to="/">Home</router-link>
      <router-link to="/checkout">Checkout</router-link>
    </div>
  </Transition>
</template>

<script>
import close from '../assets/close.svg'
export default {
  props: {
    isSidebarOpen: Boolean,
  },
  methods: {
    toggleSidebar() {
      this.$emit('toggle-sidebar')
    }
  },
  data() {
    return {
      closeIcon: close,
    };
  },
};
</script>

<style lang="less">
.navbar-open {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: @text-color;
  padding: 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  position: fixed;
  height: 100dvh;
  background-color: @background-color;
  box-sizing: border-box;
  transition: slide 2s forwards;
}

.slide-enter-active {
  animation: slide 0.3s cubic-bezier(.23, .52, .44, 1.01) forwards;
}

.slide-leave-active {
  animation: slide 0.3s cubic-bezier(.23, .52, .44, 1.01) reverse;
}

@keyframes slide {
  from {
    transform: translateX(-100%);
  }

  to {
    transform: translate(0);
  }
}

.navbar a {
  color: @text-color;
  text-decoration: none;
  padding: 10px;
}

.sidebar-header {
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 10px;
  box-sizing: border-box;
}

.sidebar-header h2 {
  margin: 0 1em 0 0;
}

.sidebar-header button {
  border: none;
  background-color: @background-color;
}
</style>