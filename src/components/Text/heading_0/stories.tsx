import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Heading, HeadingProps } from '.'

export default {
  title: 'components/Text/Heading_0',
  component: Heading,
  args: {
    children: 'Testando o heading',
  },
  argTypes: {
    children: { type: 'string' },
    light: { type: 'boolean' },
  },
} as Meta

export const Template: Story<HeadingProps> = (
  args,
) => <Heading {...args} />
