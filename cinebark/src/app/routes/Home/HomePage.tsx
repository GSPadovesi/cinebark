import { Box, Button, Container, Typography } from '@mui/material'

export function HomePage() {
  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          alignItems: { xs: 'flex-start', md: 'center' },
          display: 'flex',
          flexDirection: { xs: 'column', md: 'row' },
          gap: 6,
          justifyContent: 'space-between',
          minHeight: 'calc(100vh - 72px)',
          py: { xs: 6, md: 10 },
        }}
      >
        <Box sx={{ display: 'flex', flexDirection: 'column', gap: 3, maxWidth: 620 }}>
          <Typography component="h1" variant="h2">
            CineBark
          </Typography>
          <Typography component="p" color="text.secondary" sx={{ fontSize: 20 }}>
            Base inicial configurada para evoluir o app com rotas, tema, servicos HTTP e organizacao por modulos.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2 }}>
            <Button href="/#catalogo" size="large" variant="contained">
              Ver catalogo
            </Button>
            <Button href="/#configuracao" size="large" variant="outlined">
              Configuracao inicial
            </Button>
          </Box>
        </Box>

        <Box
          id="configuracao"
          sx={{
            width: '100%',
            maxWidth: 420,
            border: '1px solid',
            borderColor: 'divider',
            borderRadius: 2,
            bgcolor: 'background.paper',
            p: 3,
          }}
        >
          <Typography component="h2" variant="h6">
            Pronto para desenvolver
          </Typography>
          <Typography color="text.secondary" sx={{ mt: 1 }}>
            Edite as paginas em <code>src/app/routes</code>, rotas em <code>src/app/router.tsx</code> e chamadas de API
            em <code>src/services/api.ts</code>.
          </Typography>
        </Box>
      </Box>
    </Container>
  )
}
