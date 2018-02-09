import Vue from 'vue'
import VueRouter from 'vue-router'
import {firebaseApp} from './firebaseApp'

import App from './App.vue'
import Dashboard from './components/Dashboard.vue'
import SignIn from './components/SignIn.vue'
import SignUp from './components/SignUp.vue'

Vue.use(VueRouter);


import store from './store'

const router = new VueRouter({
    mode: 'history',
    routes: [
        {path: '/dashboard', component: Dashboard},
        {path: '/signin', component: SignIn},
        {path: '/signup', component: SignUp}
    ]
});


firebaseApp.auth().onAuthStateChanged(function (user) {
    if (user) {
        store.dispatch('signIn', user);
        router.push('/dashboard')
    } else {
        if(location.pathname != '/signup'){
            router.replace('/signin')
        }
    }
});


new Vue({
    el: '#app',
    render: h => h(App),
    router,
    store
})
