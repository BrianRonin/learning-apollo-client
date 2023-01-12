import { Container } from '../../components/Container/container_1'
import { FormUserSettings } from '../../components/Form/form_user_settings'
import { Base } from '../Base'
import * as S from './styles'

export type userSettingsProps = { settings?: any }

export const UserSettings = ({
  settings,
}: userSettingsProps) => {
  return (
    <Base>
      <S.Main>
        <Container>
          <FormUserSettings />
        </Container>
      </S.Main>
    </Base>
  )
}
