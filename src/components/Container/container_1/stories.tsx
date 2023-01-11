import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Container, containerProps } from '.'
import { mock_container } from './mock'

export default {
  title: 'components/Container/container 1',
  component: Container,
  args: mock_container,
} as Meta

export const Template: Story<containerProps> = (
  args,
) => <Container {...args} />

Template.parameters = {
  layout: 'fullscren',
  backgrounds: {
    disable: true,
    default: 'light',
  },
}
