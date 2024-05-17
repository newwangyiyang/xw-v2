import service from '@/utils/axios';

// 获取穴位视频跟视频封面
export const getXwPic = (params) => service.get('/v2/data/jlxw/extra', {
  params
})