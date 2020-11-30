import Router from 'vue-router'
import Vue from 'vue'
import newsRoutes from '@/router/users/news'
import artistsRoutes from '@/router/users/artists'
import adminAlbumsRoutes from '@/router/admin/albums'
import adminArtistsRoutes from '@/router/admin/artists'
import adminConcertsRoutes from '@/router/admin/concerts'
import adminNewsRoutes from '@/router/admin/news'
import jwt_decode from "jwt-decode";

import Main from '@/layouts/Main'
import Admin from '@/layouts/Admin'
import Index from '@/views/Index.vue'
import Login from '@/components/Login.vue'
import Register from '@/components/Register.vue'

Vue.use(Router)

const ifAuthenticated = (to, from, next) => {
    const todayDate = Date.now()

    if (localStorage.getItem('token')) {
        const expToken = jwt_decode(localStorage.getItem("token")).exp * 1000
        if (todayDate > expToken) {
            localStorage.removeItem('token')
            router.push({
                name: 'login',
                params: {
                    returnTo: to.path,
                    query: to.query,
                },
            });
        }
        next();
        return;
    }
    router.push({
        name: 'login',
        params: {
            returnTo: to.path,
            query: to.query,
        },
    });
};

const router = new Router({
    mode: 'history',
    base: '/',
    routes: [{
        component: Main,
        path: '',
        children: [{
                path: '/',
                name: 'index',
                component: Index
            },
            ...newsRoutes,
            ...artistsRoutes
        ]
    }, {
        component: Admin,
        path: '/admin',
        beforeEnter: ifAuthenticated,
        children: [{
                path: '/admin',
                name: 'admin.index',
                component: Index
            },
            ...adminAlbumsRoutes,
            ...adminArtistsRoutes,
            ...adminConcertsRoutes,
            ...adminNewsRoutes
        ]
    }, {
        path: '/login',
        name: 'login',
        component: Login
    }, {
        path: '/register',
        name: 'register',
        component: Register
    }]
})



export default router
