import { S_Container } from '../Container/container_0/styles'
import * as S from './styles'

export type loadingProps = {
  //
}

export const Loading = () => {
  return (
    <S.Main>
      <S_Container
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <S.LoadingAnimation></S.LoadingAnimation>
      </S_Container>
    </S.Main>
  )
}
