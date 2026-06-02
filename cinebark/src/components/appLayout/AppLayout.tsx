import { Outlet, useLocation } from 'react-router-dom'
import { Header, Footer, Breadcrumb } from '@/components'
import * as S from './AppLayout.styles'

export function AppLayout() {
  const location = useLocation();

  return (
    <>
      <Header />
      <S.Main>
        <S.BreadcrumbWrapper>
          <Breadcrumb links={location.pathname} />
        </S.BreadcrumbWrapper>
        <Outlet />
      </S.Main>
      <Footer />
    </>
  )
}
