export type RoomType = 'TWO_D' | 'THREE_D' | 'IMAX' | 'VIP'

export type Room = {
  id: string
  name: string
  capacity: number
  roomType: RoomType
  active: boolean
  createdAt: string
  updatedAt: string
}

export type RoomPayload = {
  name: string
  capacity: number
  roomType: RoomType
  active: boolean
}
