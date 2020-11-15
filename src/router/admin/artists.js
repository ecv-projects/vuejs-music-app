import Index from '@/views/admin/artists/Index.vue'
import Show from '@/views/admin/artists/Show.vue'
import Create from '@/views/admin/artists/Create.vue'
import Edit from '@/views/admin/artists/Edit.vue'

const routes = [
    {
      path: '/admin/artists',
      name: 'admin.artists.index',
      component: Index,
    },
    {
      path: '/admin/artists/create',
      name: 'admin.artists.create',
      component: Create,
    },
    {
      path: '/admin/artists/:id/edit',
      name: 'admin.artists.edit',
      component: Edit,
    },
    {
      path: '/admin/artists/:id',
      name: 'admin.artists.show',
      component: Show,
    }
  ]
  
  export default routes
