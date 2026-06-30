import styled from 'styled-components'

export const AuthPage = styled.section`
  width: 100%;
  min-height: calc(100dvh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 32px 20px 56px;
`

export const AuthContent = styled.div`
  width: 100%;
  max-width: 960px;
`

export const FormsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 24px;

  @media (max-width: 820px) {
    grid-template-columns: 1fr;
  }
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`

export const FormActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 4px;

  @media (max-width: 520px) {
    align-items: stretch;
    flex-direction: column;
  }
`
