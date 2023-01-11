import { Meta, Story } from '@storybook/react/types-6-0'
import { PostCard, postCardProps } from './index'
import { mock_post_card } from './mock'

export default {
  title: 'components/card/post card',
  component: PostCard,
  args: mock_post_card,
} as Meta


export const Template: Story< postCardProps> = (args) => <PostCard {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light'
  },
}