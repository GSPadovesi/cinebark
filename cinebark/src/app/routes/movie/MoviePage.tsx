import { Banner } from '@/components/banner/Banner';
import { moviePlaceholder } from '@/assets';
import { Button, Input } from '@/components';
import { Typography } from '@mui/material';
import { useState } from 'react';
import * as S from './MoviePage.styles';

const genreOptions = [
  'Todos',
  'Acao',
  'Aventura',
  'Animacao',
  'Biografia',
  'Comedia',
  'Crime',
  'Drama',
  'Fantasia',
  'Terror',
  'Romance',
  'Ficcao cientifica',
  'Suspense',
  'Documentario',
  'Familia',
  'Historia',
  'Musica',
  'Musical',
  'Misterio',
  'Esporte',
  'Guerra',
  'Oeste',
]


export const MoviePage = () => {
  const [search, setSearch] = useState('')
  const [genre, setGenre] = useState('Todos')
  const [classification, setClassification] = useState('Livre')
  const [orderBy, setOrderBy] = useState('Em cartaz')

  const clearFilters = () => {
    setSearch('')
    setGenre('Todos')
    setClassification('Livre')
    setOrderBy('Em cartaz')
  }

  return (
    <S.MoviePage>
      <S.MoviePageContent>
        <Banner backgroundImage={moviePlaceholder} title="Filmes" subtitle="em cartaz" content="Explore os filmes em exibição, pré-venda e em breve e planeje sua próxima sessão">
          <S.BannerContent>
            <Button variant="contained" color="primary">
              <Typography variant="body1" color="inherit">
                Ver sessões
              </Typography>
            </Button>
            <Button variant="outlined" color="primary">
              <Typography variant="body1" color="inherit">
                Próximos lançamentos
              </Typography>
            </Button>
          </S.BannerContent>
        </Banner>
        <S.MovieContentFilters>
          <Input type="text" label="Pesquisar" placeholder="Digite o nome do filme" value={search} onChange={(event) => setSearch(event.target.value)} />
          <Input type="select" label="Genero" value={genre} onChange={(e) => setGenre(e.target.value)} options={genreOptions} sx={{ '@media (max-width: 768px)': { width: '100%' } }} />
          <Input type="select" label="Classificacao" value={classification} onChange={(e) => setClassification(e.target.value)} options={['Livre', '10', '12', '14', '16', '18']} sx={{ '@media (max-width: 768px)': { width: '100%' } }} />
          <Input type="select" label="Duracao" value={orderBy} onChange={(e) => setOrderBy(e.target.value)} options={['Em cartaz', 'Em breve', 'premier']} sx={{ '@media (max-width: 768px)': { width: '100%' } }} />
          <Button type="button" variant="outlined" onClick={clearFilters} sx={{ '@media (min-width: 768px)': { alignSelf: 'flex-end' }, '@media (max-width: 768px)': { width: '100%' } }}>
            Limpar filtros
          </Button>
        </S.MovieContentFilters>
      </S.MoviePageContent>
    </S.MoviePage>
  );
}