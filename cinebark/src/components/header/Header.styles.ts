import styled from 'styled-components';

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
  transition: background 0.3s ease, border-bottom 0.3s ease, box-shadow 0.3s ease;
`;

export const HeaderWrapper = styled.div`
  width: 100%;
  height: 100%;
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;

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
