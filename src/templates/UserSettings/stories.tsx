import { Meta, Story } from '@storybook/react/types-6-0'
import { UserSettings, userSettingsProps } from './index'
import { mock_user_settings } from './mock'

export default {
  title: 'components/user settings',
  component: UserSettings,
  args: mock_user_settings
} as Meta

 export const Template: Story<userSettingsProps > = (args) => <UserSettings {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
