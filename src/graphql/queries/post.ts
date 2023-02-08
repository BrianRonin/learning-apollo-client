import { gql } from '@apollo/client'
import { fragment_comment } from '../fragments/comment'
import { fragment_post } from '../fragments/post'
import { fragment_user } from '../fragments/user'

const gql_post = gql`
  ${fragment_comment}
  ${fragment_post}
  ${fragment_user}

  query Post($id: ID!) {
    post(id: $id) {
      ... on Post {
        ...post
      }
    }
  }
`
export default gql_post
