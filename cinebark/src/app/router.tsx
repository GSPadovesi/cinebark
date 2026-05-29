import { Navigate, createBrowserRouter } from 'react-router-dom'
import { HomePage } from '@/app/routes'
import { AppLayout } from '@/components'

export const appRoutes = {
  home: '/',
} as const

export const router = createBrowserRouter([
  {
    path: appRoutes.home,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: '*',
        element: <Navigate to={appRoutes.home} replace />,
      },
    ],
  },
])
