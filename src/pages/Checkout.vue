<template>
  <h1>Finalização do pedido</h1>
  <div class="checkout-content">
    <form @submit.prevent="handleCheckout">
      <div>
        <h2>Informações de contato</h2>
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
          <div class="cep-input">
            <input required type="text" v-model="cepValue" v-mask="'#####-###'" />
            <button type="button" class="cep-button" @click="searchCEP">
              <img :src="magnifier" alt="Buscar CEP" />
            </button>
          </div>
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
      <button class="checkout-button">{{ loading ? '...' : 'Finalizar Pedido' }}</button>
    </form>
    <div class="cart-container">
      <h2>Carrinho</h2>
      <section class="cart-section" v-if="cart.length > 0">
        <div v-for="product in cart" :key="product.id" class="cart-product-container">
          <div class="cart-product-card">
            <img :src="product.image" alt="product.name" />
            <div class="info">
              <h3>{{ product.name }}</h3>
              <p>R$ {{ product.price }}</p>
            </div>
            <div class="button-container">
              <button @click="addProduct(product)">
                <img :src="plus" alt="Adicionar" />
              </button>
              <span>{{ product.quantity }}</span>
              <button @click="removeProduct(product)">
                <img :src="minus" alt="Remover" />
              </button>
            </div>
          </div>
        </div>
      </section>
      <p v-else>Nenhum produto na sacola</p>
    </div>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue';
import cep from 'cep-promise';
import { generateProducts } from '../utils/mocks';
import { cartMock } from '../utils/cartMock';
import { useLoadingState } from '../utils/loadingState';
const { loading, setLoading } = useLoadingState();
const { cart, removeProduct, addProduct } = cartMock;
import magnifier from '../assets/magnifier.svg';
import plus from '../assets/plus.svg';
import minus from '../assets/minus.svg';

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

<style lang="less">
.checkout-content {
  display: flex;
  flex-direction: column-reverse;
  align-items: center;
}

form {
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
}

.cart-container {
  width: 100%;
  box-sizing: border-box;
}

.cart-product-container {
  width: 100%;
}

.cart-section {
  height: 40vh;
  width: 100%;
  overflow-y: scroll;
  border-radius: 10px;
}

form label {
  display: flex;
  justify-content: space-between;
  padding: 0 1em;
  color: @accent-color;
}

form input {
  padding: 0.5em;
  margin: 0.2em;
}

form div {
  display: flex;
  flex-direction: column;
}

.cart-product-card {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-self: center;
  border-radius: 5px;
  box-sizing: border-box;
  width: 100%;
  padding: 1em;
}

.cart-product-card img {
  max-width: 100px;
  max-height: 100px;
  border-radius: 5px 5px 0 0;
}

.cart-product-card .info {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: flex-start;
  text-align: start;
  width: 100%;
  padding: 0 1em;
  box-sizing: border-box;
}

.cart-product-card button {
  padding: 0.5em 0.8em;
  border-radius: 5px;
  background-color: @accent-color;
  color: @primary-color;
  cursor: pointer;
}

.cart-product-card span {
  padding: 0.5em 0.7em;
  border-radius: 5px;
  background-color: @secondary-background-color;
  color: @text-color;
}

.cart-product-card p {
  margin: 0;
  font-weight: 600;
}

.checkout-content h1 {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
  padding: 0.2em;
  background-color: @primary-color;
}

.checkout-content h3 {
  font-size: 1.3em;
  margin: 0;
}

.checkout-content h2 {
  margin: 0;
  padding: 0.2em;
  box-sizing: border-box;
  // box-shadow: 0 2px 3px rgba(0, 0, 0, 0.1);
}

.button-container {
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  flex-grow: 0;
  padding: 0 1em;
}

.cep-button {
  border: none;
  border-radius: 5px;
  background-color: @secondary-background-color;
}

.cep-input {
  display: flex;
  flex-direction: row;
}

.checkout-button {
  margin: 1em;
  padding: 0.5em;
  border-radius: 10px;
  background-color: @accent-color;
  color: @primary-color;
  font-size: 1.2em;
  border: none;
  cursor: pointer;
}

@media screen and (min-width: 1000px) {
  .checkout-content {
    flex-direction: row;
    justify-content: space-evenly;
  }

  form {
    width: 40%;
    max-width: 400px;
  }

  .cart-container {
    max-width: 40%;
  }

  .cart-section {
    height: 60vh;
  }

  .checkout-button {
    padding: 0.5em 2em;
    width: fit-content;
  }

  .checkout-content h1 {
    box-shadow: none;
    font-size: 2.2em;
    background-color: transparent;
  }

}
</style>