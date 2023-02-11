import { gql } from '@apollo/client'
import { fragment_comment } from '../fragments/comment'

export const gql_onComment = gql`
  ${fragment_comment}
  subscription {
    onCreateComment {
      ...comment
    }
  }
`
