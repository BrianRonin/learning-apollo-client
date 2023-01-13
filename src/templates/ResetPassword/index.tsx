import { Container } from '../../components/Container/container_1'
import { FormResetPassword } from '../../components/Form/form_reset_password'
import { Base } from '../Base'
import * as S from './styles'

export type resetPasswordProps = {
  settings?: any
}

export const ResetPassword = ({
  settings,
}: resetPasswordProps) => {
  return (
    <S.Main>
      <Container>
        <FormResetPassword />
      </Container>
    </S.Main>
  )
}
