import services from '@/utils/axios';

const websiteToken = {
  tokenLogin(params) {
    return services.post('/login', params);
  },
  tokenLogout() {
    return services.post('/logout');
  },
  tokenRefresh(userId) {
    return services.post(`/refreshTokenZForWeb/${userId}`);
  },
};

export default websiteToken;