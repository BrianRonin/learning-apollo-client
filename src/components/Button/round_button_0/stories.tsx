import {
  Meta,
  Story,
} from '@storybook/react/types-6-0'
import { RoundButton, roundButtonProps } from '.'
import { S_Container } from '../../Container/container_0/styles'
import { mock_round_button } from './mock'

export default {
  title: 'components/Button/Round_button_0',
  component: RoundButton,
  args: mock_round_button,
  decorators: [
    (Story) => (
      <S_Container>
        <div
          style={{
            justifyContent: 'center',
            display: 'flex',
          }}
        >
          <Story />
        </div>
      </S_Container>
    ),
  ],
} as Meta

export const Template: Story<roundButtonProps> = (
  args,
) => <RoundButton {...args} />

Template.parameters = {
  backgrounds: {
    default: 'light',
  },
}
