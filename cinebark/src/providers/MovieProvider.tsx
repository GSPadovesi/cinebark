import { createContext, useEffect, useState } from 'react'
import type { Movie, MovieContextValue, MovieFilters, MovieProviderProps } from '@/types'
import { getMovies } from '@/services'
import { MovieContext } from '@/context'


const minimumLoadingTime = 500

const initialFilters: MovieFilters = {
  search: '',
  genre: '',
  availability: '',
  minimumAge: '',
}

export function MovieProvider({ children }: MovieProviderProps) {
  const [movies, setMovies] = useState<Movie[]>([])
  const [filters, setFilters] = useState<MovieFilters>(initialFilters)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  const setFilter = <K extends keyof MovieFilters>(
    name: K,
    value: MovieFilters[K],
  ) => {
    setPage(0)
    setFilters((currentFilters) => ({
      ...currentFilters,
      [name]: value,
    }))
  }

  const clearFilters = () => {
    setPage(0)
    setFilters(initialFilters)
  }

  useEffect(() => {
    const controller = new AbortController()
    let loadingTimeout: ReturnType<typeof setTimeout> | undefined

    async function fetchMovies() {
      setLoading(true)
      setError(null)
      const startedAt = Date.now()

      try {
        const data = await getMovies(
          page,
          filters.search,
          filters.genre,
          filters.availability,
          filters.minimumAge,
          controller.signal
        )

        if (controller.signal.aborted) return

        setMovies(data.content)
        setTotalPages(data.totalPages)
      } catch (err) {
        if (!controller.signal.aborted) {
          setError(true)
        }
      } finally {
        if (controller.signal.aborted) return

        const elapsedTime = Date.now() - startedAt
        const remainingTime = Math.max(minimumLoadingTime - elapsedTime, 0)

        loadingTimeout = setTimeout(() => {
          setLoading(false)
        }, remainingTime)
      }
    }

    fetchMovies()

    return () => {
      controller.abort()
      clearTimeout(loadingTimeout)
    }
  }, [filters, page])


  return (
    <MovieContext.Provider
      value={{
        movies,
        filters,
        page,
        totalPages,
        loading,
        error,
        setFilter,
        setPage,
        clearFilters
      }}
    >
      {children}
    </MovieContext.Provider>
  )
}
