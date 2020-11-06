import Index from '@/views/users/news/Index.vue'
import Show from '@/views/users/news/Show.vue'
import Create from '@/views/users/news/Create.vue'
import Edit from '@/views/users/news/Edit.vue'

const routes = [
  {
    path: '/news',
    name: 'news.index',
    component: Index,
  },
  {
    path: '/news/create',
    name: 'news.create',
    component: Create,
  },
  {
    path: '/news/:id/edit',
    name: 'news.edit',
    component: Edit,
  },
  {
    path: '/news/:id',
    name: 'news.show',
    component: Show,
  }
]

export default routes
