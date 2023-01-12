import { Container } from '../../components/Container/container_1'
import { FormLogin } from '../../components/Form/form_login'
import { Base } from '../Base'
import * as S from './styles'

export type loginProps = {
  handleLogin?: () => any
}

export const Login = ({
  handleLogin = () => undefined,
}: loginProps) => {
  return (
    <Base>
      <S.Main>
        <Container>
          <FormLogin onLogin={handleLogin} />
        </Container>
      </S.Main>
    </Base>
  )
}
