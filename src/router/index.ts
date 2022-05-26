import { createRouter, createWebHistory } from 'vue-router';

//Routes
import Home from '../views/Home.vue'
import Details from '../views/Details.vue'
import Team from '../views/Team.vue'
import NotFound from '../views/NotFound.vue'

const routes = [
  {
    path: '/',
    meta: { title: 'Home' },
    component: Home,
  },
  {
    path: '/details/:id',
    meta: { title: 'Details' },
    props: true,
    component: () => import('../views/Details.vue')
  },
  {
    path: '/team',
    meta: { title: 'Team' },
    component: Team,
  },
  {
    path: '/:page',
    component: NotFound,
  },
];

export const Router = createRouter({
  scrollBehavior: () => ({ left: 0, top: 0 }),
  history: createWebHistory(),
  routes,
});
