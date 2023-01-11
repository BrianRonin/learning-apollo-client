import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'

import { Button, buttonProps } from '.'
import { S_Container } from '../../Container/container_0/styles'
import { mock_button } from './mock'

export default {
  title: 'components/Button/Button_1',
  component: Button,
  args: mock_button,
  decorators: [
    (Story) => (
      <S_Container
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Story />
      </S_Container>
    ),
  ],
} as Meta

export const Template: Story<buttonProps> = (
  args,
) => <Button {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
