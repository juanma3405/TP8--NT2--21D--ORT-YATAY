import Vue from 'vue'
import VueRouter from 'vue-router'

import Usuarios from './componentes/Usuarios.vue'
import Formulario from './componentes/Formulario/index.vue'


Vue.use(VueRouter)

export const router = new VueRouter({
    mode: 'history',
    routes : [
        { path: '/', redirect: '/usuarios'},
        { path: '/usuarios', component: Usuarios},
        { path: '/formulario', component: Formulario}

    ]
})