/**
 * 项目模块
 *
 */
const appState = {
  authToken: '',
  isLogin: false,
  keepAliveRoutes: [],

  index: '', // 索引栏默认位置
};

export default {
  namespaced: false,
  state: appState,
  mutations: {
    INIT_APP(state, appState) {
      Object.keys(appState).forEach((key) => {
        state[key] = appState[key];
      });
    },

    SET_INDEX(state, index) {
      state.index = index
    },
  },
  actions: {
    initApp({
      commit
    }, appState) {
      commit('INIT_APP', appState);
    },
    clearState({
      commit
    }) {
      commit(appState)
    },

  },
};