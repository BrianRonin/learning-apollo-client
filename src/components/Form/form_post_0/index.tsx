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
        label='Post Content'
        value={newContent}
        onChange={(v) => setNewContent(v)}
        as='textarea'
      />
      <Button disabled={saving} type='submit'>
        {saving ? 'Salvando...' : 'Salvar'}
      </Button>
    </S.Main>
  )
}
