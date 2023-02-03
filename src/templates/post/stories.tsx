import { Meta, Story } from '@storybook/react/types-6-0'
import { Post, postProps } from './index'
import { mock_post } from './mock'

export default {
  title: 'components/post',
  component: Post,
  args: mock_post
} as Meta

 export const Template: Story<postProps > = (args) => <Post {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
