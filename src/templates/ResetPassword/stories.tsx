import { Meta, Story } from '@storybook/react/types-6-0'
import { ResetPassword, resetPasswordProps } from './index'
import { mock_reset_password } from './mock'

export default {
  title: 'components/user settings',
  component: ResetPassword,
  args: mock_reset_password
} as Meta

 export const Template: Story<resetPasswordProps > = (args) => <ResetPassword {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
