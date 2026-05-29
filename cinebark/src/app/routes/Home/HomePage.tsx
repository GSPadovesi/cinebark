import { Box, Typography } from '@mui/material'
import { heroImage, film, film2 } from '@/assets'
import { Button, Card, FeaturedSlider, Input } from '@/components'
import type { Movie } from '@/types'
import * as S from './HomePage.styles'
import React, { useCallback, useState } from 'react'
import { uploadImage } from '@/services'

const featuredMovies = [
  {
    id: '123-456-789',
    title: 'Duna',
    description: 'Paul Atreides se une aos Fremen em uma jornada por poder, destino e sobrevivencia.',
    backgroundImage: film,
    availableAt: '2026-06-06',
    duration: '2h 46m',
    rating: '14',
    genres: ['Aventura', 'Drama', 'Ficcao'],
  },
  {
    id: '101-121-314',
    title: 'Bailarina: Do Universo de John Wick',
    description: 'Treinada nas tradições assassinas dos Ruska Roma, Eve Macarro enfrenta um exército de assassinos em busca de vingança contra os responsáveis pela morte de seu pai.',
    backgroundImage: film2,
    availableAt: '2026-06-13',
    duration: '2h 5m',
    rating: '18',
    genres: ['Acao', 'Aventura'],
  },
  {
    id: '151-617-181',
    title: 'Divertida mente',
    description: 'Novas emocoes chegam para transformar a rotina de Riley.',
    backgroundImage: heroImage,
    availableAt: '2026-06-20',
    duration: '1h 36m',
    rating: 'L',
    genres: ['Animacao', 'Familia', 'Comedia'],
  },
]

export const normalMovies = [
  {
    id: 'movie-001',
    title: 'O Ultimo Portal',
    description: 'Uma cientista encontra uma passagem instavel para outra dimensao.',
    genre: 'SCIENCE_FICTION',
    durationInMinutos: 132,
    minimumAge: 12,
    posterUrl: heroImage,
    availableAt: '2026-06-07',
    active: true,
    createdAt: '2026-05-28T00:00:00.000Z',
    updateAt: '2026-05-28T00:00:00.000Z',
    synopsis: ''
  },
  {
    id: 'movie-002',
    title: 'Noite em Neon',
    description: 'Um detetive investiga uma serie de roubos em uma cidade futurista.',
    genre: 'THRILLER',
    durationInMinutos: 118,
    minimumAge: 16,
    posterUrl: film,
    availableAt: '2026-06-08',
    active: true,
    createdAt: '2026-05-28T00:00:00.000Z',
    updateAt: '2026-05-28T00:00:00.000Z',
    synopsis: ''
  },
  {
    id: 'movie-003',
    title: 'Risadas no Set',
    description: 'Uma equipe de cinema tenta terminar uma comedia cheia de imprevistos.',
    genre: 'COMEDY',
    durationInMinutos: 96,
    minimumAge: 10,
    posterUrl: film2,
    availableAt: '2026-06-09',
    active: true,
    createdAt: '2026-05-28T00:00:00.000Z',
    updateAt: '2026-05-28T00:00:00.000Z',
    synopsis: ''
  },
  {
    id: 'movie-004',
    title: 'Vale dos Ecos',
    description: 'Dois irmaos retornam a cidade natal para desvendar um segredo antigo.',
    genre: 'DRAMA',
    durationInMinutos: 124,
    minimumAge: 14,
    posterUrl: heroImage,
    availableAt: '2026-06-10',
    active: true,
    createdAt: '2026-05-28T00:00:00.000Z',
    updateAt: '2026-05-28T00:00:00.000Z',
    synopsis: ''
  },
  {
    id: 'movie-005',
    title: 'Corrida Solar',
    description: 'Pilotos atravessam desertos em uma competicao movida a energia solar.',
    genre: 'ACTION',
    durationInMinutos: 110,
    minimumAge: 12,
    posterUrl: film,
    availableAt: '2026-06-11',
    active: true,
    createdAt: '2026-05-28T00:00:00.000Z',
    updateAt: '2026-05-28T00:00:00.000Z',
    synopsis: ''
  },
  {
    id: 'movie-006',
    title: 'A Casa da Colina',
    description: 'Uma familia descobre que sua nova casa guarda memorias sombrias.',
    genre: 'HORROR',
    durationInMinutos: 104,
    minimumAge: 16,
    posterUrl: film2,
    availableAt: '2026-06-12',
    active: true,
    createdAt: '2026-05-28T00:00:00.000Z',
    updateAt: '2026-05-28T00:00:00.000Z',
    synopsis: ''
  },
  {
    id: 'movie-007',
    title: 'Mapa das Estrelas',
    description: 'Uma jovem navegadora embarca em uma aventura para salvar seu povo.',
    genre: 'ADVENTURE',
    durationInMinutos: 127,
    minimumAge: 10,
    posterUrl: heroImage,
    availableAt: '2026-06-14',
    active: true,
    createdAt: '2026-05-28T00:00:00.000Z',
    updateAt: '2026-05-28T00:00:00.000Z',
    synopsis: ''
  },
  {
    id: 'movie-008',
    title: 'Reino de Vidro',
    description: 'Uma princesa exilada tenta recuperar um reino protegido por magia.',
    genre: 'FANTASY',
    durationInMinutos: 139,
    minimumAge: 12,
    posterUrl: film,
    availableAt: '2026-06-15',
    active: true,
    createdAt: '2026-05-28T00:00:00.000Z',
    updateAt: '2026-05-28T00:00:00.000Z',
    synopsis: ''
  },
  {
    id: 'movie-009',
    title: 'Primeiro Encontro',
    description: 'Dois desconhecidos se reencontram em diferentes fases da vida.',
    genre: 'ROMANCE',
    durationInMinutos: 101,
    minimumAge: 12,
    posterUrl: film2,
    availableAt: '2026-06-16',
    active: true,
    createdAt: '2026-05-28T00:00:00.000Z',
    updateAt: '2026-05-28T00:00:00.000Z',
    synopsis: ''
  },
  {
    id: 'movie-010',
    title: 'Pequenos Inventores',
    description: 'Criancas constroem uma maquina improvavel para vencer uma feira escolar.',
    genre: 'ANIMATION',
    durationInMinutos: 89,
    minimumAge: 0,
    posterUrl: heroImage,
    availableAt: '2026-06-17',
    active: true,
    createdAt: '2026-05-28T00:00:00.000Z',
    updateAt: '2026-05-28T00:00:00.000Z',
    synopsis: ''
  },
] satisfies Movie[]

