import { Base } from '../templates/Base/Base'
import MPosts from '../mock/Posts.json'
import { mock_post_card } from '../components/Card/post_card/mock'
import { PostCard } from '../components/Card/post_card'
import { Post, User } from '../types/backend'
import { useEffect, useState } from 'react'
import { Button } from '../components/Button/button_0'

export default function Home() {
  const [posts, setPosts] = useState<Post[]>()
  const [indexPosts, setIndexPosts] = useState(3)
  const _posts = MPosts.data.posts

  useEffect(() => {
    loadMore()
    return () => {
      setPosts(() => undefined)
    }
  }, [])

  const loadMore = () => {
    setPosts((p = []) => {
      const resolve = [...p]
      for (let i = 0; i < 4; i++) {
        resolve.push(
          _posts[resolve.length + 1] as Post,
        )
      }
      return resolve
    })
  }
  return (
    <Base>
      <div
        style={{
          marginTop: '5rem',
          marginBottom: '5rem',
        }}
      >
        {posts &&
          posts.map((post, i) => {
            return (
              <PostCard
                key={i}
                author={post.user as User}
                createdAt={post.createdAt}
                numberOfComments={
                  post.comments.length
                }
                title={post.title}
              ></PostCard>
            )
          })}
      </div>
    </Base>
  )
}
