import Router from 'vue-router'
import Vue from 'vue'
import userApi from '@/api/users'
import newsRoutes from '@/router/users/news'
import artistsRoutes from '@/router/users/artists'
import adminAlbumsRoutes from '@/router/admin/albums'
import adminArtistsRoutes from '@/router/admin/artists'
import adminConcertsRoutes from '@/router/admin/concerts'
import adminNewsRoutes from '@/router/admin/news'

import Main from '@/layouts/Main'
import Admin from '@/layouts/Admin'
import Index from '@/views/Index.vue'
import IndexAdmin from '@/views/admin/Index.vue'


Vue.use(Router)

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
        children: [{
            path: '/admin',
            name: 'admin.index',
            component: IndexAdmin
            },
            ...adminAlbumsRoutes,
            ...adminArtistsRoutes,
            ...adminConcertsRoutes,
            ...adminNewsRoutes
        ]
    }]
})

router.beforeEach(async (to, from, next) => {
    if (to.matched.some(route => route.meta.auth)) {
        try {
            await userApi.verifyUser()
            return next()
        } catch (e) {
            localStorage.removeItem('token')
            return next('/login')
        }
    } else {
        return next()
    }
})

export default router
