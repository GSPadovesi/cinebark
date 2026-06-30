import { useEffect, useState } from 'react';
import { Button } from '@/components/button';
import { cinebarkLogo } from '@/assets';
import { House, Film, Timer, Projector, X } from 'lucide-react';
import { Box, Typography, useMediaQuery } from '@mui/material';
import { Link, useLocation, useNavigate } from 'react-router-dom';
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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery('(max-width: 1024px)');
  const location = useLocation();
  const currentHref = `${location.pathname}${location.hash}`;
  const isActiveLink = (href: string) => currentHref === href;
  const navigate = useNavigate();

  const handleRedirect = (href: string) => {
    setIsOpen(false);
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
    <Box component="header" sx={S.headerSx(isScrolled)}>
      <Box sx={S.headerWrapperSx}>
        <img src={cinebarkLogo} alt="Cinebark Cinemas" />
        <Box component="ul" sx={S.headerListSx(isOpen)}>
          {isMobile && <X className='buttonClose' size={16} onClick={() => setIsOpen(false)} />}
          {links.map((link) => {
            const isActive = isActiveLink(link.href);

            return (
              <Box component="li" key={link.href} sx={S.headerListItemSx(isActive)} onClick={() => handleRedirect(link.href)}>
                <Box sx={S.headerListItemContentSx}>
                  {React.cloneElement(link.icon, { size: 16, color: isActive ? '#d4a017' : '#fff' })}
                  <Typography variant="body1" color={isActive ? 'primary' : 'textPrimary'}>
                    {link.name}
                  </Typography>
                  <Box component={Link} to={link.href} aria-label={link.name} sx={S.headerListItemLinkSx} />
                </Box>
              </Box>
            );
          })}
          {isMobile && <Button size="large" variant="outlined" onClick={() => handleRedirect('/login')}>
            Administrador
          </Button>}
        </Box>
        {isMobile && <Button size="large" variant="outlined" onClick={() => setIsOpen(true)}>
          Menu
        </Button>}
        {!isMobile && <Button href="/login" size="large" variant="outlined">
          Administrador
        </Button>}
      </Box>
    </Box>
  );
};
