import { ThemeProvider } from '@mui/material'
import { GlobalStyle, theme } from '@/theme'
import type { ReactNode } from 'react'

type AppProvidersProps = {
  children: ReactNode
}

export function AppProviders({ children }: AppProvidersProps) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {children}
    </ThemeProvider>
  )
}
