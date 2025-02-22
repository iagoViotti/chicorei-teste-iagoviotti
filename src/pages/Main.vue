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
      <div v-for="product in products" :key="product.id" class="grid-cell">
        <div class="product-card">
          <img :src="product.image" alt="product.name" />
          <div class="info">
            <h2>{{ product.name }}</h2>
            <small>{{ product.description }}</small>
            <p>R$ {{ product.price }}</p>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<style scoped>
main {
  padding: 1em;
  box-sizing: border-box;
  overflow-y: scroll;
}

section {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(380px, 1fr));
  gap: 1.2em;
  flex-wrap: wrap;
  justify-content: center;
}

.grid-cell {
  display: flex;
  justify-content: center;
  width: 100%;
  height: 100%;
}

.product-card {
  max-width: 400px;
  display: flex;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}

.info {
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

img {
  max-width: 200px;
  max-height: 200px;
  border-radius: 5px 5px 0 0;
  object-fit: cover;
  flex-shrink: 0;
}

.product-card h2 {
  margin: 0;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  line-clamp: 2;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.4em;
  max-height: calc(1.4em * 2);
  font-size: 1.2rem;
}

small {
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}

.product-card p {
  margin: 0;
  align-self: flex-end;
  font-weight: bold;
}

</style>