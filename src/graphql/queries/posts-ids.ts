import { gql } from '@apollo/client'

const gql_posts_ids = gql`
  query idsOfPosts {
    posts {
      ... on Post {
        id
        userId
      }
    }
  }
`
export default gql_posts_ids
