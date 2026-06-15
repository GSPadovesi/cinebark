import { type CardProps as MuiCardProps } from '@mui/material/Card'
import type { ReactNode } from 'react'
import type { GenreType } from './Movie'
import type { RoomType, Resource } from './Room'

export type CardType = 'default' | 'movieCard' | 'movieFeatured' | 'sessionCard' | 'roomCard'

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
  genres?: GenreType[] | string | GenreType
  number?: number,
  capacity?: number,
  roomType?: RoomType[] | string | RoomType
  resources?: Resource[] | Resource
  active?: boolean
  
}
