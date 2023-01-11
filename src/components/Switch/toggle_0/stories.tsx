import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Toggle, toggleProps } from '.'
import { S_Container } from '../../Container/container_0/styles'
import { mock_toggle } from './mock'

export default {
  title: 'components/Switch/Toggle_0',
  component: Toggle,
  args: mock_toggle,
} as Meta

export const Template: Story<toggleProps> = (
  args,
) => (
  <div>
    <Toggle {...args} />
  </div>
)

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
