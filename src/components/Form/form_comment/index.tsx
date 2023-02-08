import { FormEvent, useState } from 'react'
import { Input } from '../../Input/input_0'
import * as S from './styles'
import { IoMdSend } from 'react-icons/io'
import { Heading } from '../../Text/heading_0'
import { Button } from '../../Button/button_1'

export type formCommentProps = {
  handleSubmit?: (comment: string) => any
  buttonDisabled?: boolean
}

export const FormComment = ({
  handleSubmit,
  buttonDisabled,
}: formCommentProps) => {
  const [comment, setComment] = useState('')

  const handleInput = (i: string) => {
    setComment(i)
  }

  const onSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    if (handleSubmit) {
      await handleSubmit(comment)
      setComment('')
    }
  }

  return (
    <S.Main>
      <S.Form onSubmit={onSubmit}>
        <Heading size='medium'>Deixe um comentário...</Heading>
        <Input
          name='comment'
          label='Comentário'
          as='textarea'
          onChange={handleInput}
          value={comment}
          disabled={buttonDisabled}
        />
        <div className='button-container'>
          <Button
            Icon={IoMdSend}
            text={buttonDisabled ? 'Enviando' : 'Enviar'}
            disabled={buttonDisabled}
          />
        </div>
      </S.Form>
    </S.Main>
  )
}
