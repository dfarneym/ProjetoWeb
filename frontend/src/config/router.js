// Arquivo de configuração de rotas entre os componentes

import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '@/components/home/Home'
import AdminPages from '@/components/admin/AdminPages'
import ProductsByCategory from '@/components/product/ProductsByCategory'
import ProductById from '@/components/product/ProductById'
import Auth from '@/components/auth/Auth'

Vue.use(VueRouter)

// Registrando rotas...
const routes = [{
    name: 'home',
    path: '/',
    component: Home
}, {
    name:'adminPages',
    path: '/admin',
    component: AdminPages
}, {
    name: 'productsByCategory',
    path: '/categories/:id/products',
    component: ProductsByCategory 
}, {
    name: 'productById',
    path: '/products/:id',
    component: ProductById
}, {
    name: 'auth',
    path: '/auth',
    component: Auth
}]

// Instanciando e exportando o Vue Router
export default new VueRouter({
    mode: 'history',
    routes
})

