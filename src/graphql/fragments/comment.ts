import { gql } from '@apollo/client'

export const fragment_comment = gql`
  fragment comment on Comment {
    comment
    id
    created_at
    user {
      ...user
    }
  }
`
