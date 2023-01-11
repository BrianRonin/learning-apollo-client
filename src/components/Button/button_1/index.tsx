import * as S from './styles'
import { IconType } from 'react-icons'
import { inject_styles } from '../../../types/emotion'

export type buttonStyles = {
  Main?: inject_styles
  Button?: inject_styles
  Content?: inject_styles
  Text?: inject_styles
}

export type buttonProps = {
  text: string
  Icon: IconType | any
  styles?: buttonStyles
}

export const Button = ({
  text,
  Icon,
  styles,
}: buttonProps) => {
  return (
    <S.Main styles={styles?.Main}>
      <S.Button styles={styles?.Button}>
        <S.Content styles={styles?.Content}>
          <S.IconContainer>
            <Icon />
          </S.IconContainer>
          <S.TextContainer styles={styles?.Text}>
            <span>{text}</span>
          </S.TextContainer>
        </S.Content>
      </S.Button>
    </S.Main>
  )
}
