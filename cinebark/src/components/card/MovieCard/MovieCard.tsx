import type { CardProps } from '@/types'
import { forwardRef } from 'react'
import { formatDuration, formatGenreLabel, formatRating } from '@/utils'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import Chip from '@mui/material/Chip'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import * as S from './MovieCard.styles'

export const MovieCard = forwardRef<HTMLDivElement, Omit<CardProps, 'type'>>(
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
    const imageUrl = posterUrl || backgroundImage
    const durationLabel = typeof duration === 'number' ? formatDuration(duration) : duration || formatDuration(durationInMinutos)
    const ratingLabel = formatRating(rating ?? minimumAge)
    const genreLabel = formatGenreLabel(genres, genre)

    return (
      <MuiCard
        ref={ref}
        {...props}
        sx={[
          S.cardSx,
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      >
        <Box sx={S.posterSx(imageUrl)}>
          {ratingLabel && (
            <Chip
              label={ratingLabel}
              size="small"
              sx={S.ratingChipSx}
            />
          )}

          {durationLabel && (
            <Box sx={S.durationSx}>
              {durationLabel}
            </Box>
          )}
        </Box>

        <CardContent sx={S.contentSx}>
          {title && (
            <Typography
              component="h3"
              sx={S.titleSx}
            >
              {title}
            </Typography>
          )}

          {genreLabel && (
            <Typography
              sx={S.genreSx}
            >
              {genreLabel}
            </Typography>
          )}

          {description && (
            <Typography
              sx={S.descriptionSx}
            >
              {description}
            </Typography>
          )}

          {children}

          {actions || (
            <Button
              fullWidth
              variant="outlined"
              color="primary"
              sx={S.sessionsButtonSx}
            >
              Sessões
            </Button>
          )}
        </CardContent>
      </MuiCard>
    )
  },
)

MovieCard.displayName = 'MovieCard'
