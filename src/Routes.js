import React, {
    lazy,
    Suspense,
    Fragment
} from 'react';
import {
    Switch,
    Redirect,
    Route
} from 'react-router-dom';

import MainLayout from '../src/layouts/MainLayout'
import LoadingScreen from '../src/components/LoadingScreen'

const routesConfig = [
    {
        path: '*',
        layout: MainLayout,
        routes: [

            {
                exact: true,
                path: '/',
                component: lazy(() => import('../src/views/Home'))
            },

            {
                exact: true,
                path: '/about',
                component: lazy(() => import('../src/views/About'))
            },
            {
                exact: true,
                path: '/projects',
                component: lazy(() => import('../src/views/Projects'))
            },
            {
                exact: true,
                path: '/resume',
                component: lazy(() => import('../src/views/Resume'))
            },
            {
                exact: true,
                path: '/404',
                component: lazy(() => import('../src/views/Error404'))
            },
            {
                component: () => <Redirect to="/404" />
            }
        ]
    }
];

const renderRoutes = (routes) => (routes ? (
    <Suspense fallback={<LoadingScreen />}>
        <Switch>
            {routes.map((route, i) => {
                const Guard = route.guard || Fragment;
                const Layout = route.layout || Fragment;
                const Component = route.component;

                return (
                    <Route
                        key={i}
                        path={route.path}
                        exact={route.exact}
                        render={(props) => (
                            <Guard>
                                <Layout>
                                    {route.routes
                                        ? renderRoutes(route.routes)
                                        : <Component {...props} />}
                                </Layout>
                            </Guard>
                        )}
                    />
                );
            })}
        </Switch>
    </Suspense>
) : null);

function Routes() {
    return renderRoutes(routesConfig);
}

export default Routes;