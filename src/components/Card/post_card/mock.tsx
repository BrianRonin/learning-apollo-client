import { postCardProps } from './index'
import post from '../../../mock/Post.json'

export const mock_post_card = {
  title: post.data.post.title,
  numberOfComments:
    post.data.post.comments.length,
  createdAt: post.data.post.createdAt,
  author: post.data.post.user,
} as postCardProps
