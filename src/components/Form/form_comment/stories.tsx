import { Meta, Story } from '@storybook/react/types-6-0'
import { FormComment, formCommentProps } from './index'
import { mock_form_comment } from './mock'

export default {
  title: 'components/form/form comment',
  component: FormComment,
  args: mock_form_comment,
} as Meta


export const Template: Story< formCommentProps> = (args) => <FormComment {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}