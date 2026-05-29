
export type GenreType =
  | 'ACTION'
  | 'ADVENTURE'
  | 'ANIMATION'
  | 'COMEDY'
  | 'DRAMA'
  | 'FANTASY'
  | 'HORROR'
  | 'ROMANCE'
  | 'SCIENCE_FICTION'
  | 'THRILLER'

export type Movie = {
  id: string
  title: string
  description: string
  genre: GenreType
  durationInMinutos: number
  minimumAge: number
  posterUrl: string
  availableAt: string
  active: boolean
  createdAt: string
  updateAt: string
}

export type MoviePayload = {
  title: string
  description: string
  genre: GenreType
  durationInMinutos: number
  minimumAge: number
  posterUrl: string
  availableAt: string
  active: boolean
}
