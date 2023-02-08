import { useMutation, useQuery } from '@apollo/client'
import { Router, useRouter } from 'next/router'
import { useEffect } from 'react'
import { Comment } from '../../components/Comment/comment_0'
import { S_Container } from '../../components/Container/container_0/styles'
import { FormComment } from '../../components/Form/form_comment'
import { Loading } from '../../components/loading'
import { Heading } from '../../components/Text/heading_0'
import { Text } from '../../components/Text/text_0'
import { gql_createComment } from '../../graphql/mutations/createComment'
import gql_post from '../../graphql/queries/post'
import { Post as tPost } from '../../types/backend'
import * as S from './styles'

export const Post = () => {
  const router = useRouter()
  const { id } = router.query

  const {
    data,
    loading: PostLoading,
    error,
  } = useQuery<{
    post: tPost
  }>(gql_post, {
    variables: {
      id,
    },
  })

  const [createComment, { loading }] = useMutation(
    gql_createComment,
    {
      update(cache, { data }) {
        const postRef = cache.identify({
          __typename: 'Post',
          id,
        })
        cache.modify({
          id: postRef,
          fields: {
            comments(existing) {
              return [...existing, data.createComment]
            },
          },
        })
      },
    },
  )

  const handleCreateComment = async (comment: string) => {
    if (comment) {
      await createComment({
        variables: { comment, postId: id },
      })
    }
  }

  if (PostLoading) return <Loading />
  if (error)
    return (
      <S_Container>
        <h1>Ocorreu um erro ._.</h1>
      </S_Container>
    )
  if (!data) return <h1>loading</h1>
  const { post } = data

  return (
    <S.Main>
      <Heading as='h1'>{post.title}</Heading>
      <hr style={{ marginBottom: '5rem' }} />
      <Text>{post.body}</Text>
      <hr style={{ marginTop: '5rem' }} />
      <FormComment
        buttonDisabled={loading}
        handleSubmit={handleCreateComment}
      />
      <Comment comments={post.comments} />
    </S.Main>
  )
}
