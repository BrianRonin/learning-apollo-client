import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { LogoLink, logoLinkProps } from '.'

export default {
  title: 'components/Sidebar/Sidebar_0/Logo_link',
  component: LogoLink,
  argTypes: {},
  parameters: {
    backgrounds: {
      default: 'light',
    },
  },
} as Meta

export const Text: Story<logoLinkProps> = (
  args,
) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  )
}

Text.args = {
  text: 'logo',
  link: 'www.google.com',
}

export const Image: Story<logoLinkProps> = (
  args,
) => {
  return (
    <div>
      <LogoLink {...args} />
    </div>
  )
}

Image.args = {
  text: 'logo',
  link: 'www.google.com',
  srcImg: '/avatar.jpg',
}
