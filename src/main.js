import './style.scss';

import { createApp } from 'vue';
import { createRouter, createWebHistory } from 'vue-router';

import App from './App.vue';

import ToDo from './pages/ToDo.vue';
import Modals from './pages/Modals.vue';
import ChuckNorris from './pages/ChuckNorris.vue';
import RickAndMorty from './pages/RickAndMorty.vue';

const routes = [
    { path: '/', component: ToDo, name: 'Todo' },
    { path: '/modals', component: Modals, name: 'Modals' },
    { path: '/ChuckNorris', component: ChuckNorris, name: 'Chuck Norris' },
    { path: '/RickAndMorty', component: RickAndMorty, name: 'Rick And Morty' },
  ]

const router = createRouter({

    history: createWebHistory(),
    routes, 
})

let app = createApp(App);

app.use(router);

app.mount('#app');