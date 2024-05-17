import services from '@/utils/axios';

const GetHomeDataAPI = () => {
  return services.get('/index/index')
}

export default {
  GetHomeDataAPI
}