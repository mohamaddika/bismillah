import { createRouter, createWebHistory } from 'vue-router'

function cekToken(to, from, next) {
  if (!!localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
    next()
  } else {
    alert('Mohon login terlebih dahulu!')
    next('/login')
  }
};
function CekProfil(to, from, next) {
  if (!!localStorage.getItem('token') && localStorage.getItem('token') != 'undefined') {
    next()
  } else {
    next('/')
  }
};


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'Login',
      component: () => import('../views/Admin/LoginView.vue'),
    },
    {
      path: '/admin/dashboard',
      name: 'Dashboard',
      component: () => import('../views/Admin/indexView.vue'),
      beforeEnter: cekToken,
    },
    {
      path: '/admin/siswa',
      name: 'Siswa',
      component: () => import('../views/Admin/siswa/indexView.vue'),
      beforeEnter: cekToken,
    },
    {
      path: '/admin/siswa/create',
      name: 'SiswaCreate',
      component: () => import('../views/Admin/siswa/CreateView.vue'),
      beforeEnter: cekToken,
    },
    {
      path: '/admin/riwayat_tabungan',
      name: 'RiwayatTabungan',
      component: () => import('../views/Admin/riwayat_tabungan/indexView.vue'),
      beforeEnter: cekToken,
    },
    {
      path: '/admin/siswa/edit/:id',
      name: 'SiswaEdit',
      component: () => import('../views/Admin/siswa/EditView.vue'),
      props:true,
      beforeEnter: cekToken,
    },
  ]
});

export default router