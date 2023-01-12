import { Meta, Story } from '@storybook/react/types-6-0'
import { Login, loginProps } from './index'
import { mock_login } from './mock'

export default {
  title: 'components/login',
  component: Login,
  args: mock_login
} as Meta

 export const Template: Story<loginProps > = (args) => <Login {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
