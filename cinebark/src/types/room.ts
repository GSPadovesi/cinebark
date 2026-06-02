import type { ReactNode } from "react"

export type RoomType = 'STANDARD' | 'COMFORT' | 'VIP' | 'IMAX' | 'PREMIUM'
export type Resource = 'RECLINING_SEATS' | 'DOLBY_ATMOS_AUDIO' | 'AIR_CONDITIONING' | 'ACCESSIBILITY' | 'VIDEO_4K'

export type Room = {
  id: string
  number: number
  capacity: number
  roomType: RoomType
  description: string
  resources: Resource[]
  active: boolean
  createdAt: string
  updatedAt: string
}

export type RoomPayload = {
  number: number
  capacity: number
  roomType: RoomType
  description: string
  resources: Resource[]
  active: boolean
}

export type RoomPage = {
  content: Room[]
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
    sort: RoomPageSort
    unpaged: boolean
  }
  size: number
  sort: RoomPageSort
  totalElements: number
  totalPages: number
}

type RoomPageSort = {
  empty: boolean
  sorted: boolean
  unsorted: boolean
}

export type RoomFilters = {
  type: RoomType | ''
  resource: Resource | ''
  capacity: string | ''
}

export type RoomContextValue = {
  rooms: Room[]
  filters: RoomFilters
  page: number
  totalPages: number
  loading: boolean
  error: boolean | null
  setFilter: <K extends keyof RoomFilters>(
    name: K,
    value: RoomFilters[K],
  ) => void
  setPage: (page: number) => void
  clearFilters: () => void
}

export type RoomProviderProps = {
  children: ReactNode
}