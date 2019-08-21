import React from 'react';
import { Balloon, Icon, Nav } from '@alifd/next';
import IceImg from '@icedesign/img';
import Layout from '@icedesign/layout';
import { AppLink } from '@ice/stark';
import { headerMenuConfig } from '@/config/menu.js';
import Logo from '../Logo';

import styles from './index.module.scss';

export default function Header(props) {
  const { isMobile, className, style } = props;

  return (
    <Layout.Header
      theme="dark"
      className={`${styles.iceDesignLayoutHeader} ${className}`}
      style={{ ...style }}
    >
      <Logo />

      <div className={styles.iceDesignLayoutHeaderMenu}>
        {/* Header 菜单项 begin */}
        {headerMenuConfig && headerMenuConfig.length > 0 ? (
          <Nav direction="hoz" type="secondary" selectedKeys={[]}>
            {headerMenuConfig.map((nav, idx) => {
              const linkProps = {};
              if (nav.newWindow) {
                linkProps.href = nav.path;
                linkProps.target = '_blank';
              } else if (nav.external) {
                linkProps.href = nav.path;
              } else {
                linkProps.to = nav.path;
              }
              return (
                <Nav.Item key={idx} icon={nav.icon ? nav.icon : null}>
                  {linkProps.to ? (
                    <AppLink {...linkProps}>
                      {!isMobile ? nav.name : null}
                    </AppLink>
                  ) : (
                    <a {...linkProps}>
                      {!isMobile ? nav.name : null}
                    </a>
                  )}
                </Nav.Item>
              );
            })}
          </Nav>
        ) : null}
        {/* Header 菜单项 end */}

        {/* Header 右侧内容块 */}
        <div className={styles.iceDesignHeaderUserpannel}>
          <IceImg
            height={40}
            width={40}
            src="https://img.alicdn.com/tfs/TB1L6tBXQyWBuNjy0FpXXassXXa-80-80.png"
            className={styles.userAvatar}
          />
          <div className={styles.userProfile}>
            <span className={styles.userName}>淘小宝</span>
            <br />
            <span className={styles.userDepartment}>技术部</span>
          </div>
          <Icon
            type="arrow-down"
            size="xxs"
            className={styles.iconDown}
          />
        </div>
      </div>
    </Layout.Header>
  );
}
