import type { Resource, RoomType } from "@/types";

export const RoomTypeOptions = [
  { label: 'Todos', value: '' },
  { label: 'Padrão', value: 'STANDARD' },
  { label: 'Conforto', value: 'COMFORT' },
  { label: 'VIP', value: 'VIP' },
  { label: 'I-max', value: 'IMAX' },
  { label: 'Premium', value: 'PREMIUM' }
] satisfies Array<{ label: string, value: RoomType | '' }>

export const RoomResourceOptions = [
  { label: 'Todos', value: '' },
  { label: 'Assentos reclináveis', value: 'RECLINING_SEATS' },
  { label: 'Áudio atmos dolby', value: 'DOLBY_ATMOS_AUDIO' },
  { label: 'Ar-condicionado', value: 'AIR_CONDITIONING' },
  { label: 'Acessibilidade', value: 'ACCESSIBILITY' },
  { label: '4K', value: 'VIDEO_4K' }
] satisfies Array<{ label: string, value: Resource | '' }>

export const RoomCapacityOptions = [
  { label: 'Todos', value: '' },
  { label: '30 assentos', value: '30' },
  { label: '40 assentos', value: '40' },
  { label: '50 assentos', value: '50' },
  { label: '60 assentos', value: '60' },
  { label: '70 assentos', value: '70' }
] satisfies Array<{ label: string, value: string | '' }>