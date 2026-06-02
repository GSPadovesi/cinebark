import type { Room, RoomPage, RoomPayload } from '@/types/Room'
import { api } from '../config/Api'


export async function getRooms(page: number, type: string, resource: string, capacity: string, signal?: AbortSignal) {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  if (type.trim()) params.append('type', type);
  if (resource.trim()) params.append('resource', resource);
  if (capacity.trim()) params.append('capacity', capacity);
  const { data } = await api.get<RoomPage>(`/rooms?${params.toString()}`, { 
    method: 'GET',
    signal ,
    headers: {
      'Content-Type': 'application/json',
    }
  })

  if(!data) {
    throw new Error('No rooms found')
  }

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
