import { Container } from '../../components/Container/container_1'
import { FormPost } from '../../components/Form/form_post'
import { Base } from '../Base'
import * as S from './styles'

export type mutatePostProps = { post?: any }

export const MutatePost = ({
  post,
}: mutatePostProps) => {
  return (
    <Base>
      <S.Main>
        <Container>
          <FormPost />
        </Container>
      </S.Main>
    </Base>
  )
}
