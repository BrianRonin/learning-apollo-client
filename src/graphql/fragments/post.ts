import { gql } from '@apollo/client'
import { fragment_comment } from './comment'
import { fragment_user } from './user'

export const fragment_post = gql`
  ${fragment_user}
  ${fragment_comment}
  fragment post on Post {
    title
    body
    createdAt
    id
    title
    userId
    numberOfComments @client
    user {
      ...user
    }
    comments {
      ...comment
    }
  }
`
