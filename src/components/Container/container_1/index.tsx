import * as React from 'react'
import * as S from './styles'

export type containerProps = {
  children: React.ReactNode
}

export const Container = ({
  children,
}: containerProps) => {
  return (
    <S.Main>
      <S.Inside>{children}</S.Inside>
    </S.Main>
  )
}
