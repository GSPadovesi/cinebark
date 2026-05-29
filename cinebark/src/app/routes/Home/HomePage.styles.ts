import styled from 'styled-components';

export const HomePage = styled.section`
  width: 100%;
  min-height: 100dvh;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`

export const HomePageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`

export const HomeContentFilters = styled.div`
  width: 100%;
  min-height: 100px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  background-color: #212121;
  padding: 20px;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;

export const MoviesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(230px, 1fr));
  gap: 10px;
  padding: 10px;
  scroll-margin-top: 96px;
`;

