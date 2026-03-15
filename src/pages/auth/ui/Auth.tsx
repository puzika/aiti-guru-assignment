import * as S from './Auth.styles';
import { Outlet } from "react-router-dom"

export const Auth = () => {
  return (
    <S.SAuth>
      <S.SFormWrapper>
        <Outlet />
      </S.SFormWrapper>
    </S.SAuth>
  )
}
