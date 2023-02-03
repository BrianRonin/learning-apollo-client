import {
  useState,
  FormEvent,
  useEffect,
} from 'react'
import * as S from './styles'
import { Button } from '../../Button/button_0'
import { Input } from '../../Input/input_0'
import { Form } from '../form'

type Post = {
  title: string
  body: string
}

export type formPostProps = {
  onSave?: (post: Post) => any
  post?: Partial<Post>
}

export const FormPost = ({
  onSave,
  post,
}: formPostProps) => {
  const { title = '', body = '' } = post || {}
  const [newTitle, setNewTitle] = useState(title)
  const [newBody, setNewBody] = useState(body)
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (
    event: FormEvent,
  ) => {
    setSaving(true)
    event.preventDefault()
    const newPost = {
      title: newTitle,
      body: newBody,
    }

    if (onSave) {
      await onSave(newPost)
    }

    setSaving(false)
  }

  return (
    <S.Main>
      <Form meta={{ onSubmit: handleSubmit }}>
        <div className='body-form'>
          <Input
            name='post-title'
            label='Titulo'
            value={newTitle}
            onChange={(v) => setNewTitle(v)}
          />
          <Input
            name='post-body'
            label='Conteudo'
            value={newBody}
            onChange={(v) => setNewBody(v)}
            as='textarea'
          />
          <div className='container-button'>
            <Button
              disabled={saving}
              meta={{
                type: 'submit',
                style: { width: '100%' },
              }}
            >
              {saving ? 'Salvando...' : 'Salvar'}
            </Button>
          </div>
          {/* <ul className='error-message'>
            <li>um erro</li>
          </ul> */}
        </div>
      </Form>
    </S.Main>
  )
}
