import { sessionPlaceholder } from '@/assets';
import { Banner } from '@/components';
import * as S from './SessionPage.styles';

export const SessionPage = () => {
  return (
    <S.SessionPage>
      <S.SessionPageContent>
        <Banner backgroundImage={sessionPlaceholder} title="Sessões" subtitle="disponível" content="Escolha o melhor horario para assistir seu filme favorito" />
        <h1>Session Page</h1>
      </S.SessionPageContent>
    </S.SessionPage>
  )
}