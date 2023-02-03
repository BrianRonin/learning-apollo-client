import { FormEvent, useState } from 'react'
import { Container } from '../../Container/container_1'
import { Input } from '../../Input/input_0'
import * as S from './styles'
import { IoMdSend } from 'react-icons/io'
import { Heading } from '../../Text/heading_0'
import { Button } from '../../Button/button_1'

export type formCommentProps = {
  handleSubmit?: (
    comment: string,
    setComment: () => any,
  ) => any
  buttonDisabled?: boolean
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
      <S.Form onSubmit={onSubmit}>
        <Heading size='medium'>
          Deixe um comentário...
        </Heading>
        <Input
          name='comment'
          label='Comentário'
          as='textarea'
          onChange={(v) => {
            setComment(v)
          }}
          value={comment}
          disabled={buttonDisabled}
        />
        <div className='button-container'>
          <Button Icon={IoMdSend} text='Enviar' />
        </div>
      </S.Form>
    </S.Main>
  )
}