export function HomePage() {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('Todos')
  const [classification, setClassification] = useState('Livre')
  const [orderBy, setOrderBy] = useState('Em cartaz')
  const [file, setFile] = useState<File | null>(null)

  const clearFilters = () => {
    setSearch('')
    setGenre('Todos')
    setClassification('Livre')
    setOrderBy('Em cartaz')
  }

  const handleUploadFile = useCallback(() => {
    if (file) {
      uploadImage(file)
        .then((response) => {
          console.log('Upload bem-sucedido:', response)
        })
        .catch((error) => {
          console.error('Erro no upload:', error)
        })
    }
  }, [file])

  return (
    <S.HomePage>
      <S.HomePageContent>
        <FeaturedSlider
          items={featuredMovies}
          getKey={(movie) => movie.id}
          renderItem={(movie) => (
            <Card
              type="featured"
              title={movie.title}
              description={movie.description}
              backgroundImage={movie.backgroundImage}
              duration={movie.duration}
              rating={movie.rating}
              genres={movie.genres}
            >
              <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 1.5, mt: 1 }}>
                <Button href="/#catalogo" size="large" variant="contained">
                  Ver sessoes
                </Button>
              </Box>
            </Card>
          )}
        />
        <S.HomeContentFilters>
          <Input type="text" label="Pesquisar" placeholder="Digite o nome do filme" value={search} onChange={(event) => setSearch(event.target.value)} />
          <Input type="select" label="Genero" value={genre} onChange={(e) => setGenre(e.target.value)} options={['Todos', 'Acao', 'Aventura', 'Animacao', 'Comedia', 'Drama', 'Ficcao']} sx={{ '@media (max-width: 768px)': { width: '100%' } }} />
          <Input type="select" label="Classificacao" value={classification} onChange={(e) => setClassification(e.target.value)} options={['Livre', '10', '12', '14', '16', '18']} sx={{ '@media (max-width: 768px)': { width: '100%' } }} />
          <Input type="select" label="Duracao" value={orderBy} onChange={(e) => setOrderBy(e.target.value)} options={['Em cartaz', 'Em breve', 'premier']} sx={{ '@media (max-width: 768px)': { width: '100%' } }} />
          <Button type="button" variant="outlined" sx={{ alignSelf: 'normal' }} onClick={clearFilters}>Limpar filtros</Button>
        </S.HomeContentFilters>
        {/** Testando upload de file  */}
        <div>
          <Input type="file" label="Upload de filme" accept="image/*" onChange={(e) => {
            const file = e.target.files?.[0]
            setFile(file || null)
          }}
          />



          {file && <button onClick={handleUploadFile}>Add file</button>}
        </div>

        {normalMovies.length > 0 ? (
          <S.MoviesGrid>
            {normalMovies.map((movie) => (
              <Card
                key={movie.id}
                type="normal"
                title={movie.title}
                description={movie.description}
                posterUrl={movie.posterUrl}
                duration={movie.durationInMinutos}
                rating={movie.minimumAge}
                genres={movie.genre}
              />
            ))}
          </S.MoviesGrid>
        ) : (
          <Typography variant="body1">Nenhum filme encontrado.</Typography>
        )}

      </S.HomePageContent>
    </S.HomePage>
  )
}
