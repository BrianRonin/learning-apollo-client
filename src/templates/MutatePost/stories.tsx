import { Meta, Story } from '@storybook/react/types-6-0'
import { MutatePost, mutatePostProps } from './index'
import { mock_mutate_post } from './mock'

export default {
  title: 'components/mutate post',
  component: MutatePost,
  args: mock_mutate_post
} as Meta

 export const Template: Story<mutatePostProps > = (args) => <MutatePost {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    default: 'light'
  },
}
