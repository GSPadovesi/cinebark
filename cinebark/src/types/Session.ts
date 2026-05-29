import type { Movie } from './Movie'
import type { Room } from './Room'

export type Session = {
  id: string
  movie: Movie
  room: Room
  startTime: string
  price: number
  active: boolean
  createdAt: string
  updateAt: string
}

export type SessionPayload = {
  movieId: string
  roomId: string
  startTime: string
  price: number
  active: boolean
}
