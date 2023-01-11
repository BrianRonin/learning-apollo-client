import * as S from './styles'

export type textAreaProps = {
  label?: string
  placeholder?: string
  onChange?: () => any
  disabled?: boolean
  value?: string
  id: string
}

export const TextArea = ({
  label,
  placeholder,
  onChange,
  disabled,
  value,
  id,
}: textAreaProps) => {
  return <S.Main></S.Main>
}
