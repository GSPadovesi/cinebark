
import { forwardRef } from 'react'
import type { ListProps } from '@/types'
import { MovieList } from './movieList'
import { RoomList } from './roomList/RoomList'



export const List = forwardRef<HTMLDivElement, ListProps>(
  ({ type = 'default', ...props }, ref) => {
    switch (type) {
      case 'movieList':
        return <MovieList ref={ref} {...props} />
      case 'roomList':
        return <RoomList ref={ref} {...props} />
      case 'default':
      default:
        return <h1>Lista de salas</h1>
    }
  },
)

List.displayName = 'List'


