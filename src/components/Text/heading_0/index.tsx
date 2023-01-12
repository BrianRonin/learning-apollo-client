import { ReactNode } from 'react'
import * as S from './styles'

export type HeadingProps = {
  children: ReactNode
  as?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  size?: 'huge' | 'big' | 'medium' | 'small'
  uppercase?: boolean
}

export const Heading = ({
  children = 'testando componente',
  as = 'h2',
  size = 'huge',
  uppercase = false,
}: HeadingProps) => {
  return (
    <S.Main
      as={as}
      size={size}
      uppercase={uppercase}
    >
      {children}
    </S.Main>
  )
}
