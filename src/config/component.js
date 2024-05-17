/**
 * #for
 * 全局注入组件
 */
import {
  Button,
  Cell,
  CellGroup,
  Lazyload,
  Field,
  Form,
  Image,
  Divider,
  Swipe,
  SwipeItem,
  Search,
  Grid,
  GridItem,
  IndexBar,
  IndexAnchor,
  Col,
  Row,
  Step,
  Steps,
  Tab,
  Tabs,
  Tag,
  Icon
} from 'vant';

export default {
  install(Vue) {
    Vue.use(Button)
      .use(Cell)
      .use(CellGroup)
      .use(Lazyload)
      .use(Form)
      .use(Field)
      .use(Image)
      .use(Divider)
      .use(Swipe)
      .use(SwipeItem)
      .use(Search)
      .use(Grid)
      .use(GridItem)
      .use(IndexBar)
      .use(IndexAnchor)
      .use(Col)
      .use(Row)
      .use(Step)
      .use(Steps)
      .use(Tab)
      .use(Tabs)
      .use(Tag)
      .use(Icon)
  }
};