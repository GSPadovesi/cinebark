import { Box, Container, Typography } from '@mui/material'
import { Outlet } from 'react-router-dom'

export function AppLayout() {
  return (
    <Box component="main" sx={{ minHeight: '100vh', bgcolor: 'background.default' }}>
      <Box
        component="header"
        sx={{
          borderBottom: '1px solid',
          borderColor: 'divider',
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="lg">
          <Box
            component="nav"
            sx={{
              alignItems: 'center',
              display: 'flex',
              justifyContent: 'space-between',
              minHeight: 72,
            }}
          >
            <Typography
              component="a"
              href="/"
              variant="h6"
              sx={{ color: 'text.primary', textDecoration: 'none' }}
            >
              CineBark
            </Typography>
          </Box>
        </Container>
      </Box>

      <Outlet />
    </Box>
  )
}
