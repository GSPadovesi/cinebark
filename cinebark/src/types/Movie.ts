import type { ReactNode } from 'react'

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

export type ClassificationType = 'AVAILABLE' | 'PRE_ORDER' | 'SOON'

export type Movie = {
  id: string
  title: string
  description: string
  synopsis: string
  genres: GenreType[]
  durationInMinutos: number
  minimumAge: number
  posterURL: string
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
  posterURL: string
  availableAt: string
  active: boolean
}

export type MoviesPage = {
  content: Movie[]
  empty: boolean
  first: boolean
  last: boolean
  number: number
  numberOfElements: number
  pageable: {
    offset: number
    pageNumber: number
    pageSize: number
    paged: boolean
    sort: MoviesPageSort
    unpaged: boolean
  }
  size: number
  sort: MoviesPageSort
  totalElements: number
  totalPages: number
}

type MoviesPageSort = {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}


export type MovieFilters = {
  search: string
  genre: GenreType | ''
  orderBy: ClassificationType | ''
  minimumAge: string
}



export type MovieContextValue = {
  movies: Movie[]
  filters: MovieFilters
  page: number
  totalPages: number
  loading: boolean
  error: boolean | null
  setFilter: <K extends keyof MovieFilters>(
    name: K,
    value: MovieFilters[K],
  ) => void
  setPage: (page: number) => void
  clearFilters: () => void
}

export type MovieProviderProps = {
  children: ReactNode
}

  // filters: MovieFilters
  // loading: boolean
  // error: string | null
  // setFilter: <K extends keyof MovieFilters>(
  //   name: K,
  //   value: MovieFilters[K],
  // ) => void
  // clearFilters: () => void
