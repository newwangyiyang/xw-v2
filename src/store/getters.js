/**
 * 定义vuex导出数据
 *
 */
export default {
  userId: (state) => state.user.userId,
  token: (state) => state.app.authToken,
  isLogin: (state) => state.app.isLogin,
  keepAliveRoutes: (state) => state.app.keepAliveRoutes,

  index: (state) => state.app.index,
};