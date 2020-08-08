import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router';
import HomeComponent from './components/HomeComponent.vue';
import NosotrosComponent from './components/NosotrosComponent.vue';
import ServiciosComponent from './components/ServiciosComponent.vue';
import ContactoComponent from './components/ContactoComponent.vue';
import ErrorComponent from './components/ErrorComponent.vue';


Vue.config.productionTip = false

Vue.use(VueRouter);

//acá declaramos todas nuestras rutas de navegación
const routes = [
    { path: '/', redirect: '/home' },
    { path: '/home', name: 'home', component: HomeComponent },
    { path: '/nosotros', name: 'nosotros', component: NosotrosComponent },
    { path: '/servicios', name: 'servicios', component: ServiciosComponent },
    { path: '/contacto', name: 'contacto', component: ContactoComponent },
    { path: '*', name: 'error404', component: ErrorComponent }
];


const router = new VueRouter({ routes, mode: 'history' });

new Vue({
    router,
    render: h => h(App),
}).$mount('#app')