import sr from 'sr-sdk-wxapp';
import { devtools } from 'stook-devtools';
import devTools from '../libs/remote-redux-devtools.js';

if (process.env.NODE_ENV !== 'production') {
  /**
   *  用于插入 Redux devtools
   *  需要在本地执行以下代码,即可通过 localhost:5678 查看 redux 状态
   *
   *  remotedev --hostname=localhost --port=5678
   *
   *  而后在 localhost:5678 即可查看 redux-devtools
   */
  window.__REDUX_DEVTOOLS_EXTENSION__ = () =>
    devTools({
      hostname: 'localhost',
      port: 5678,
      secure: false,
    });
  devtools.init();
}

sr.init({
  /**
   * 有数 - ka‘接入测试用’ 分配的 app_id，对应的业务接口人负责
   */
  token: 'bi72fccc7184ef4xxx',
  /**
   * 微信小程序appID，以wx开头
   */
  appid: 'wx195745e8e342bxxx',
  /**
   * 如果使用了小程序插件，需要设置为 true
   */
  usePlugin: false,
  /**
   * 开启打印调试信息， 默认 false
   */
  debug: true,
  /**
   * 建议开启-开启自动代理 Page， 默认 false
   * sdk 负责上报页面的 browse 、leave、share 等事件
   * 可以使用 sr.page 代替 Page(sr.page(options))
   * 元素事件跟踪，需要配合 autoTrack: true
   */
  proxyPage: true,
  /**
   * 建议开启-开启组件自动代理， 默认 false
   * sdk 负责上报页面的 browse 、leave、share 等事件
   */
  proxyComponent: true,
  // 建议开启-是否开启页面分享链路自动跟踪
  openSdkShareDepth: true,
  // 建议开启-元素事件跟踪，自动上报元素事件，入tap、change、longpress、confirm
  autoTrack: true,
});
