import { Meta, Story } from '@storybook/react/types-6-0'
import { TextArea, textAreaProps } from './index'
import { mock_text_area } from './mock'

export default {
  title: 'components/input/text area',
  component: TextArea,
  args: mock_text_area,
} as Meta


export const Template: Story< textAreaProps> = (args) => <TextArea {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}