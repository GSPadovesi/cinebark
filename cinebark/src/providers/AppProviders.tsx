import { ThemeProvider } from '@mui/material'
import { GlobalStyle, theme } from '@/theme'
import type { ReactNode } from 'react'
import { MovieProvider } from './MovieProvider'
import { RoomProvider } from './RoomProvider'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MovieProvider>
        <RoomProvider>
          {children}
        </RoomProvider>
      </MovieProvider>
    </ThemeProvider>
  )
}
