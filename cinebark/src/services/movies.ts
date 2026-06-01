import type {
  Movie,
  MoviePayload,
  MoviesPage,
} from '@/types/Movie'
import { api } from '../config/Api'

export async function getMovies(page: number, search: string, genre: string, classification: string, minimumAge: string, signal?: AbortSignal) {
  const params = new URLSearchParams();
  params.append('page', page.toString());
  if (search.trim()) params.append('search', search);
  if (genre.trim()) params.append('genre', genre);
  if (classification.trim()) params.append('orderBy', classification);
  if (minimumAge.trim()) params.append('minimumAge', minimumAge);

  const { data } = await api.get<MoviesPage>(`/movies?${params.toString()}`, {
    method: 'GET',
    signal,
    headers: {
      'Content-Type': 'application/json',
    },
  })

  if (!data) {
    throw new Error('No movies found')
  }

  return data
}

export async function getMovieById(id: string) {
  const { data } = await api.get<Movie>(`/movies/${id}`)
  return data
}

export async function getTenMovies() {
  const { data } = await api.get<Movie[]>('/movies/home')
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
