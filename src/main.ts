import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router';
import './global.less';
import VueTheMask from 'vue-the-mask';

const app = createApp(App);
app.use(router);
app.use(VueTheMask)
app.mount('#app');
