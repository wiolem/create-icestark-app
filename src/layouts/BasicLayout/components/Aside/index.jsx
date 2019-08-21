import React, { useState } from 'react';
import { Nav } from '@alifd/next';
import { asideMenuConfig } from '@/config/menu.js';
import { AppLink } from '@ice/stark';
import styles from './index.module.scss';

const SubNav = Nav.SubNav;
const NavItem = Nav.Item;

/**
 * 二级导航
 */
function getSubMenuOrItem(item, index) {
  if (item.children && item.children.some(child => child.name)) {
    const childrenItems = getNavMenuItems(item.children);

    if (childrenItems && childrenItems.length > 0) {
      return (
        <SubNav
          key={index}
          label={
            <span className={styles.iceMenuCollapseHide}>
              {item.name}
            </span>
          }
        >
          {childrenItems}
        </SubNav>
      );
    }
    return null;
  }
  return (
    <NavItem key={item.path}>
      <AppLink to={item.path}>
        {item.name}
      </AppLink>
    </NavItem>
  );
}

/**
 * 获取菜单项数据
 */
function getNavMenuItems(menusData) {
  if (!menusData) {
    return [];
  }

  return menusData
    .filter(item => item.name && !item.hideInMenu)
    .map((item, index) => {
      return getSubMenuOrItem(item, index);
    });
}
/**
 * 获取默认展开菜单项
 */
function getDefaultOpenKeys(location = {}) {
  const { pathname } = location;
  const menus = getNavMenuItems(asideMenuConfig);

  let openKeys = [];
  if (Array.isArray(menus)) {
    asideMenuConfig.forEach((item, index) => {
      if (pathname.startsWith(item.path)) {
        openKeys = [`${index}`];
      }
    });
  }

  return openKeys;
}

const Aside = (props) => {
  const defaultOpenKeys = getDefaultOpenKeys(props.location);
  const [openDrawer, setOpenDrawer] = useState(false);
  const [openKeys, setOpenKeys] = useState(defaultOpenKeys);

  /**
   * 响应式通过抽屉形式切换菜单
   */
  function toggleMenu() {
    setOpenDrawer(!openDrawer);
  }

  /**
   * 左侧菜单收缩切换
   */
  function onMenuClick() {
    toggleMenu();
  }

  /**
   * 当前展开的菜单项
   */
  function onOpenChange(keys) {
    setOpenKeys(keys);
  }


  const {
    location: { pathname }
  } = props;

  const openDrawerClassName = openDrawer ? styles.openDrawer : '';

  return (
    <div className={`${styles.iceDesignLayoutAside} ${styles.iceDesignLiteAside} ${openDrawerClassName}`}>
      <Nav
        style={{ width: 200 }}
        direction="ver"
        activeDirection={null}
        selectedKeys={[pathname]}
        openKeys={openKeys}
        defaultSelectedKeys={[pathname]}
        onOpen={onOpenChange}
        onClick={onMenuClick}
      >
        {getNavMenuItems(asideMenuConfig)}
      </Nav>
    </div>
  );
};

export default Aside;
