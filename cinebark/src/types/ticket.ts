import type { Session } from "./Session"

export type Ticket = {
  id: string
  session: Session
  customerName: string
  seatNumber: number
  price: number
  active: boolean
  purchasedAt: string
}

export type TicketPayload = {
  sessionId: string
  customerName: string
  seatNumber: number
  price: number
  active: boolean
}
