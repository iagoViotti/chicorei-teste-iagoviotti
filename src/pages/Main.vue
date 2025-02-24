<template>
  <Sidebar :is-sidebar-open="isSidebarOpen" @toggle-sidebar="toggleSidebar" />
  <header>
    <h1>Chicochico</h1>
    <button v-if="!isSidebarOpen" @click='toggleSidebar'><img :src="menu" alt="Menu" /></button>
  </header>
  <div class="home-content">
    <div class="filter-div">
      <select v-model='selectedCategory' @change='navToCategory'>
        <option value='shirts' selected>Shirts</option>
        <option value='pants'>Pants</option>
        <option value='accessories'>Accessories</option>
      </select>
    </div>
    <section>
      <div v-for="product in products" :key="product.id">
        <div class="product-card" @click="() => console.log(product)">
          <img :src="product.image" alt="product.name" />
          <div class="info">
            <h2>{{ product.name }}</h2>
            <small>{{ product.description }}</small>
            <p>R$ {{ product.price }}</p>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { generateProducts } from '../utils/mocks';
import { useRouter, useRoute } from 'vue-router';
import Sidebar from '../components/Sidebar.vue';
import menu from '../assets/menu.svg';

const isSidebarOpen = ref(false);
const toggleSidebar = () => {
  isSidebarOpen.value = !isSidebarOpen.value;
};

const router = useRouter();
const route = useRoute();

// fake API call
const shirts = ref(generateProducts(10, 'shirts'));
const pants = ref(generateProducts(10, 'pants'));
const accessories = ref(generateProducts(10, 'accessories'));

const products = computed(() => {
  if (selectedCategory.value === 'shirts') return shirts.value;
  if (selectedCategory.value === 'pants') return pants.value
  if (selectedCategory.value === 'accessories') return accessories.value;
  return shirts.value;
});
// fake API call

const selectedCategory = ref(route.params.category || 'shirts');

const navToCategory = () => {
  router.push(`/${selectedCategory.value}`);
};

watch(() => route.params.category, (newCategory) => {
  selectedCategory.value = newCategory;
});

const print = () => {
  console.log(products.value);
};

</script>

<style lang="less">
.filter-div {
  display: flex;
  padding: 1em 8%;
}

select {
  font-size: 1em;
  padding: 5px 10px;
  box-sizing: border-box;
  margin: 0 2em;
  border-radius: 10px;
  background-color: @secondary-background-color;
  border-color: @text-color;
  width: fit-content;
  color: @text-color;
}

section {
  display: flex;
  flex-direction: column;
  padding: 1em 1em;
  box-sizing: border-box;
  gap: 1.2em;
  height: 100%;
}

@media screen and (min-width: 1000px) {
  section {
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }
}

.product-card {
  max-width: 400px;
  display: flex;
  padding: 10px;
  border-bottom: 1px solid @primary-color;
  cursor: pointer;
}

.info {
  padding: 1em;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

img {
  max-width: 150px;
  max-height: 150px;
  border-radius: 5px 5px 0 0;
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

// ::-webkit-scrollbar {
//   width: 10px;
// }

// ::-webkit-scrollbar-thumb {
//   background-color: @light-accent-color;
//   border-radius: 5px;
// }</style>