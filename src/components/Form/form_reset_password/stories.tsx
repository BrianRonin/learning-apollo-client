import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { FormResetPassword, formResetPasswordProps } from '.'
import { S_Container } from '../../Container/container_0/styles'
import { mock_form_reset_password } from './mock'

export default {
  title: 'components/Form/Form_login_0',
  component: FormResetPassword,
  args: mock_form_reset_password,
} as Meta

export const Template: Story<formResetPasswordProps> = (
  args,
) => (
  <S_Container>
    <FormResetPassword {...args} />
  </S_Container>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
  },
}
