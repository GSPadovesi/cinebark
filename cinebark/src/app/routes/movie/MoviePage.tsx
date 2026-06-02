import { moviePlaceholder } from '@/assets';
import { Button, MovieList, Banner } from '@/components';
import { Typography } from '@mui/material';
import * as S from './MoviePage.styles';

export const MoviePage = () => {
  return (
    <S.MoviePage>
      <S.MoviePageContent>
        <Banner backgroundImage={moviePlaceholder} title="Filmes" subtitle="em cartaz" content="Explore os filmes em exibição, pré-venda e em breve e planeje sua próxima sessão">
          <S.BannerContent>
            <Button variant="contained" color="primary">
              <Typography variant="body1" color="inherit">Ver sessões</Typography>
            </Button>
            <Button variant="outlined" color="primary">
              <Typography variant="body1" color="inherit">Próximos lançamentos</Typography>
            </Button>
          </S.BannerContent>
        </Banner>
        <MovieList />
      </S.MoviePageContent>
    </S.MoviePage>
  );
}
