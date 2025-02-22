<script setup>
import { ref } from 'vue';
import { generateProducts } from '../utils/mocks';

const products = ref(generateProducts(20));

const print = () => {
  console.log(products.value);
};

</script>


<template>
  <main>
    <h1>Products</h1>
    <button @click="print">Print</button>
    <section>
      <div v-for="product in products" :key="product.id">
        <div class="product-card">
          <img :src="product.image" alt="product.name" />
          <h2>{{ product.name }}</h2>
          <small>{{ product.category }}</small>
          <p>{{ product.price }}</p>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
section {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  flex-wrap: wrap;
  justify-content: center;
}
</style>