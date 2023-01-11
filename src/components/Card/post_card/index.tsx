import { User } from '../../../types/backend'
import { Container } from '../../Container/container_1'
import * as S from './styles'
import { dateFormatter } from '../../../utils/date-formater'
import { Button } from '../../Button/button_0'

import {
  AiFillDelete,
  AiFillEdit,
} from 'react-icons/ai'

export type postCardProps = {
  title: string
  numberOfComments: number
  createdAt: string
  author: User
}

export const PostCard = ({
  title,
  numberOfComments,
  createdAt,
  author,
}: postCardProps) => {
  return (
    <S.Main>
      <Container>
        <S.Heading>{title}</S.Heading>
        <S.Meta>
          de
          <S.MetaItem>
            {author.firstName}
          </S.MetaItem>
          em
          <S.MetaItem>
            {dateFormatter(createdAt)}
          </S.MetaItem>
          Comments:
          <S.MetaItem>
            {numberOfComments}
          </S.MetaItem>
        </S.Meta>
        <S.PostTools>
          <Button icon={<AiFillEdit />} />
          <Button icon={<AiFillDelete />} />
        </S.PostTools>
      </Container>
    </S.Main>
  )
}
