import { gql } from '@apollo/client'
import { fragment_user } from './user'

export const fragment_comment = gql`
  ${fragment_user}
  fragment comment on Comment {
    comment
    id
    created_at
    user {
      ...user
    }
  }
`
