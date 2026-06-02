import { Box, Typography } from '@mui/material'
import { heroImage, film, film2 } from '@/assets'
import { Button, Card, FeaturedSlider, Input } from '@/components'
import * as S from './HomePage.styles'
import { useEffect, useState } from 'react'
import type { Movie } from '@/types'
import { getTenMovies } from '@/services'

//Deixar esse 4 fixos até eu criar as sessões
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


export function HomePage() {
  const [movies, setMovies] = useState<Movie[]>([])


  useEffect(() => {
    async function fetchMovies() {
      try {
        const movies = await getTenMovies()
        setMovies(movies)
      } catch (error) {
        console.error('Erro ao buscar filmes:', error)
      }
    }

    fetchMovies()
  }, []);

  return (
    <S.HomePage>
      <S.HomePageContent>
        <FeaturedSlider
          items={featuredMovies}
          getKey={(movie) => movie.id}
          renderItem={(movie) => (
            <Card
              type="movieFeatured"
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
        <Typography variant="body1" sx={{ fontSize: '24px' }} id="recomendados">Nossas Recomendações</Typography>
        {movies.length > 0 ? (
          <S.MoviesGrid id="sessoes">
            {movies.map((movie) => (
              <Card
                key={movie.id}
                type="movieCard"
                title={movie.title}
                description={movie.description}
                posterUrl={movie.posterURL}
                duration={movie.durationInMinutos}
                minimumAge={movie.minimumAge}
                genres={movie.genres}
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
