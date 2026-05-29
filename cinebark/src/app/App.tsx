import { RouterProvider } from 'react-router-dom'
import { AppProviders } from '@/providers'
import { router } from './router'
import { Header } from '@/components'

export function App() {
  return (
    <AppProviders>
      <Header />
      <RouterProvider router={router} />
    </AppProviders>
  )
}
