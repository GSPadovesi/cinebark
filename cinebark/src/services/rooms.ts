import { api } from './api'

import type { Room, RoomPayload } from '@/types/room'

export async function getRooms() {
  const { data } = await api.get<Room[]>('/rooms')
  return data
}

export async function getRoomById(id: string) {
  const { data } = await api.get<Room>(`/rooms/${id}`)
  return data
}

export async function createRoom(payload: RoomPayload) {
  const { data } = await api.post<Room>('/rooms', payload)
  return data
}

export async function updateRoom(id: string, payload: RoomPayload) {
  const { data } = await api.patch<Room>(`/rooms/${id}`, payload)
  return data
}

export async function deleteRoom(id: string) {
  await api.delete(`/rooms/${id}`)
}
