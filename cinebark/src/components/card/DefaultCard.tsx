import type { CardProps } from '@/types'
import { forwardRef } from 'react'

import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'

function formatDuration(minutes?: number) {
  if (!minutes) return ''

  const hours = Math.floor(minutes / 60)
  const mins = minutes % 60

  return `${hours}h ${mins}m`
}

function formatGenre(genre?: string) {
  if (!genre) return ''

  const genres: Record<string, string> = {
    SCIENCE_FICTION: 'Ficção científica',
    ACTION: 'Ação',
    ADVENTURE: 'Aventura',
    COMEDY: 'Comédia',
    DRAMA: 'Drama',
    ANIMATION: 'Animação',
  }

  return genres[genre] || genre
}

export const DefaultCard = forwardRef<HTMLDivElement, Omit<CardProps, 'type'>>(
  (
    {
      actions,
      backgroundImage,
      children,
      description,
      duration,
      genre,
      durationInMinutos,
      genres,
      minimumAge,
      posterUrl,
      rating,
      title,
      ...props
    },
    ref,
  ) => {
    return (
      <MuiCard
        ref={ref}
        {...props}
        sx={{
          width: '100%',
          borderRadius: '16px',
          background: '#070b12',
          border: '1px solid rgba(255,255,255,0.08)',
          boxShadow: '0 16px 40px rgba(0,0,0,0.45)',
          ...props.sx,
        }}
      >
        <Box
          sx={{
            position: 'relative',
            height: 315,
            backgroundImage: `url(${posterUrl || backgroundImage})`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
        >
          <Chip
            label={rating || minimumAge}
            size="small"
            sx={{
              position: 'absolute',
              top: 12,
              left: 12,
              bgcolor: '#5b3ab6',
              color: '#fff',
              fontWeight: 800,
            }}
          />

          <Box
            sx={{
              position: 'absolute',
              top: 12,
              right: 12,
              px: 1,
              py: 0.4,
              borderRadius: 999,
              bgcolor: 'rgba(0,0,0,0.65)',
              color: '#fff',
              fontSize: 12,
              fontWeight: 700,
            }}
          >
            {typeof duration === 'number' ? formatDuration(duration) : duration || formatDuration(durationInMinutos)}
          </Box>
        </Box>

        <CardContent sx={{ gap: 1, p: 2 }}>
          {title && (
            <Typography
              component="h3"
              sx={{
                color: '#fff',
                fontSize: 18,
                fontWeight: 800,
                lineHeight: 1.15,
              }}
            >
              {title}
            </Typography>
          )}

          {description && (
            <Typography
              sx={{
                color: 'rgba(255,255,255,0.55)',
                fontSize: 13,
                fontWeight: 600,
              }}
            >
              {formatGenre(String(genres || genre || ''))}
            </Typography>
          )}

          {children}

          {actions || (
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              sx={{
                mt: 1,
                height: 42,
                borderRadius: '10px',
              }}
            >
              Detalhes
            </Button>
          )}
        </CardContent>
      </MuiCard>
    )
  },
)

DefaultCard.displayName = 'DefaultCard'
