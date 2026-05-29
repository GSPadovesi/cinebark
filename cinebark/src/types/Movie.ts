
export type GenreType =
  | 'ACTION'
  | 'ADVENTURE'
  | 'ANIMATION'
  | 'BIOGRAPHY'
  | 'COMEDY'
  | 'CRIME'
  | 'DOCUMENTARY'
  | 'DRAMA'
  | 'FAMILY'
  | 'FANTASY'
  | 'HISTORY'
  | 'HORROR'
  | 'MUSIC'
  | 'MUSICAL'
  | 'MYSTERY'
  | 'ROMANCE'
  | 'SCIENCE_FICTION'
  | 'SPORT'
  | 'THRILLER'
  | 'WAR'
  | 'WESTERN'

export type Movie = {
  id: string
  title: string
  description: string
  synopsis: string
  genres: GenreType[]
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
  synopsis: string
  genres: GenreType[]
  durationInMinutos: number
  minimumAge: number
  posterUrl: string
  availableAt: string
  active: boolean
}
