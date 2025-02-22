<script>
export default {
  props: {
    isSidebarOpen: Boolean,
  },
};
</script>

<template>
  <transition v-if="isSidebarOpen" name="slide" mode="out-in">
    <div class="navbar">
      <router-link to="/">Home</router-link>
      <router-link to="/checkout">Checkout</router-link>
    </div>
  </transition>
</template>

<style scoped>
.navbar {
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  color: #333;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
}

.navbar a {
  color: #333;
  text-decoration: none;
  padding: 10px;
}
</style>