import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { FormUserSettings, formUserSettingsProps } from '.'
import { S_Container } from '../../Container/container_0/styles'
import { mock_form_user_settings } from './mock'

export default {
  title: 'components/Form/Form_login_0',
  component: FormUserSettings,
  args: mock_form_user_settings,
} as Meta

export const Template: Story<formUserSettingsProps> = (
  args,
) => (
  <S_Container>
    <FormUserSettings {...args} />
  </S_Container>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
  },
}
