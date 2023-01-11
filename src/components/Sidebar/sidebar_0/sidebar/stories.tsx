import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Sidebar, sidebarProps } from '.'
import { mock_sidebar } from './mock'

export default {
  title: 'components/Sidebar/Sidebar_0/Sidebar',
  component: Sidebar,
  args: mock_sidebar,
} as Meta
export const Template: Story<sidebarProps> = (
  args,
) => <Sidebar {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
