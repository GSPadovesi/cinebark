import { ThemeProvider } from '@mui/material'
import { GlobalStyle, theme } from '@/theme'
import type { ReactNode } from 'react'
import { MovieProvider } from './MovieProvider'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <MovieProvider>
        {children}
      </MovieProvider>
    </ThemeProvider>
  )
}
