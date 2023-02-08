import { Post as TPost } from '../../templates/post'

export default function PagePost() {
  return <TPost />
}

// export async function getStaticProps(ctx: {
//   params: { id: string }
// }) {
//   const { data } = await apolloClient.query<{
//     post: Post
//   }>({
//     query: gql_post,
//     variables: { id: ctx.params.id },
//   })
//   // if (data)
//   //   console.log(' data: ', data.post.comments)
//   if (data.post) {
//     return {
//       props: {
//         post: data.post,
//       },
//       revalidate: 30,
//     }
//   }
// }

// export const getStaticPaths = async () => {
//   const { data, loading } = await apolloClient.query<{
//     posts: Post[]
//   }>({
//     query: gql_posts_ids,
//   })

//   if (data && !loading) {
//     const paths = data.posts.map((post) => {
//       return { params: { id: post.id } }
//     })
//     return {
//       paths,
//       fallback: true,
//     }
//   }
// }
