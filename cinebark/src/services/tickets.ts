import { api } from './api'

import type { Ticket, TicketPayload } from '@/types/ticket'

export async function getTickets() {
  const { data } = await api.get<Ticket[]>('/tickets')
  return data
}

export async function getTicketById(id: string) {
  const { data } = await api.get<Ticket>(`/tickets/${id}`)
  return data
}

export async function createTicket(payload: TicketPayload) {
  const { data } = await api.post<Ticket>('/tickets', payload)
  return data
}

export async function updateTicket(id: string, payload: TicketPayload) {
  const { data } = await api.patch<Ticket>(`/tickets/${id}`, payload)
  return data
}

export async function deleteTicket(id: string) {
  await api.delete(`/tickets/${id}`)
}
