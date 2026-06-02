import { type CardProps as MuiCardProps } from '@mui/material/Card'
import type { ReactNode } from 'react'
import type { GenreType } from './Movie'

export type CardType = 'default' | 'movieCard' | 'movieFeatured' | 'sessionCard'

export type CardProps = Omit<MuiCardProps, 'title'> & {
  type?: CardType
  title?: string | ReactNode
  description?: string | ReactNode
  backgroundImage?: string
  posterUrl?: string
  badgeLabel?: string
  actions?: ReactNode
  duration?: string | number
  durationInMinutos?: number
  rating?: string | number
  minimumAge?: number
  genre?: GenreType
  genres?: string[] | string | GenreType
}
