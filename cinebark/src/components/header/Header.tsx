import { useEffect, useState } from 'react';
import { Button } from '@/components/button';
import { cinebarkLogo } from '@/assets';
import { House, Film, Timer, Projector } from 'lucide-react';
import { Typography } from '@mui/material';
import { useLocation, useNavigate } from 'react-router-dom';
import React from 'react';
import * as S from './Header.styles';

const links = [
  { name: 'Inicio', href: '/', icon: <House size={16} /> },
  { name: 'Filmes', href: '/filmes', icon: <Film size={16} /> },
  { name: 'Sessoes', href: '/sessoes', icon: <Timer size={16} /> },
  { name: 'Salas', href: '/salas', icon: <Projector size={16} /> },
];


export const Header: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const location = useLocation();
  const currentHref = `${location.pathname}${location.hash}`;
  const isActiveLink = (href: string) => currentHref === href;
  const navigate = useNavigate();

  const handleRedirect = (href: string) => {
    navigate(href);
  };


  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    if (!location.hash) return;

    const section = document.getElementById(location.hash.slice(1));
    section?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }, [location.hash]);

  return (
    <S.Header isScrolled={isScrolled}>
      <S.HeaderWrapper>
        <img src={cinebarkLogo} alt="Cinebark Cinemas" />
        <S.HeaderList>
          {links.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <S.HeaderListItem key={link.href} isPage={isActive} onClick={() => handleRedirect(link.href)}>
                <S.HeaderListItemContent>
                  {React.cloneElement(link.icon, { size: 16, color: isActive ? '#d4a017' : '#fff' })}
                  <Typography variant="body1" color={isActive ? 'primary' : 'textPrimary'}>
                    {link.name}
                  </Typography>
                  <S.HeaderListItemLink to={link.href} aria-label={link.name} />
                </S.HeaderListItemContent>
              </S.HeaderListItem>
            );
          })}
        </S.HeaderList>
        <Button href="/#configuracao" size="large" variant="outlined">
          Administrador
        </Button>
      </S.HeaderWrapper>
    </S.Header>
  );
};
