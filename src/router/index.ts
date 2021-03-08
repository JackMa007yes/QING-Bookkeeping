import Vue from 'vue';
import VueRouter from 'vue-router';
import Money from "@/views/money/Money.vue";
import Detail from "@/views/detail/detail.vue";
import Statistics from "@/views/statistics/Statistics.vue";
import NotFound from "@/components/common/notfound/NotFound.vue";



Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    redirect: '/money'
  },
  {
    path: '/money',
    component: Money
  },
  {
    path: '/detail',
    component: Detail,
  },
  {
    path: '/statistics',
    component: Statistics,
  },
  {
    path: '*',
    component: NotFound
  }
]

const router = new VueRouter({
  routes
})

export default router
