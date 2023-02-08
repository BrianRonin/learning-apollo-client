import { gql } from '@apollo/client'
import { fragment_post } from '../fragments/post'

export const gql_posts = gql`
  ${fragment_post}
  query Posts(
    $sort: String = "indexRef"
    $order: Order = DESC
    $start: String = "0"
    $limit: String = "10"
    $userId: ID = ""
  ) {
    posts(
      filter: {
        _sort: $sort
        _order: $order
        _start: $start
        _limit: $limit
      }
      userId: $userId
    ) {
      ... on Post {
        ...post
      }
    }
  }
`
