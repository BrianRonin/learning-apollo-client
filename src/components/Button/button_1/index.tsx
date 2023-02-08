import * as S from './styles'
import { IconType } from 'react-icons'

// export type buttonStyles = {
//   Main?: inject_styles
//   Button?: inject_styles
//   Content?: inject_styles
//   Text?: inject_styles
// }

export type buttonProps = {
  text: string
  Icon: IconType | any
  disabled?: boolean
}

export const Button = ({
  text,
  Icon,
  disabled,
}: buttonProps) => {
  return (
    <S.Main>
      <S.Button disabled={disabled}>
        <S.Content>
          <S.IconContainer>
            <Icon />
          </S.IconContainer>
          <S.TextContainer>
            <span>{text}</span>
          </S.TextContainer>
        </S.Content>
      </S.Button>
    </S.Main>
  )
}
