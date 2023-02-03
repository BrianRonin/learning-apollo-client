import { Base } from '../templates/Base'
import MPosts from '../mock/Posts.json'
import { Post } from '../types/backend'
import { useEffect, useState } from 'react'
import { Posts as TemplatePosts } from '../templates/Posts'

export default function Home() {
  return <TemplatePosts />
}
