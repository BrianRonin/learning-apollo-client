import { dateFormatter } from '../../../utils/date-formater'
import { Container } from '../../Container/container_1'
import * as S from './styles'
export type commentProps = {
  comment: string
  createdAt: string
  user: { firstName: string }
}

export const Comment = ({
  comment,
  user,
  createdAt,
}: commentProps) => {
  return (
    <S.Main>
      <Container>
        <S.CommentMeta>
          <S.CommentMetaItem>
            {user.firstName}
          </S.CommentMetaItem>
          <span>said:</span>
        </S.CommentMeta>
        <S.CommentBody>{comment}</S.CommentBody>
        <S.CommentMeta>
          <span>At</span>
          <S.CommentMetaItem>
            {dateFormatter(createdAt)}
          </S.CommentMetaItem>
        </S.CommentMeta>
      </Container>
    </S.Main>
  )
}
