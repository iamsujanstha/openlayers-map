import { RouteObject } from 'react-router-dom'
import { lazy } from 'react'
import { NavigationPath } from '@/routes/navigation-path'

const Layout = lazy(() => import('@/components/layouts/MainLayout'))
const MapPage = lazy(() => import('@/pages/MapPage'))
const MeasurementPage = lazy(() => import('@/pages/MeasurementPage'))
const OverlayPage = lazy(() => import('@/pages/OverlayPage'))
const PageNotFound = lazy(() => import('@/components/core/PageNotFound'))


const appRoutes: RouteObject[] = [
  {
    path: NavigationPath.base,
    element: <Layout />,
    children: [
      { index: true, element: <MapPage /> },
      { path: NavigationPath.map, element: <MapPage /> },
      { path: NavigationPath.measurement, element: <MeasurementPage /> },
      { path: NavigationPath.overlay, element: <OverlayPage /> }
    ]
  },
  {
    path: '*',
    element: <PageNotFound />
  }
]

export default appRoutes
