/**
 * @for
 * 初始化项目基本设置
 */
import {
  isEqual
} from 'lodash'
import vhCheck from 'vh-check';
import {
  loadVConsoleScript
} from '@/utils/index'
import usePermission from '@/utils/permission'
import '@/icons';

export default {
  install(Vue) {
    usePermission();
    vhCheck('browser-address-bar');
    isEqual(process.env.VUE_APP_OPEN_VCONSOLE, 'true') && loadVConsoleScript();
    Vue.config.productionTip = false;
  },
};