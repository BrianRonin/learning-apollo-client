import { postCardProps } from './index'
import post from '../../../mock/Post.json'

export const mock_post_card: postCardProps = {
  posts: [
    {
      title: 'um titulo',
      comments: post.data.post.comments,
      user: post.data.post.user,
      createdAt: post.data.post.createdAt,
    },
  ],
}
