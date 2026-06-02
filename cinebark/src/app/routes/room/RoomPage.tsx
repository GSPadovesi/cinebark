import { Banner, List, ResourceBanner } from '@/components';
import { roomPlaceholder } from '@/assets';
import * as S from './RoomPage.styles';

export const RoomPage = () => {
  return (
    <S.RoomPage>
      <S.RoomPageContent>
        <Banner backgroundImage={roomPlaceholder} title="Nossas" subtitle="salas" content="Conforto, tecnologia, qualidade e a melhor experiência do cinema para você" sx={{ height: '250px' }} />
        <ResourceBanner />
        <List type='roomList' />
      </S.RoomPageContent>
    </S.RoomPage>
  )
}