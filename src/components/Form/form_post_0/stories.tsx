import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { FormPost, formPostProps } from '.'
import { mock_form_post } from './mock'

export default {
  title: 'components/Form/Form_post_0',
  component: FormPost,
  args: mock_form_post,
} as Meta

export const Template: Story<formPostProps> = (
  args,
) => (
  <div style={{ padding: '3rem' }}>
    <FormPost {...args} />
  </div>
)

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light',
  },
}
