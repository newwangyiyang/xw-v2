import Vue from 'vue';
import VueRouter from 'vue-router';
import {
  map
} from 'lodash-es'
import store from '@/store';
import page404 from '@/views/404';


Vue.use(VueRouter);

const routeViews = require.context('./views', false, /\.js$/);
const routes = routeViews.keys().map((routeKey) => routeViews(routeKey).default || routeViews(routeKey));
routes.push({
  path: '*',
  component: page404,
});
/** 未考虑动态路由配置，后续如有需求使用 router.addRoute进行动态添加 */
const router = new VueRouter({
  mode: 'hash',
  base: process.env.VUE_APP_PUBLICK_PATH,
  routes,
  scrollBehavior(_to, _from, savedPosition) {
    return savedPosition || {
      x: 0,
      y: 0
    }
  },
});

store.dispatch('initApp', {
  keepAliveRoutes: getKeepAliveRoutes(routes)
})

// 获取需要缓存的路由名称
function getKeepAliveRoutes(routes = []) {
  return map(routes, route => route && route.meta && route.meta.keepAlive && route.name).filter(Boolean)
}

const originalPush = VueRouter.prototype.replace
VueRouter.prototype.replace = function replace(location, onResolve, onReject) {
  if (onResolve || onReject) return originalPush.call(this, location, onResolve, onReject)
  return originalPush.call(this, location).catch(err => err)
}

export default router;