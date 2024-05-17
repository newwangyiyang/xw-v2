/**
 * 权限校验工具类demo
 */
import router from '@/router';
import store from '@/store';
import s from 'store2';

import {
  Notify
} from 'vant';

const whiteList = ['/Login']; // 白名单列表

const usePermission = () => {
  router.beforeEach(async (to, from, next) => {
    document.title = (to.meta && to.meta.title) || process.env.VUE_APP_TITLT;
    // 开启权限校验
    const openPermissionAndAuth = to.meta.auth;
    if (openPermissionAndAuth || to.path === '/Login') {
      const token = store.getters.token || s('token');
      if (token) {
        if (to.path === '/Login') {
          // 已经登录，跳转到首页
          next('/');
        } else {
          // 获取用户信息
          const hasGetUserInfo = store.getters.token && store.getters.isLogin;
          if (hasGetUserInfo) {
            next();
          } else {
            // TODO: 页面刷新逻辑，向后台重新发起请求，获取数据，赋值store
            // try {
            //     // get user info
            //     await store.dispatch(`user/${getUesrStateByTokenAsync}`, token);
            //     next()
            // } catch (error) {
            //     // 清除用户信息，退出登录，跳转登录页
            //     store.commit(USER_OUT_LOGIN)
            //     Notify.error(error || 'Has Error')
            //     next(`/login?redirect=${to.path}`)
            // }
            next('/Login');
            Notify.error('登陆异常，请重新登陆');
          }
        }
      } else {
        /* has no token */
        if (whiteList.indexOf(to.path) !== -1) {
          // 白名单中，无需验证
          next();
        } else {
          // other pages that do not have permission to access are redirected to the login page.
          next(`/Login`);
        }
      }
    } else {
      // 未开启权限，放开所有
      next();
    }
  })
};

export default usePermission;