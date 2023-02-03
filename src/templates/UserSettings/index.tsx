import { useWindowSize } from 'usehooks-ts'
import { Container } from '../../components/Container/container_1'
import { FormUserSettings } from '../../components/Form/form_user_settings'
import { Base } from '../Base'
import * as S from './styles'

export type userSettingsProps = { settings?: any }

export const UserSettings = ({
  settings,
}: userSettingsProps) => {
  const { width } = useWindowSize()

  if (width <= 768)
    return (
      <S.Main>
        <FormUserSettings />
      </S.Main>
    )

  return (
    <S.Main>
      <Container>
        <FormUserSettings />
      </Container>
    </S.Main>
  )
}
