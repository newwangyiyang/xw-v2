import Info from '@/views/Info';

export default {
  path: '/info/:xw',
  name: 'Info',
  component: Info,
  meta: {
    title: '穴位详情',
    auth: false,
    keepAlive: false,
  },
};