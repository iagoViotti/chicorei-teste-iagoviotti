<template>
  <main class="checkout-page" :class="{ loading }">
    <form @submit.prevent="handleCheckout">
      <h1>Finalização do pedido</h1>
      <div>
        <label for="name">E-mail:
          <input required type="email" />
        </label>
        <label for="telephone">Telefone:
          <input required type="tel" v-model="cellphone" v-mask="'(##)#####-####'" />
        </label>
      </div>
      <div class="delivery-info">
        <h2>Informações de entrega</h2>
        <label for="cep">CEP:
          <input required type="text" v-model="cepValue" v-mask="'#####-###'" />
          <button type="button" @click="searchCEP">Buscar CEP</button>
        </label>
        <label for="rua">Rua:
          <input required type="text" v-model="address.street" />
        </label>
        <label for="numero">Número:
          <input required type="text" v-model="address.numero" />
        </label>
        <label for="bairro">Bairro:
          <input required type="text" v-model="address.neighborhood" />
        </label>
        <label for="cidade">Cidade:
          <input required type="text" v-model="address.city" />
        </label>
        <label for="estado">Estado:
          <input required type="text" v-model="address.state" />
        </label>
      </div>
      <div class="payment-info">
        <h2>Informações de pagamento</h2>
        <label for="card">Número do cartão:
          <input v-model="cardNumber" required type="text" @input="onlyNumberFilter" maxlength="16" minlength="16" />
        </label>
        <label for="titular">Titular do cartão:
          <input v-model="cardHolder" required type="text" />
        </label>
        <label for="validade">Validade:
          <input v-model="cardExpiry" required v-mask="'##/##'" type="text" />
        </label>
        <label for="cvv">CVV:
          <input v-model="cardCVV" required type="text" maxlength="3" @input="onlyNumberFilter" />
        </label>
      </div>
      <button>{{ loading ? '...' : 'Finalizar Pedido' }}</button>
    </form>
    <div class="cart-container">
      <h2>Sacola</h2>
      <section v-if="cart.length > 0">
        <div v-for="product in cart" :key="product.id">
          <div class="product-card">
            <img :src="product.image" alt="product.name" />
            <div class="info">
              <h3>{{ product.name }}</h3>
              <p>R$ {{ product.price }}</p>
            </div>
            <div class="button-container">
              <button @click="addProduct(product)">+</button>
              <span>{{ product.quantity }}</span>
              <button @click="removeProduct(product)">-</button>
            </div>
          </div>
        </div>
      </section>
      <p v-else>Nenhum produto na sacola</p>
    </div>
  </main>
</template>

<script setup>
import { ref, computed } from 'vue';
import cep from 'cep-promise';
import { generateProducts } from '../utils/mocks';
import { cartMock } from '../utils/cartMock';
import { useLoadingState } from '../utils/loadingState';
const { loading, setLoading } = useLoadingState();
const { cart, removeProduct, addProduct } = cartMock;

const products = ref();
const cellphone = ref('');
const cepValue = ref('');
const address = ref({
  street: '',
  neighborhood: '',
  city: '',
  state: '',
});
const cardNumber = ref('');
const cardHolder = ref('');
const cardExpiry = ref('');
const cardCVV = ref('');


const handleCheckout = () => {
  setLoading('Pedido enviado com sucesso!');
  resetForm();
  console.log(cart);
};

const resetForm = () => {
  cellphone.value = '';
  cepValue.value = '';
  address.value = {
    street: '',
    neighborhood: '',
    city: '',
    state: '',
  };
  cardNumber.value = '';
  cardHolder.value = '';
  cardExpiry.value = '';
  cardCVV.value = '';
};

const searchCEP = async () => {
  try {
    const response = await cep(cepValue.value);
    address.value = {
      street: response.street,
      neighborhood: response.neighborhood,
      city: response.city,
      state: response.state,
    };
  } catch (error) {
    console.error(error);
  }
};

</script>

<style scoped>
.checkout-page {
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  columns: 2;
}

form {
  display: flex;
  flex-direction: column;
  padding: 1em;
  box-sizing: border-box;
}

form label {
  display: flex;
  justify-content: space-between;
}

form div {
  display: flex;
  flex-direction: column;
}

.cart-container {
  overflow-y: scroll;
  height: 90%;
}

.product-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  margin: 1em 0;
  box-sizing: border-box;
}

.product-card img {
  max-width: 100px;
  max-height: 100px;
  border-radius: 5px 5px 0 0;
}

.info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: start;
  width: 100%;
  box-sizing: border-box;
  padding: 0 1em;
}

h3 {
  margin: 0;
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 0;
  padding: 0 1em;
}

::-webkit-scrollbar {
  width: 10px;
}

::-webkit-scrollbar-thumb {
  background-color: #888;
  border-radius: 5px;
}

</style>