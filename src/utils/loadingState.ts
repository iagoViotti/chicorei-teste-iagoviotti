import { ref } from 'vue';


const loading = ref(false);
const message = ref('');

export const useLoadingState = () => {

  const setLoading = (msg = '') => {
    loading.value = true;
    setTimeout(() => {
      loading.value = false;
      showMessage(msg);
    }
      , 1000);
  };

  const showMessage = (msg: string) => {
    message.value = msg;
    setTimeout(() => {
      message.value = '';
    }
      , 3000);
  }
  return { loading, setLoading, message, };
}
