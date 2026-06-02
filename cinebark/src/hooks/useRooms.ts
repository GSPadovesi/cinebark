import {  RoomContext } from '@/context'
import { useContext } from 'react'


export function useRooms() {
  const context = useContext(RoomContext)

  if (!context) {
    throw new Error('useRooms must be used within a MovieProvider')
  }

  return context
}
