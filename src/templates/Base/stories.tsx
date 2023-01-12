import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Base, baseProps } from '.'
import { mock_base } from './mock'

export default {
  title: 'templates/base',
  component: Base,
  args: mock_base,
} as Meta

export const Template: Story<baseProps> = (
  args,
) => <Base {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'none',
  },
}
