import SearchLoader from '@/components/common/Loader/search'
import { Suspense, lazy } from 'react'
import { NonIndexRouteObject, Outlet, useRoutes } from 'react-router'

const HomeRoute = lazy(() => import('../pages/home'))
const NotFoundRoute = lazy(() => import('../pages/notFound'))

const LandingRoutes: NonIndexRouteObject[] = [
  {
    path: '/',
    element: <Outlet />,
    children: [
      {
        index: true,
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomeRoute />
          </Suspense>
        ),
      },
      {
        path: '/articles/:category?',
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <HomeRoute />
          </Suspense>
        ),
      },
    ],
  },
]

const MainRoutes: NonIndexRouteObject = {
  path: '/',
  children: [
    ...LandingRoutes,
    {
      path: '*',
      caseSensitive: true,
      element: (
        <Suspense fallback={<SearchLoader />}>
          <NotFoundRoute />
        </Suspense>
      ),
    },
  ],
}

export default function ThemeRoutes() {
  return useRoutes([MainRoutes])
}
