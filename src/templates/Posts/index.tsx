import { Reference, useMutation, useQuery } from '@apollo/client'
import Router, { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { useIsMounted } from 'usehooks-ts'
import PostCard from '../../components/Card/post_card'
import { S_Container } from '../../components/Container/container_0/styles'
import { Heading } from '../../components/Text/heading_0'
import { gql_deletePost } from '../../graphql/mutations/deletePost'
import { gql_posts } from '../../graphql/queries/posts'
import { useUser } from '../../graphql/vars/auth'
import { usePageBottom } from '../../hooks/usePageBottom'
import { Post } from '../../types/backend'
import * as S from './styles'

export const Posts = ({ myPosts }: { myPosts?: boolean }) => {
  const router = useRouter()
  const { query } = useRouter()
  const initialPosts = '5'
  const { id } = useUser()
  const { data, fetchMore, error, loading, refetch } = useQuery<{
    posts: Post[]
  }>(gql_posts, {
    variables: {
      limit: initialPosts,
      userId: myPosts ? id : '',
    },
  })

  const [deletePost] = useMutation(gql_deletePost)

  const [loadingMore, setLoadingMore] = useState(false)
  const [allLoaded, setAllLoaded] = useState(false)

  useEffect(() => {
    refetch({
      userId: myPosts ? query.author : '',
    })
  }, [myPosts])

  const handleEdit = async (id: string) => {
    router.push({
      query: { id },
      href: '/mutate-post',
      pathname: '/mutate-post',
    })
  }

  const handleDeletePost = async (postId: string) => {
    deletePost({
      variables: { id: postId },
      update(cache) {
        cache.modify({
          fields: {
            posts(existing, { readField }) {
              return existing.filter((postRef: Reference) => {
                const refId = readField({
                  fieldName: 'id',
                  from: postRef,
                })
                return postId !== refId
              })
            },
          },
        })
      },
    })
    toast('Post deletado 👻')
  }

  const handleLoadMore = async () => {
    if (
      !allLoaded &&
      data?.posts.length &&
      !loading &&
      !loadingMore &&
      !myPosts
    ) {
      setLoadingMore(true)
      await new Promise(() =>
        setTimeout(async () => {
          const { data: newPosts } = await fetchMore({
            variables: {
              start: data.posts.length.toString(),
              limit: initialPosts,
            },
          })
          setLoadingMore(false)
          if (newPosts.posts.length === 0) {
            setAllLoaded(true)
          }
        }, 0),
      )
    }
  }

  const bottomRef = usePageBottom(handleLoadMore)

  if (error)
    return (
      <S_Container style={{ textAlign: 'center' }}>
        <h1>Ocorreu um erro ._.</h1>
        {error.message}
      </S_Container>
    )

  return (
    <S.Main>
      {data?.posts && (
        <PostCard
          posts={data.posts}
          onClick={(e, p) => Router.push('/post/' + p.id)}
          onDelete={handleDeletePost}
          onEdit={handleEdit}
        />
      )}
      {data?.posts && data.posts.length === 0 && (
        <S_Container
          style={{ display: 'flex', justifyContent: 'center' }}
        >
          <h1>Sem posts ._.</h1>
        </S_Container>
      )}
      {(loadingMore || loading) && !allLoaded && (
        <PostCard isLoading={[1]} />
      )}
      {allLoaded && (
        <Heading size='medium'>Você chegou ao fim</Heading>
      )}
      <div ref={bottomRef}></div>
    </S.Main>
  )
}
