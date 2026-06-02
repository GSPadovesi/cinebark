import { forwardRef, useCallback, type ChangeEvent } from 'react'
import { Box } from '@mui/material'
import { Button, Input } from '@/components'
import { useRooms } from '@/hooks'
import { RoomTypeOptions, RoomResourceOptions, RoomCapacityOptions } from './RoomList.constants'
import type { Resource, RoomType } from '@/types'
import * as S from './RoomList.styles'

export const RoomList = forwardRef<HTMLDivElement>((props, ref) => {
  const { rooms, filters, setFilter, clearFilters } = useRooms();

  const onTypeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter('type', e.target.value as RoomType | '');
  }, [setFilter])

  const onResourceChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter('resource', e.target.value as Resource | '')
  }, [setFilter])

  const onCapacityChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    setFilter('capacity', e.target.value as string | '');
  }, [setFilter])

  console.log(rooms)

  return (
    <Box ref={ref} {...props} sx={S.SXRoomList}>
      <h1>Olá, mundo</h1>
      <Box sx={S.SXRoomListFilters}>
        <Input type="select" label="Tipo da sala" value={filters.type} onChange={onTypeChange} options={RoomTypeOptions} sx={{ '@media (max-width: 768px)': { width: '100%' }, width: '300px' }} />
        <Input type="select" label="Recursos da sala" value={filters.resource} onChange={onResourceChange} options={RoomResourceOptions} sx={{ '@media (max-width: 768px)': { width: '100%' }, width: '300px' }} />
        <Input type="select" label="Capacidade da sala" value={filters.capacity} onChange={onCapacityChange} options={RoomCapacityOptions} sx={{ '@media (max-width: 768px)': { width: '100%' }, width: '300px' }} />
        <Button type="button" variant="outlined" onClick={clearFilters} sx={{ '@media (min-width: 768px)': { alignSelf: 'flex-end' }, '@media (max-width: 768px)': { width: '100%' } }}>
          Limpar filtros
        </Button>
      </Box>
    </Box >
  )
})

RoomList.displayName = 'RoomList'