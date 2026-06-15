import { forwardRef, useCallback, type ChangeEvent } from 'react'
import { Box, Pagination, Typography } from '@mui/material'
import { Button, Card, Input } from '@/components'
import { useRooms } from '@/hooks'
import { RoomTypeOptions, RoomResourceOptions, RoomCapacityOptions } from './RoomList.constants'
import type { Resource, RoomType } from '@/types'
import * as S from './RoomList.styles'

export const RoomList = forwardRef<HTMLDivElement>((props, ref) => {
  const { rooms, filters, page, totalPages, loading, error, setFilter, setPage, clearFilters } = useRooms();

  const onTypeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter('type', e.target.value as RoomType | '');
  }, [setFilter])

  const onResourceChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter('resource', e.target.value as Resource | '')
  }, [setFilter])

  const onCapacityChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter('capacity', e.target.value as string | '');
  }, [setFilter])

  return (
    <Box ref={ref} {...props} sx={S.SXRoomList}>
      <Box sx={S.SXRoomListFilters}>
        <Input type="select" label="Tipo da sala" value={filters.type} onChange={onTypeChange} options={RoomTypeOptions} sx={{ '@media (max-width: 768px)': { width: '100%' }, width: '300px' }} />
        <Input type="select" label="Recursos da sala" value={filters.resource} onChange={onResourceChange} options={RoomResourceOptions} sx={{ '@media (max-width: 768px)': { width: '100%' }, width: '300px' }} />
        <Input type="select" label="Capacidade da sala" value={filters.capacity} onChange={onCapacityChange} options={RoomCapacityOptions} sx={{ '@media (max-width: 768px)': { width: '100%' }, width: '300px' }} />
        <Button type="button" variant="outlined" onClick={clearFilters} sx={{ '@media (min-width: 768px)': { alignSelf: 'flex-end' }, '@media (max-width: 768px)': { width: '100%' } }}>
          Limpar filtros
        </Button>
      </Box>
      <Box sx={S.SXContainerList}>
        {loading ? (
          <h1>Carregando...</h1>
        ) : error ? (
          <h1>Erro</h1>
        ) : rooms.map(room => (
          <Card
            type="roomCard"
            description={room.description}
            posterUrl={room.posterURL}
            number={room.number}
            capacity={room.capacity}
            roomType={room.roomType}
            resources={room.resources}
            active={room.active}
          />
        ))}
      </Box>
      {!loading && !error && rooms.length > 0 && <Box sx={S.SXContainerOptions}>
        <Pagination
          count={totalPages}
          page={page + 1}
          color="primary"
          onChange={(_, value) => setPage(value - 1)}
          sx={S.SXPagination}
        />
        <Typography variant="body1" color="inherit">{`Página ${page + 1} de ${totalPages}`}</Typography>
      </Box>}
    </Box >
  )
})

RoomList.displayName = 'RoomList'
