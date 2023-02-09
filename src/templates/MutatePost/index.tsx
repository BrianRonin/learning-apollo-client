import { useMutation, useQuery } from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { S_Container } from '../../components/Container/container_0/styles'
import { FormPost } from '../../components/Form/form_post'
import gql_post from '../../graphql/queries/post'
import { gql_editPost } from '../../graphql/mutations/editPost'
import { Post } from '../../types/backend'
import { tForm } from '../../types/form'
import * as S from './styles'
import { toast } from 'react-toastify'
import { useUser } from '../../graphql/vars/auth'
import { gql_createPost } from '../../graphql/mutations/createPost'

export type mutatePostProps = { post?: any }

export const MutatePost = () => {
  const { id: userId } = useUser()
  const router = useRouter()
  const { id } = router.query

  const [post, setPost] = useState<undefined | Post>()

  /**
   * Graphql Consults
   */

  const { error } = useQuery<{ post: Post }>(gql_post, {
    skip: typeof id !== 'string',
    onCompleted: ({ post }) => {
      setPost(post)
    },
    variables: { id },
  })

  const [editPost] = useMutation(gql_editPost, {
    onCompleted: () => {
      if (id) {
        toast.success('Post editado 👻')
        router.push('/')
      }
    },
    onError: () => {
      toast.error('Ocorreu um erro ao editar o post 🙁')
      router.push('/')
    },
  })

  const [createPost] = useMutation(gql_createPost, {
    onCompleted: (e, op) => {
      if (!id) {
        toast.success('Post criado 👻')
        router.push('/')
      }
    },
    onError: () => {
      toast.error('Ocorreu um erro ao criar o post 🙁')
      router.push('/')
    },
  })

  /**
   * UseEffects
   */

  useEffect(() => {
    if (id && !userId) {
      toast.error('Você não esta logado para isso')
      router.push('/')
    }

    if (post && post.user.id !== userId) {
      toast.error('Você não permisão para editar este post')
      router.push('/')
    }
  }, [post])

  /**
   * Handles
   */

  const handleEditPost = async (form: tForm['mutatePost']) => {
    if (!form?.body || !form?.title) return
    await editPost({
      variables: {
        id,
        ...form,
      },
    })
  }

  const handleCreatePost = async (form: tForm['mutatePost']) => {
    createPost({
      variables: form,
    })
  }

  const handleSubmit = (form: tForm['mutatePost']) => {
    if (id) return handleEditPost(form)
    return handleCreatePost(form)
  }

  if (!post && id)
    return (
      <S_Container
        style={{
          display: 'flex',
          justifyContent: 'center',
        }}
      >
        <S.LoadingAnimation></S.LoadingAnimation>
      </S_Container>
    )

  return (
    <S.Main>
      <FormPost post={post} onSave={handleSubmit} />
    </S.Main>
  )
}
