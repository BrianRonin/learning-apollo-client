import { Meta, Story } from '@storybook/react/types-6-0'
import { Form, formProps } from './index'
import { mock_form } from './mock'

export default {
  title: 'components/form/form',
  component: Form,
  args: mock_form,
} as Meta


export const Template: Story< formProps> = (args) => <Form {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}