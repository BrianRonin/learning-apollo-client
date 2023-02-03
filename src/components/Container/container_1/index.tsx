import { ReactNode, HTMLAttributes } from 'react'
import * as S from './styles'

export type Custom = {
  boxShadowOnHover?: 'bg' | 'primary'
  isForm?: boolean
}

export type containerProps = {
  children: ReactNode
  custom?: Custom
  meta?: HTMLAttributes<HTMLDivElement>
}

export const Container = ({
  children,
  custom,
  meta,
}: containerProps) => {
  return (
    <S.Main {...meta}>
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
