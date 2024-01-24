import './style.scss';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import ChuckNorris from './pages/ChuckNorris.vue'

const routes = [
    { path: '/', component: ToDo, name: 'Todo' },
    { path: '/modals', component: Modals, name: 'Modals' },
    { path: '/ChuckNorris', component: ChuckNorris, name: 'ChuckNorris' },
  ]

const router = createRouter({

    history: createWebHistory(),
    routes, 
})

let app = createApp(App);

app.use(router);

app.mount('#app');