import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Input, inputProps } from './index'
import { mock_input } from './mock'

export default {
  title: 'components/input/input_1',
  component: Input,
  args: mock_input,
} as Meta

export const Template: Story<inputProps> = (
  args,
) => <Input {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light',
  },
}
