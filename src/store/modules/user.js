/**
 * 用户模块
 *
 */
const userState = {
  userId: '',
  username: '',
};

export default {
  namespaced: true,
  state: userState,
  mutations: {
    INIT_USER(state, userState) {
      Object.keys(userState).forEach((key) => {
        state[key] = userState[key];
      });
    },
  },
  actions: {
    initUser({
      commit
    }, userState) {
      commit('INIT_USER', userState);
    },
    loginOut({
      commit
    }) {
      commit('INIT_USER', userState)
    },
  },
};