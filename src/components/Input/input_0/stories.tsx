import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { Input, inputProps } from '.'
import { AiOutlineMail } from 'react-icons/ai'
import { mock_input } from './mock'

export default {
  title: 'components/Input/Input_0',
  component: Input,
  args: mock_input,
  layout: 'fullscren',
  backgrounds: {
    disable: true,
  },
  decorators: [
    (Story: Story) => {
      return (
        <div style={{ padding: '3.2rem' }}>
          <Story />
        </div>
      )
    },
  ],
} as Meta

export const Template: Story<inputProps> = (
  args,
) => {
  return <Input {...args} />
}

export const OnError: Story<inputProps> = (
  args,
) => {
  return (
    <div
      style={{ display: 'flex', width: '50vw' }}
    >
      <Input {...args} />
    </div>
  )
}

OnError.args = {
  errorMessage: 'Something went wrong, Sorry!',
  value: 'Something you typed',
  icon: <AiOutlineMail />,
}

export const WithText: Story<inputProps> = (
  args,
) => {
  return (
    <div
      style={{ display: 'flex', width: '50vw' }}
    >
      <Input {...args} />
    </div>
  )
}

WithText.args = {
  value: 'Something you typed',
}

export const WithIcon: Story<inputProps> = (
  args,
) => {
  return (
    <div
      style={{ display: 'flex', width: '50vw' }}
    >
      <Input {...args} />
    </div>
  )
}

WithIcon.args = {
  value: 'Something you typed',
  icon: <AiOutlineMail />,
}

export const Disabled: Story<inputProps> = (
  args,
) => {
  return (
    <div
      style={{ display: 'flex', width: '50vw' }}
    >
      <Input {...args} />
    </div>
  )
}

Disabled.args = {
  value: 'Something you typed',
  icon: <AiOutlineMail />,
  disabled: true,
}

export const TextArea: Story<inputProps> = (
  args,
) => {
  return (
    <div
      style={{ display: 'flex', width: '50vw' }}
    >
      <Input {...args} />
    </div>
  )
}

TextArea.args = {
  value: 'Something you typed',
  icon: <AiOutlineMail />,
  as: 'textarea',
}
