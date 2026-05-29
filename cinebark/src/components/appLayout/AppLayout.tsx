import { Outlet } from 'react-router-dom'
import * as S from './AppLayout.styles'

export function AppLayout() {
  return (
    <S.Main>
      <Outlet />
    </S.Main>
  )
}
