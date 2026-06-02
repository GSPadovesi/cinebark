
import { forwardRef } from 'react'
import { FeaturedCard } from './FeaturedCard'
import { MovieCard } from './MovieCard'
import type { CardProps } from '@/types'



export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ type = 'default', ...props }, ref) => {
    switch (type) {
      case 'movieFeatured':
        return <FeaturedCard ref={ref} {...props} />

      case 'movieCard':
      case 'default':
      default:
        return <MovieCard ref={ref} {...props} />
    }
  },
)

Card.displayName = 'Card'


