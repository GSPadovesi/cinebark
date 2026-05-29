import { forwardRef } from 'react'
import type { CardProps } from '@/types'

import Box from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'
import * as S from './FeaturedCard.styles'

export const FeaturedCard = forwardRef<HTMLDivElement, Omit<CardProps, 'type'>>(
  (
    {
      actions,
      backgroundImage,
      badgeLabel = 'Em destaque',
      children,
      description,
      duration = '2h 46m',
      genres = 'Acao, Aventura, Ficcao',
      rating = '12',
      title,
      ...props
    },
    ref,
  ) => {
    const genreLabel = Array.isArray(genres) ? genres.join(', ') : genres

    return (
      <MuiCard
        ref={ref}
        {...props}
        sx={[
          S.cardSx(backgroundImage),
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      >
        <CardContent sx={S.contentSx}>
          <Typography
            sx={S.badgeSx}
          >
            {badgeLabel}
          </Typography>

          {title && (
            <Typography
              component="h2"
              sx={S.titleSx}
            >
              {title}
            </Typography>
          )}

          {description && (
            <Typography
              sx={S.descriptionSx}
            >
              {description}
            </Typography>
          )}

          <Box sx={S.metaSx}>
            <Typography
              sx={S.durationSx}
            >
              {duration}
            </Typography>

            <Chip
              label={rating}
              size="small"
              sx={S.ratingChipSx}
            />

            <Chip
              label={genreLabel}
              size="small"
              sx={S.genreChipSx}
            />
          </Box>

          {children}

          {actions && (
            <Box sx={S.actionsSx}>
              {actions}
            </Box>
          )}
        </CardContent>
      </MuiCard>
    )
  },
)

FeaturedCard.displayName = 'FeaturedCard'
