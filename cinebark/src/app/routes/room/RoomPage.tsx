import { Banner } from '@/components';
import { roomPlaceholder } from '@/assets';
import * as S from './RoomPage.styles';

export const RoomPage = () => {
  return (
    <S.RoomPage>
      <S.RoomPageContent>
        <Banner backgroundImage={roomPlaceholder} title="Nossas" subtitle="salas" content="Conforto, tecnologia, qualidade e a melhor experiência do cinema para você" />
        <h1>Session Page</h1>
      </S.RoomPageContent>
    </S.RoomPage>
  )
}