import { api } from './api'

import type { Movie, MoviePayload } from '@/types/movies'

export async function getMovies() {
  const { data } = await api.get<Movie[]>('/movies')
  return data
}

export async function getMovieById(id: string) {
  const { data } = await api.get<Movie>(`/movies/${id}`)
  return data
}

export async function createMovie(payload: MoviePayload) {
  const { data } = await api.post<Movie>('/movies', payload)
  return data
}

export async function updateMovie(id: string, payload: MoviePayload) {
  const { data } = await api.patch<Movie>(`/movies/${id}`, payload)
  return data
}

export async function deleteMovie(id: string) {
  await api.delete(`/movies/${id}`)
}
