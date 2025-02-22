<template>
  <form @submit.prevent="handleCheckout">
    <h1>Finalização do pedido</h1>
    <div>
      <label for="name">E-mail:</label>
      <input required type="email" />
      <label for="telephone">Telefone:</label>
      <input required type="tel" />
    </div>
    <div>
      <h2>Informações de entrega</h2>
      <label for="cep">CEP:</label>
      <input required type="text" />
      <button>Buscar CEP</button>
      <label for="rua">Rua:</label>
      <input required type="text" />
      <label for="numero">Número:</label>
      <input required type="text" />
      <label for="bairro">Bairro:</label>
      <input required type="text" />
      <label for="cidade">Cidade:</label>
      <input required type="text" />
      <label for="estado">Estado:</label>
      <input required type="text" />
    </div>
    <div>
      <h2>Informações de pagamento</h2>
      <label for="card">Número do cartão:</label>
      <input required type="text" />
      <label for="titular">Titular do cartão:</label>
      <input required type="text" />
      <label for="validade">Validade:</label>
      <input required type="text" />
      <label for="cvv">CVV:</label>
      <input required type="text" />
    </div>
    <button>Finalizar pedido</button>
  </form>
</template>

<script setup>
import { ref } from 'vue';

const handleCheckout = () => {
  console.log('Pedido finalizado!');
};

</script>