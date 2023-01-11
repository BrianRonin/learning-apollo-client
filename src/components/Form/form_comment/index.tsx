import { FormEvent, useState } from 'react'
import { Button } from '../../Button/button_0'
import { Container } from '../../Container/container_1'
import { Input } from '../../Input/input_0'
import * as S from './styles'
import { IoMdSend } from 'react-icons/io'

export type formCommentProps = {
  handleSubmit: (
    comment: string,
    setComment: () => any,
  ) => any
  buttonDisabled: boolean
}

export const FormComment = ({
  handleSubmit,
  buttonDisabled,
}: formCommentProps) => {
  const [comment, setComment] = useState('')

  const onSubmit = (
    e: FormEvent<HTMLFormElement>,
  ) => {
    e.preventDefault()

    if (handleSubmit) {
      handleSubmit(comment, () => setComment(''))
    }
  }

  return (
    <S.Main>
      <Container>
        <S.Form onSubmit={onSubmit}>
          <h3>Create a comment</h3>
          <Input
            name='comment'
            label='Comment'
            as='textarea'
            onChange={(v) => {
              setComment(v)
            }}
            value={comment}
            disabled={buttonDisabled}
          />
          <Button icon={<IoMdSend />}>
            create a comment
          </Button>
        </S.Form>
      </Container>
    </S.Main>
  )
}
