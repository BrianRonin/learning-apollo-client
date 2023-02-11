import { Post } from '../../../types/backend'
import { Container } from '../../Container/container_1'
import * as S from './styles'
import { dateFormatter } from '../../../utils/date-formater'
import { Button } from '../../Button/button_0'

import { AiFillDelete, AiFillEdit } from 'react-icons/ai'
import { HtmlHTMLAttributes, MouseEvent } from 'react'
import {
  authVariables,
  useUser,
} from '../../../graphql/vars/auth'

export type postCardProps = {
  posts?: Post[]
  isLoading?: undefined | number[]
  onClick?: (e: MouseEvent<HTMLDivElement>, post: Post) => any
  onDelete?: (id: string) => any
  onEdit?: (id: string) => any
}

const PostCard = ({
  posts,
  isLoading,
  onClick,
  onDelete = () => undefined,
  onEdit = () => undefined,
}: postCardProps) => {
  const { id } = useUser()

  if (isLoading)
    return (
      <S.Main>
        {isLoading.map((_, index) => (
          <Container
            key={'post-id-loadign-' + index}
            meta={{ className: 'loading' }}
          >
            <S.ContainerLoading />
          </Container>
        ))}
      </S.Main>
    )

  const handleOnClick = (
    e: MouseEvent<HTMLDivElement>,
    index: number,
  ) => {
    const post = posts![index]

    if (
      (e.target as Element).nodeName !== 'svg' &&
      (e.target as Element).nodeName !== 'path' &&
      (e.target as Element).nodeName !== 'BUTTON'
    )
      return onClick && onClick(e, post)
  }

  return (
    <S.Main>
      {posts &&
        posts.map(
          (
            {
              title,
              user,
              createdAt,
              userId,
              id: postId,
              numberOfComments,
            },
            index,
          ) => (
            <Container
              key={'post-id-' + index}
              meta={{
                onClick: (e) => handleOnClick(e, index),
              }}
            >
              <S.Heading>{title}</S.Heading>
              <S.Meta>
                De:
                <S.MetaItem>{user?.userName}</S.MetaItem>
                <br />
                Em:
                <S.MetaItem>
                  {dateFormatter(createdAt ?? '')}
                </S.MetaItem>
                <br />
                Comentários:
                <S.MetaItem>{numberOfComments}</S.MetaItem>
              </S.Meta>
              {id === userId && (
                <S.PostTools>
                  <Button
                    icon={<AiFillEdit />}
                    onClick={() => onEdit(postId)}
                  />
                  <Button
                    icon={<AiFillDelete />}
                    onClick={() => onDelete(postId)}
                  />
                </S.PostTools>
              )}
            </Container>
          ),
        )}
    </S.Main>
  )
}

export default PostCard
