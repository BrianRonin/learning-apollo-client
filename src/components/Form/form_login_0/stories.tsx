import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { FormLogin, formLoginProps } from '.'
import { S_Container } from '../../Container/container_0/styles'
import { mock_form_login } from './mock'

export default {
  title: 'components/Form/Form_login_0',
  component: FormLogin,
  args: mock_form_login,
} as Meta

export const Template: Story<formLoginProps> = (
  args,
) => (
  <S_Container>
    <FormLogin {...args} />
  </S_Container>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
  },
}
