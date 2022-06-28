import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import { vue3Debounce } from 'vue-debounce'
import PrimeVue from 'primevue/config';
import Dropdown from 'primevue/dropdown';
import Button from 'primevue/button';
import ProgressSpinner from 'primevue/progressspinner';
import ToastService from 'primevue/toastservice';
import 'primevue/resources/themes/saga-blue/theme.css'       //theme
import 'primevue/resources/primevue.min.css'                 //core css
import 'primeicons/primeicons.css'
import './assets/styles.scss'

const app = createApp(App)

app.use(store).use(router).use(PrimeVue).mount('#app')

app.directive('debounce', vue3Debounce({ lock: true }))
app.component('Dropdown',Dropdown)
app.component('Button',Button)
app.component('ProgressSpinner',ProgressSpinner)
app.use(ToastService);


