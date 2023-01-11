import { CgAddR } from 'react-icons/cg'
import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Button, buttonProps } from '.'
import { mock_button } from './mock'
import { S_Container } from '../../Container/container_0/styles'

export default {
  title: 'components/Button/Button_0',
  component: Button,
  args: mock_button,
  parameters: {
    layout: 'fullscren',
    background: {
      disable: true,
    },
  },
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

export const WithIcon: Story<buttonProps> = (
  args,
) => <Button {...args} icon={<CgAddR />} />

export const OnlyIcon: Story<buttonProps> = (
  args,
) => (
  <Button
    {...args}
    icon={<CgAddR />}
    children={undefined}
  />
)
