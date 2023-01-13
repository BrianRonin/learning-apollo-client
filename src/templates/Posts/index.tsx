import { useEffect } from 'react'
import { Button } from '../../components/Button/button_0'
import { PostCard } from '../../components/Card/post_card'
import { Heading } from '../../components/Text/heading_0'
import { Post } from '../../types/backend'
import * as S from './styles'

export type postsProps = {
  posts: Post[]
  loadMore: () => any
  hasMore: boolean
}

export const Posts = ({
  posts,
  loadMore,
  hasMore,
}: postsProps) => {
  return (
    <S.Main>
      {posts &&
        posts.map((post, i) => (
          <PostCard
            key={i}
            author={post.user}
            createdAt={post.createdAt}
            numberOfComments={
              post.comments.length
            }
            title={post.title}
          />
        ))}
      {hasMore && (
        <S.ContainerButtonLoadMores>
          <Button outline onClick={loadMore}>
            Carregar mais
          </Button>
        </S.ContainerButtonLoadMores>
      )}
      {!hasMore && (
        <Heading as={'h3'} size='small'>
          Parabéns você chegou ao fim do mar
          profundo
        </Heading>
      )}
    </S.Main>
  )
}
