import * as mock from '../mock/Posts.json'

export type User = {
  id: string
  userName: string
  email?: string
  createdAt: string
}

export type Comment = {
  comment: string
  id: string
  user: User
  created_at: string
}

export type Post = {
  body: string
  createdAt: string
  id: string
  title: string
  userId: string
  user: User
  comments: Comment[]
}

export type Auth = {
  token: string
  expires: string
}
