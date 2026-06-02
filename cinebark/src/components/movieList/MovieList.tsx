import { forwardRef, useCallback, useEffect, useRef, useState, type ChangeEvent } from 'react';
import { Input } from '../input';
import { Button } from '../button';
import { useMovies } from '@/hooks';
import type { ClassificationType, GenreType } from '@/types';
import { Grid, Pagination, Typography } from '@mui/material';
import { Card } from '../card';
import { Skeleton } from '../skeleton';
import Box from '@mui/material/Box';
import * as S from './MovieList.styles';

const genreOptions = [
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

const ageClassificationOptions = [
  { label: 'Todos', value: '' },
  { label: 'Livre', value: '0' },
  { label: '10', value: '10' },
  { label: '12', value: '12' },
  { label: '14', value: '14' },
  { label: '16', value: '16' },
  { label: '18', value: '18' },
] satisfies Array<{ label: string, value: string }>

const orderByOptions = [
  { label: 'Todos', value: '' },
  { label: 'Em cartaz', value: 'AVAILABLE' },
  { label: 'Pré-venda', value: 'PRE_ORDER' },
  { label: 'Em breve', value: 'SOON' },
] satisfies Array<{ label: string, value: ClassificationType | '' }>


export const MovieList = forwardRef<HTMLDivElement>((_, ref) => {
  const { movies, filters, page, totalPages, loading, error, setFilter, setPage, clearFilters } = useMovies();
  const [search, setSearch] = useState(filters.search)
  const timeRef = useRef<ReturnType<typeof setTimeout> | undefined>(undefined)

  const onSearchChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value
    clearTimeout(timeRef.current)
    setSearch(value)

    const time = setTimeout(() => {
      setFilter('search', value)
    }, 500)

    timeRef.current = time;
  }, [setFilter])

  const onGenreChange = useCallback((e: ChangeEvent<HTMLInputElement>) => { setFilter('genre', e.target.value as GenreType | '') }, [setFilter])
  const onMinimunAgeChange = useCallback((e: ChangeEvent<HTMLInputElement>) => { setFilter('minimumAge', e.target.value) }, [setFilter])
  const onOrderByChange = useCallback((e: ChangeEvent<HTMLInputElement>) => { setFilter('orderBy', e.target.value as ClassificationType | '') }, [setFilter])
  const onClearFilters = useCallback(() => {
    clearTimeout(timeRef.current)
    setSearch('')
    clearFilters()
  }, [clearFilters])

  useEffect(() => {
    setSearch(filters.search)
  }, [filters.search])

  useEffect(() => () => {
    clearTimeout(timeRef.current)
  }, [])

  return (
    <Box ref={ref} sx={S.SXMovieList}>
      <Box sx={S.SXMovieListFilters}>
        <Input type="text" label="Pesquisar" placeholder="Digite o nome do filme" value={search} onChange={onSearchChange} />
        <Input type="select" label="Genero" value={filters.genre} onChange={onGenreChange} options={genreOptions} sx={{ '@media (max-width: 768px)': { width: '100%' } }} />
        <Input type="select" label="Classificacao" value={filters.minimumAge ?? ''} onChange={onMinimunAgeChange} options={ageClassificationOptions} sx={{ '@media (max-width: 768px)': { width: '100%' } }} />
        <Input type="select" label="Ordenado por" value={filters.orderBy} onChange={onOrderByChange} options={orderByOptions} sx={{ '@media (max-width: 768px)': { width: '100%' } }} />
        <Button type="button" variant="outlined" onClick={onClearFilters} sx={{ '@media (min-width: 768px)': { alignSelf: 'flex-end' }, '@media (max-width: 768px)': { width: '100%' } }}>
          Limpar filtros
        </Button>
      </Box>
      <Box sx={S.SXContainerList}>
        {loading ? (
          <Skeleton
            count={8}
            columns="repeat(auto-fit, minmax(230px, 1fr))"
            gap="8px"
            height={430}
            containerSx={S.SXLoadingGrid}
          />
        ) : error ? (
          <Box sx={S.SXError}>
            <Typography variant="h6" color="inherit">
              Nao foi possivel carregar os filmes
            </Typography>
            <Typography variant="body2" color="inherit">
              Tente novamente em alguns instantes.
            </Typography>
          </Box>
        ) : movies.length === 0 ? (
          <Box sx={S.SXError}>
            <Typography variant="h6" color="inherit">
              Nenhum filme encontrado
            </Typography>
            <Typography variant="body2" color="inherit">
              Tente ajustar os filtros ou limpar a pesquisa.
            </Typography>
          </Box>
        ) : (
          <Grid container spacing={1}>
            {movies.map(movie => (
              <Grid key={movie.id} size={{ xs: 12, sm: 6, md: 4, lg: 3 }} sx={{ display: 'flex' }}>
                <Card
                  type="movieCard"
                  title={movie.title}
                  description={movie.description}
                  posterUrl={movie.posterURL}
                  duration={movie.durationInMinutos}
                  minimumAge={movie.minimumAge}
                  genres={movie.genres}
                />
              </Grid>
            ))}
          </Grid>
        )}
      </Box>
      {!loading && !error && movies.length > 0 && <Box sx={S.SXContainerOptions}>
        <Pagination
          count={totalPages}
          page={page + 1}
          color="primary"
          onChange={(_, value) => setPage(value - 1)}
          sx={S.SXPagination}
        />
        <Typography variant="body1" color="inherit">{`Página ${page + 1} de ${totalPages}`}</Typography>
      </Box>}
    </Box>
  )
})
