import { createApp } from 'vue'
import { createPinia } from 'pinia'
import router from './router'
import App from './App.vue'
import axios from 'axios';
import VueAxios from 'vue-axios';
import { store } from './store';

import 'bootstrap'
import Select2 from 'vue3-select2-component';

const app = createApp(App)
window.$ = window.jQuery = require('jquery');
import Multiselect from '@vueform/multiselect'

app.component('multiSelect', Multiselect)

app.use(createPinia())
app.use(router);
app.use(store);
app.use(VueAxios, axios);

app.component('Select2Option', Select2)

app.mount('#app')
