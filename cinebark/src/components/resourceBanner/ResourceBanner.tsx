import { forwardRef } from 'react';
import { maximumConfort, audio, _4k } from '../../assets';
import { Typography } from '@mui/material';
import MuiCard from '@mui/material/Box';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import * as S from './ResourceBanner.styles';

const content = [
  { icon: maximumConfort, title: 'Máximo conforto', description: 'Poltronas espaçosas e reclináveis com apoio para a cabeça, braço e pernas.' },
  { icon: audio, title: 'Som imersivo', description: 'Sistema de áudio de alta performance para cada detalhe.' },
  { icon: _4k, title: 'Imagem de cinema', description: 'Projetores 4k com resolução ultra HD.' }
]

export const ResourceBanner = forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  (_, ref) => {
    return (
      <MuiCard ref={ref} sx={S.SXResourceBanner}>
        <Box sx={S.SXResourceBannerContent}>
          <Grid container spacing={3} sx={S.SXGrid}>
            {content.map((item, index) => (
              <Grid key={index} size={{ xs: 12, md: 4 }} sx={S.SXGridItem}>
                <Box sx={S.SXIconContent}>
                  <img src={item.icon} alt={item.title} />
                </Box>
                <Box sx={S.SXContent}>
                  <Typography variant="h6" component="h3" gutterBottom sx={S.titleSx}>
                    {item.title}
                  </Typography>
                  <Typography component="p" sx={S.subtitleSx}>
                    {item.description}
                  </Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Box>
      </MuiCard>
    )
  }
);
