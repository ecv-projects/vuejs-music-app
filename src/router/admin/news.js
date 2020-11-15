import Index from '@/views/admin/news/Index.vue'
import Show from '@/views/admin/news/Show.vue'
import Create from '@/views/admin/news/Create.vue'
import Edit from '@/views/admin/news/Edit.vue'

const routes = [
    {
      path: '/admin/news',
      name: 'admin.news.index',
      component: Index,
    },
    {
      path: '/admin/news/create',
      name: 'admin.news.create',
      component: Create,
    },
    {
      path: '/admin/news/:id/edit',
      name: 'admin.news.edit',
      component: Edit,
    },
    {
      path: '/admin/news/:id',
      name: 'admin.news.show',
      component: Show,
    }
  ]
  
  export default routes
