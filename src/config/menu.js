// 菜单配置
// headerMenuConfig：头部导航配置
// asideMenuConfig：侧边导航配置

const headerMenuConfig = [
  {
    name: '反馈',
    path: 'https://github.com/alibaba/ice',
    external: true,
    newWindow: true,
    icon: 'email',
  },
  {
    name: '帮助',
    path: 'https://alibaba.github.io/ice',
    external: true,
    newWindow: true,
    icon: 'help',
  },
];

const asideMenuConfig = [
  {
    name: 'Dashboard',
    path: '/dashboard',
    icon: 'atm',
    children: [
      {
        name: '监控页',
        path: '/dashboard',
      },
    ],
  },
  {
    name: '图表页',
    path: '/portal',
    icon: 'picture',
    children: [
      {
        name: '基础图表',
        path: '/portal',
      },
    ],
  },
];

export { headerMenuConfig, asideMenuConfig };
