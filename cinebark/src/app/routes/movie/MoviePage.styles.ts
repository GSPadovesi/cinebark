import styled from 'styled-components';

export const MoviePage = styled.section`
  width: 100%;
  min-height: 100dvh;
  max-width: 1200px;
  margin: 0 auto;
  overflow: hidden;
`

export const MoviePageContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
`

export const BannerContent = styled.div`
  display: flex;
  gap: 20px;
  align-items: center;
`

export const MovieContentFilters = styled.div`
  width: 100%;
  min-height: 100px;
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 10px;
  background-color: #090c10;
  padding: 20px;

  @media(max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
  }
`;