import { useEffect } from 'react'
import { Comment as tComment } from '../../../types/backend'
import { dateFormatter } from '../../../utils/date-formater'
import { Container } from '../../Container/container_1'
import * as S from './styles'

export const Comment = ({
  comments,
}: {
  comments: tComment[]
}) => {
  return (
    <S.Main>
      {comments.map(({ user, comment, created_at }, index) => (
        <Container key={'comment-key-' + index}>
          <S.CommentMeta>
            <S.CommentMetaItem>
              {user.userName}
            </S.CommentMetaItem>
          </S.CommentMeta>
          <S.CommentBody>{comment}</S.CommentBody>
          <S.CommentMeta>
            <S.CommentMetaItem>
              {created_at &&
                dateFormatter(created_at, {
                  isMiliseconds: true,
                })}
            </S.CommentMetaItem>
          </S.CommentMeta>
        </Container>
      ))}
    </S.Main>
  )
}
