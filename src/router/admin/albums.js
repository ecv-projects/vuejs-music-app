import Index from '@/views/admin/albums/Index.vue'
import Show from '@/views/admin/albums/Show.vue'
import Create from '@/views/admin/albums/Create.vue'
import Edit from '@/views/admin/albums/Edit.vue'

const routes = [
    {
      path: '/admin/albums',
      name: 'admin.albums.index',
      component: Index,
    },
    {
      path: '/admin/albums/create',
      name: 'admin.albums.create',
      component: Create,
    },
    {
      path: '/admin/albums/:id/edit',
      name: 'admin.albums.edit',
      component: Edit,
    },
    {
      path: '/admin/albums/:id',
      name: 'admin.albums.show',
      component: Show,
    }
  ]
  
  export default routes
