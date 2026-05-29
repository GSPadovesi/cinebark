import { Typography } from '@mui/material'
import * as S from './Footer.styles'

export function Footer() {
  return (
    <S.Footer>
      <Typography variant="body1" color="white">
        &copy; {new Date().getFullYear()} Cinebark. Todos os direitos reservados.
      </Typography>
    </S.Footer>
  )
}