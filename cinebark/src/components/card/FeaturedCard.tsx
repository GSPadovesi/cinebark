import { forwardRef } from 'react'
import type { CardProps } from '@/types'

import Box from '@mui/material/Box'
import MuiCard from '@mui/material/Card'
import CardContent from '@mui/material/CardContent'
import Typography from '@mui/material/Typography'
import Chip from '@mui/material/Chip'

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
          {
            minHeight: 500,
            backgroundImage: backgroundImage
              ? `url(${backgroundImage})`
              : 'linear-gradient(145deg, #050505, #1f1405)',
          },
          ...(Array.isArray(props.sx) ? props.sx : [props.sx]),
        ]}
      >
        <CardContent
          sx={{
            position: 'relative',
            zIndex: 1,
            width: { xs: '100%', md: '44%' },
            height: 500,
            p: { xs: 2.5, md: 5 },
            alignItems: 'flex-start',
            justifyContent: 'center',
            gap: 4,
          }}
        >
          <Typography variant="featuredCardBadge">
            {badgeLabel}
          </Typography>

          {title && (
            <Typography component="h2" variant="featuredCardTitle">
              {title}
            </Typography>
          )}

          {description && (
            <Typography variant="featuredCardDescription">
              {description}
            </Typography>
          )}

          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              gap: 1,
              flexWrap: 'wrap',
            }}
          >
            <Typography variant="featuredCardMeta">
              {duration}
            </Typography>

            <Chip
              label={rating}
              size="small"
              sx={{
                bgcolor: '#4b2ca3',
                color: '#fff',
              }}
            />

            <Chip
              label={genreLabel}
              size="small"
              sx={{
                bgcolor: 'rgba(255,255,255,0.08)',
                color: 'rgba(255,255,255,0.75)',
              }}
            />
          </Box>

          {children}

          {actions && (
            <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1 }}>
              {actions}
            </Box>
          )}
        </CardContent>
      </MuiCard>
    )
  },
)

FeaturedCard.displayName = 'FeaturedCard'