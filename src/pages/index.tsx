import { Base } from '../templates/Base'
import MPosts from '../mock/Posts.json'
import { Post } from '../types/backend'
import { useEffect, useState } from 'react'
import { Posts as TemplatePosts } from '../templates/Posts'

export default function Home() {
  const [posts, setPosts] = useState<Post[]>([])
  const [hasMore, setHasMore] = useState(false)
  const _posts = MPosts.data.posts
  const initialPosts = 5

  useEffect(() => {
    loadMore()
    if (_posts.length > initialPosts) {
      setHasMore(true)
    } else {
      setHasMore(false)
    }
    return () => {
      setPosts(() => [])
    }
  }, [])

  const loadMore = () => {
    setPosts((p = []) => {
      const resolve = [...p]
      for (let i = 0; i <= initialPosts; i++) {
        if (_posts[resolve.length + 1]) {
          resolve.push(
            _posts[resolve.length + 1] as Post,
          )
        }
      }
      console.log('resolve: ', resolve.length)
      console.log('__: ', _posts.length)
      if (resolve.length + 1 >= _posts.length) {
        setHasMore(false)
      }
      return resolve as Post[]
    })
  }
  return (
    <TemplatePosts
      loadMore={loadMore}
      posts={posts}
      hasMore={hasMore}
    />
  )
}
