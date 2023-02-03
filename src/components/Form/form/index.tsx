import {
  FormHTMLAttributes,
  ReactNode,
} from 'react'
import * as S from './styles'

export type formProps = {
  children?: ReactNode
  meta?: FormHTMLAttributes<HTMLFormElement>
}

export const Form = ({
  children,
  meta,
}: formProps) => {
  return <S.Main {...meta}>{children}</S.Main>
}
