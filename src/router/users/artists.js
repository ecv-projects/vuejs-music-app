import Index from '@/views/users/artists/Index.vue'
import Show from '@/views/users/artists/Show.vue'

const routes = [
  {
    path: '/artists',
    name: 'artists.index',
    component: Index
  },
  {
    path: '/artists/:id',
    name: 'artists.show',
    component: Show
  }
]

export default routes
