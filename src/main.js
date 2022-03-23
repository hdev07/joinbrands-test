import App from './App.vue'
import './styles/app.css'
import * as Vue from 'vue';
import * as VueRouter from 'vue-router';

// These can be imported from other files
const Home = { template: '<div>Home</div>' }
const signIn = { template: '<div>sign-in</div>' }
const logOut = { template: '<div>log-Out</div>' }
const singUp = { template: '<div>sing-up</div>' }
const profile = { template: '<div>profile</div>' }
const lostPassword = { template: '<div>lost-password</div>' }
const changePassword = { template: '<div>change-password</div>' }

// 2. Define some routes
const routes = [
  { path: '/', component: Home },
  { path: '/sign-in', component: signIn },
  { path: '/sing-up', component: singUp },
  { path: '/log-Out', component: logOut },
  { path: '/profile', component: profile },
  { path: '/lost-password', component: lostPassword },
  { path: '/change-password', component: changePassword },
]        
// 3. Create the router instance and pass the `routes` option
const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes,
})

// 5. Create and mount the root instance.
const app = Vue.createApp({})
// whole app router-aware.
app.use(router)
Vue.createApp(App).use(router).mount('#app');
