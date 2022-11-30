import Vue from 'vue';
import VueRouter from 'vue-router';
import MainView from '../components/MainView.vue';
import ReceiptMain from '../components/ReceiptMain.vue';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/', component: MainView },
    { path: '/receipt', component: ReceiptMain },
  ],
});

export default router;
