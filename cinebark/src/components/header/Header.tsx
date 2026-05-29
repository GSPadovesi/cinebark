import { useEffect, useState } from 'react';
import { Button } from '@/components/button';
import { cinebarkLogo } from '@/assets';
import * as S from './Header.styles';

export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => { setIsScrolled(window.scrollY > 80) };
    window.addEventListener('scroll', handleScroll);
    return () => { window.removeEventListener('scroll', handleScroll) };
  }, []);

  return (
    <S.Header isScrolled={isScrolled}>
      <S.HeaderWrapper>
        <img src={cinebarkLogo} alt="Cinebark Cinemas" />
        <Button href="/#configuracao" size="large" variant="contained">
          Administrador
        </Button>
      </S.HeaderWrapper>
    </S.Header>
  )
}
