import Index from '@/views/admin/concerts/Index.vue'
import Show from '@/views/admin/concerts/Show.vue'
import Create from '@/views/admin/concerts/Create.vue'
import Edit from '@/views/admin/concerts/Edit.vue'

const routes = [
  {
    path: '/admin/concerts',
    name: 'admin.concerts.index',
    component: Index,
  },
  {
    path: '/admin/concerts/create',
    name: 'admin.concerts.create',
    component: Create,
  },
  {
    path: '/admin/concerts/:id/edit',
    name: 'admin.concerts.edit',
    component: Edit,
  },
  {
    path: '/admin/concerts/:id',
    name: 'admin.concerts.show',
    component: Show,
  }
]

export default routes
