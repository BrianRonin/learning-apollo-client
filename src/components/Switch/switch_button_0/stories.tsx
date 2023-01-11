import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import {
  SwitchButton,
  switchButtonProps,
} from '.'
import { mock_switch_button } from './mock'

export default {
  title: 'components/Switch/Switch_button_0',
  component: SwitchButton,
  args: mock_switch_button,
} as Meta

export const Template: Story<switchButtonProps> =
  (args) => <SwitchButton {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
