import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header<{isScrolled: boolean}>`
  width: 100%;
  height: 80px;
  position: sticky;
  top: 0;
  z-index: 10;
  /* border-bottom: 1px solid rgba(255, 255, 255, 0.08); */
  border-bottom: ${({ isScrolled }) => isScrolled ? '1px solid rgba(255, 255, 255, 0.08)' : 'none'};
  background: ${({ isScrolled }) => isScrolled ? '#0b0f12' : 'transparent'};
  box-shadow: ${({ isScrolled }) => isScrolled ? '0 2px 4px rgba(0, 0, 0, 0.1)' : 'none'};
  transition: background 0.3s ease, box-shadow 0.3s ease;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 20px 20px 0;

   img {
    width: 260px;
    height: max-content;
    max-width: none;
    display: block;
    object-fit: contain;
  }

  @media (max-width: 600px) {

    img {
      width: 300px;
    }
  }
`;


export const HeaderList = styled.ul`
  /* width: 100%; */
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  list-style: none;
`

export const HeaderListItem = styled.li<{ isPage?: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  position: relative;
  cursor: pointer;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(to right, transparent, #d4a017, transparent);
    transform: scaleX(${({ isPage }) => (isPage ? 1 : 0)});
    transition: transform 0.3s ease-in-out;
  }
`

export const HeaderListItemContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  position: relative;
`

export const HeaderListItemLink = styled(Link)`
  position: absolute;
  inset: 0;
  z-index: 1;
`
