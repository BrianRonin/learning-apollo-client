import { useState, FormEvent } from 'react'
import * as S from './styles'
import { Button } from '../../Button/button_0'
import { Input } from '../../Input/input_0'

type Post = {
  title: string
  content: string
}

export type formPostProps = {
  onSave?: (post: Post) => any
  post?: Post
}

export const FormPost = ({
  onSave,
  post,
}: formPostProps) => {
  const { title = '', content = '' } = post || {}
  const [newTitle, setNewTitle] = useState(title)
  const [newContent, setNewContent] =
    useState(content)
  const [saving, setSaving] = useState(false)

  const handleSubmit = async (
    event: FormEvent,
  ) => {
    setSaving(true)
    event.preventDefault()
    const newPost = {
      title: newTitle,
      content: newContent,
    }

    if (onSave) {
      await onSave(newPost)
    }

    setSaving(false)
  }

  return (
    <S.Main onSubmit={handleSubmit}>
      <Input
        name='post-title'
        label='Titulo'
        value={newTitle}
        onChange={(v) => setNewTitle(v)}
      />
      <Input
        name='post-content'
        label='Conteudo'
        value={newContent}
        onChange={(v) => setNewContent(v)}
        as='textarea'
      />
      <div
        style={{
          justifyContent: 'center',
          display: 'flex',
          marginTop: '5rem',
        }}
      >
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
    </S.Main>
  )
}
