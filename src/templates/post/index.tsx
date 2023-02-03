import { Comment } from '../../components/Comment/comment_0'
import { FormComment } from '../../components/Form/form_comment'
import { Heading } from '../../components/Text/heading_0'
import { Text } from '../../components/Text/text_0'
import { Post as typePost } from '../../types/backend'
import * as S from './styles'

export type postProps = { post: typePost }

export const Post = ({ post }: postProps) => {
  return (
    <S.Main>
      <Heading as='h1'>{post.title}</Heading>
      <hr style={{ marginBottom: '5rem' }} />
      <Text>{post.body}</Text>
      <hr style={{ marginTop: '5rem' }} />
      <FormComment />
      <Comment comments={post.comments} />
    </S.Main>
  )
}
