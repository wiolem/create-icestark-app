import React from 'react';
import { AppRouter, AppRoute } from '@ice/stark';
import BasicLayout from '@/layouts/BasicLayout'

export default class Layout extends React.Component {
  onRouteChange = (pathname) => {
    console.log(pathname);
  }

  render() {
    return (
      <BasicLayout >
        <AppRouter
          onRouteChange={this.onRouteChange}
          ErrorComponent={<div>js bundle loaded error</div>}
          NotFoundComponent={<div>NotFound</div>}
        >
          <AppRoute
            path="/dashboard"
            exact
            title="dashboard"
            url={[
              '//localhost:4444/js/dashboard.js',
              '//localhost:4444/css/dashboard.css',
            ]}
          />
          <AppRoute
            path="/portal"
            exact
            title="portal"
            url={[
              '//localhost:4444/js/portal.js',
              '//localhost:4444/css/portal.css',
            ]}
          />
        </AppRouter>
      </BasicLayout>
    );
  }
}