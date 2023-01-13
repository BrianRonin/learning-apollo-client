import * as React from 'react'
import * as S from './styles'

export type Custom = {
  boxShadowOnHover?: 'bg' | 'primary'
}

export type containerProps = {
  children: React.ReactNode
  custom?: Custom
}

export const Container = ({
  children,
  custom,
}: containerProps) => {
  return (
    <S.Main>
      <S.Inside
        boxShadowOnHover={
          custom?.boxShadowOnHover
        }
      >
        {children}
      </S.Inside>
    </S.Main>
  )
}
