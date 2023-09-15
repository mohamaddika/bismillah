import { createRouter, createWebHistory } from 'vue-router'
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Dashboard',
      component: () => import('../views/Admin/indexView.vue'),
    },
    {
      path: '/admin/siswa',
      name: 'Siswa',
      component: () => import('../views/Admin/siswa/indexView.vue'),
    },
    {
      path: '/admin/siswa/create',
      name: 'SiswaCreate',
      component: () => import('../views/Admin/siswa/CreateView.vue'),
    },
    {
      path: '/admin/riwayat_tabungan',
      name: 'RiwayatTabungan',
      component: () => import('../views/Admin/riwayat_tabungan/indexView.vue'),
    },
    {
      path: '/admin/siswa/edit/:id',
      name: 'SiswaEdit',
      component: () => import('../views/Admin/siswa/EditView.vue'),
      props:true
    },
  ]
});

export default router