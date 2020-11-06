import Index from '@/views/artists/Index.vue'
import Show from '@/views/artists/Show.vue'

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
