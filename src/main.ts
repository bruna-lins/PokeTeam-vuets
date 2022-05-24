import { createApp } from 'vue'
import App from './App.vue'
import './index.css'
import 'flowbite'


// Router
import { Router } from './router';
import store from './store/store';


const app = createApp(App);


app.use(store);
app.use(Router);
app.mount('#app');
