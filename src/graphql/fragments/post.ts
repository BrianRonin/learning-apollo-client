import { gql } from '@apollo/client'

export const fragment_post = gql`
  fragment post on Post {
    title
    body
    createdAt
    id
    title
  }
`
