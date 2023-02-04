import { gql } from '@apollo/client'

export const gql_createPost = gql`
  mutation createPost($body: String!, $title: String!) {
    createPost(postInput: { body: $body, title: $title }) {
      body
    }
  }
`
