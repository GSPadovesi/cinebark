import { Navigate, Outlet, createBrowserRouter } from 'react-router-dom'
import { AuthPage, HomePage, MoviePage, SessionPage, RoomPage } from '@/app/routes'
import { AppLayout } from '@/components'

export const appRoutes = {
  auth: '/login',
  home: '/',
  movies: '/filmes',
  sessions: '/sessoes',
  rooms: '/salas',
} as const

const ProtectedRoute = () => {
  const token = cookieStore.get("token");

  if (!token) return <Navigate to="/login" replace />

  return <Outlet />
}

export const router = createBrowserRouter([
  {
    path: appRoutes.auth,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <AuthPage />
      },
    ],
  },
  {
    element: <ProtectedRoute />,
    children: [
      {
        element: <AppLayout />,
        children: [
          {
            path: appRoutes.home,
            children: [
              {
                index: true,
                element: <HomePage />,
              },
              {
                path: '*',
                element: <Navigate to={appRoutes.home} replace />,
              },
            ]
          },
          {
            path: appRoutes.movies,
            element: <AppLayout />,
            children: [
              {
                index: true,
                element: <MoviePage />
              },
            ],
          },
          {
            path: appRoutes.sessions,
            element: <AppLayout />,
            children: [
              {
                index: true,
                element: <SessionPage />
              },
            ],
          },
          {
            path: appRoutes.rooms,
            element: <AppLayout />,
            children: [
              {
                index: true,
                element: <RoomPage />
              },
            ],
          }
        ]
      }
    ]
  }
])
