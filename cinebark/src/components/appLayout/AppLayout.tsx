import { Outlet } from 'react-router-dom'
import { Header, Footer } from '@/components'
import * as S from './AppLayout.styles'

export function AppLayout() {
  return (
    <>
      <Header />
      <S.Main>
        <Outlet />
      </S.Main>
      <Footer />
    </>
  )
}
