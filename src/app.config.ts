export default {
  pages: ['pages/home/index', 'pages/my/index'],
  window: {
    backgroundTextStyle: 'light',
    navigationBarBackgroundColor: '#fff',
    navigationBarTitleText: 'WeChat',
    navigationBarTextStyle: 'black',
  },
  tabBar: {
    selectedColor: '#1050a6',
    borderStyle: 'white',
    list: [
      {
        text: '首页',
        pagePath: 'pages/home/index',
        iconPath: 'assets/images/tabs/home.png',
        selectedIconPath: 'assets/images/tabs/home.png',
      },
      {
        text: '我的',
        pagePath: 'pages/my/index',
        iconPath: 'assets/images/tabs/my-s.png',
        selectedIconPath: 'assets/images/tabs/my-s.png',
      },
    ],
  },
};
