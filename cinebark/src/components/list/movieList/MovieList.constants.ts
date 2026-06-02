import type { AvailabilityType, GenreType } from "@/types"

export const genreOptions = [
  { label: 'Todos', value: '' },
  { label: 'Ação', value: 'ACTION' },
  { label: 'Aventura', value: 'ADVENTURE' },
  { label: 'Animação', value: 'ANIMATION' },
  { label: 'Biografia', value: 'BIOGRAPHY' },
  { label: 'Comédia', value: 'COMEDY' },
  { label: 'Crime', value: 'CRIME' },
  { label: 'Drama', value: 'DRAMA' },
  { label: 'Fantasia', value: 'FANTASY' },
  { label: 'Terror', value: 'HORROR' },
  { label: 'Romance', value: 'ROMANCE' },
  { label: 'Ficção científica', value: 'SCIENCE_FICTION' },
  { label: 'Suspense', value: 'THRILLER' },
  { label: 'Documentário', value: 'DOCUMENTARY' },
  { label: 'Família', value: 'FAMILY' },
  { label: 'História', value: 'HISTORY' },
  { label: 'Música', value: 'MUSIC' },
  { label: 'Musical', value: 'MUSICAL' },
  { label: 'Mistério', value: 'MYSTERY' },
  { label: 'Esporte', value: 'SPORT' },
  { label: 'Guerra', value: 'WAR' },
  { label: 'Oeste', value: 'WESTERN' },
] satisfies Array<{ label: string, value: GenreType | '' }>

export const ageClassificationOptions = [
  { label: 'Todos', value: '' },
  { label: 'Livre', value: '0' },
  { label: '10', value: '10' },
  { label: '12', value: '12' },
  { label: '14', value: '14' },
  { label: '16', value: '16' },
  { label: '18', value: '18' },
] satisfies Array<{ label: string, value: string }>

export const orderByOptions = [
  { label: 'Todos', value: '' },
  { label: 'Em cartaz', value: 'AVAILABLE' },
  { label: 'Pré-venda', value: 'PRE_SALE' },
  { label: 'Em breve', value: 'SOON' },
] satisfies Array<{ label: string, value: AvailabilityType | '' }>
