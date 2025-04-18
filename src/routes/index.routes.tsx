import { lazy } from 'react';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import ErrorBoundry from '@/components/shared/ErrorBoundry';
import Suspense from '@/components/shared/Suspense';

import { ROUTE_PATHS } from '@/utils/constants/route.paths';

import MainLayout from '@/layouts/main-layout';
const HomePage = lazy(() => import('@pages/Home/Home'));
const NewsPage = lazy(() => import('@pages/News/News'));
import NotFound from '@/pages/404/NotFound';
const Organizations = lazy(() => import('@/pages/organizations/Organizations'));
const News = lazy(() => import('@/pages/News/AllNews'));
const Activity = lazy(() => import('@/pages/Activity/Activity'));

const routes = createBrowserRouter([
  {
    // Main layout
    path: ROUTE_PATHS.ROOT,
    element: (
      <ErrorBoundry>
        <MainLayout />
      </ErrorBoundry>
    ),
    // Main index page
    children: [
      {
        index: true,
        element: (
          <ErrorBoundry>
            <Suspense>
              <HomePage />
            </Suspense>
          </ErrorBoundry>
        ),
      },
      {
        path: `${ROUTE_PATHS.NEWS}`,
        element: (
          <ErrorBoundry>
            <Suspense>
              <News />
            </Suspense>
          </ErrorBoundry>
        ),
      },
      // News details page
      {
        path: `${ROUTE_PATHS.NEWS_DETAILS}/:id`,
        element: (
          <ErrorBoundry>
            <Suspense>
              <NewsPage />
            </Suspense>
          </ErrorBoundry>
        ),
      },
      {
        path: `${ROUTE_PATHS.ORGANIZATIONS}`,
        element: (
          <ErrorBoundry>
            <Suspense>
              <Organizations />
            </Suspense>
          </ErrorBoundry>
        ),
      },
      {
        path: `${ROUTE_PATHS.ACTIVITY}`,
        element: (
          <ErrorBoundry>
            <Suspense>
              <Activity />
            </Suspense>
          </ErrorBoundry>
        ),
      },
    ],
  },
  // 404 page
  {
    path: '*',
    element: (
      <ErrorBoundry>
        <Suspense>
          <NotFound />
        </Suspense>
      </ErrorBoundry>
    ),
  },
]);

const Router = () => {
  return <RouterProvider router={routes} />;
};

export default Router;
