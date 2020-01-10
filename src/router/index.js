import Vue from 'vue'
import VueRouter from 'vue-router'

Vue.use(VueRouter)
const Home = () => import('../views/Home.vue')
const Cart = () => import('../views/Cart.vue')
const Porfile = () => import('../views/Porfile.vue')
const Category = () => import('../views/Category.vue')

const router = new VueRouter({
    routes: [
        {
            path: '',
            redirect: '/home'
        },
        {
            path: '/home',
            component: Home
        },
        {
            path: '/cart',
            component: Cart
        },
        {
            path: '/porfile',
            component: Porfile
        },
        {
            path: '/category',
            component: Category
        }
    ],
    mode: 'history'

})
export default router    