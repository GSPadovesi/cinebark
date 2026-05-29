
import { forwardRef } from 'react'
import { FeaturedCard } from './FeaturedCard'
import { DefaultCard } from './DefaultCard'
import type { CardProps } from '@/types'



export const Card = forwardRef<HTMLDivElement, CardProps>(
  ({ type = 'default', ...props }, ref) => {
    switch (type) {
      case 'featured':
        return <FeaturedCard ref={ref} {...props} />

      case 'normal':
      case 'default':
      default:
        return <DefaultCard ref={ref} {...props} />
    }
  },
)

Card.displayName = 'Card'



