import { gql } from '@apollo/client'

export const gql_posts = gql`
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
        title
        id
        createdAt
        userId
        comments {
          id
        }
        user {
          userName
        }
      }
    }
  }
`
