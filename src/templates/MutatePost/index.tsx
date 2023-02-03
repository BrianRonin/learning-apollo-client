import {
  useLazyQuery,
  useQuery,
} from '@apollo/client'
import { useRouter } from 'next/router'
import { useEffect, useState } from 'react'
import { useWindowSize } from 'usehooks-ts'
import { S_Container } from '../../components/Container/container_0/styles'
import { Container } from '../../components/Container/container_1'
import { FormPost } from '../../components/Form/form_post'
import gql_post from '../../graphql/queries/post'
import { Post } from '../../types/backend'
import { Base } from '../Base'
import * as S from './styles'

export type mutatePostProps = { post?: any }

export const MutatePost = () => {
  const router = useRouter()
  const { id = false } = router.query

  const [post, setPost] =
    useState<undefined | Post>()

  useQuery<{ post: Post }>(gql_post, {
    onCompleted: ({ post }) => {
      setPost(post)
    },
    variables: { id },
  })

  // useEffect(() => {
  //   console.log(id)
  //   if (id) {
  //     getPost({ variables: { id } })
  // }, [])

  if (!post)
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
      <FormPost post={post} />
    </S.Main>
  )
}
