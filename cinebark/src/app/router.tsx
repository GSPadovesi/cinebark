import { Navigate, createBrowserRouter } from 'react-router-dom'
import { HomePage, MoviePage, SessionPage, RoomPage } from '@/app/routes'
import { AppLayout } from '@/components'

export const appRoutes = {
  home: '/',
  movies: '/filmes',
  sessions: '/sessoes',
  rooms: '/salas',
  teste: '/filmes/teste'
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
  },
  {
    path: appRoutes.teste,
    element: <AppLayout />,
    children: [
      {
        index: true,
        element: <h1>Olá, mundo</h1>
      }
    ]
  }
])
