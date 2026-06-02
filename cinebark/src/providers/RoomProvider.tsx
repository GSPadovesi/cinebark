import { RoomContext } from "@/context";
import { getRooms } from "@/services";
import type { RoomProviderProps, RoomFilters, Room } from "@/types";
import { useEffect, useState } from "react";

const minimumLoadingTime = 500

const initialFilters: RoomFilters = {
  type: '',
  resource: '',
  capacity: ''
}

export function RoomProvider({ children }: RoomProviderProps) {
  const [rooms, setRooms] = useState<Room[]>([])
  const [filters, setFilters] = useState<RoomFilters>(initialFilters)
  const [page, setPage] = useState(0)
  const [totalPages, setTotalPages] = useState(0)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState<boolean | null>(null)

  const setFilter = <K extends keyof RoomFilters>(
    name: K,
    value: RoomFilters[K],
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

    async function fetchRooms() {
      setLoading(true)
      setError(null)
      const startedAt = Date.now()
      try {
        const data = await getRooms(page, filters.type, filters.resource, filters.capacity, controller.signal)
        if (controller.signal.aborted) return

        setRooms(data.content)
        setTotalPages(data.totalPages)
      } catch (error) {
        if (controller.signal.aborted) return
        setError(true)
      } finally {
        const elapsedTime = Date.now() - startedAt
        const remainingTime = minimumLoadingTime - elapsedTime

        loadingTimeout = setTimeout(() => {
          setLoading(false)
        }, remainingTime)
      }
    }

    fetchRooms()

    return () => {
      controller.abort()
      if (loadingTimeout) {
        clearTimeout(loadingTimeout)
      }
    }
  }, [page, filters])


  return (
    <RoomContext.Provider value={{
      rooms,
      filters,
      page,
      totalPages,
      loading,
      error,
      setFilter,
      setPage,
      clearFilters
    }}>
      {children}
    </RoomContext.Provider>
  )
}

