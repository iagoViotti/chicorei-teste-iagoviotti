<template>
  <div class="personalized-alert" v-if="message">
    <div class="alert">
      <h4>{{ message }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    message: String,
  },
};
</script>

<style scoped>
.personalized-alert {
  position: fixed;
  top: 10px;
  transform: translateX(-50%);
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #fefefe;
  z-index: 999;
  border-radius: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  animation: fadeInOut 3s ease-in forwards;
}

h4 {
  color: #7e7e7e;
  text-align: center;
  padding: 0;
  margin: 0.8em;
  border-radius: 10px;
}

@keyframes fadeInOut {
  0% {
    opacity: 0.2;
    top: 0;
    left: 50%;
  }

  10% {
    opacity: 1;
    top: 10px;
  }

  90% {
    opacity: 1;
  }

  100% {
    opacity: 0;
    left: 50%;
  }
}
</style>