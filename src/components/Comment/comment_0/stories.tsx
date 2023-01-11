import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Comment } from '.'
import { mock_comment } from './mock'

export default {
  title: 'components/Container/Container 0',
} as Meta

export const Template: Story = () => (
  <Comment {...mock_comment} />
)

Template.parameters = {
  layout: 'fullscren',
}
