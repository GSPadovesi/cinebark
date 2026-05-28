import { api } from './api'

import type { Session, SessionPayload } from '@/types/sessions'

export async function getSessions() {
  const { data } = await api.get<Session[]>('/sessions')
  return data
}

export async function getSessionById(id: string) {
  const { data } = await api.get<Session>(`/sessions/${id}`)
  return data
}

export async function createSession(payload: SessionPayload) {
  const { data } = await api.post<Session>('/sessions', payload)
  return data
}

export async function updateSession(id: string, payload: SessionPayload) {
  const { data } = await api.patch<Session>(`/sessions/${id}`, payload)
  return data
}

export async function deleteSession(id: string) {
  await api.delete(`/sessions/${id}`)
}
