import * as mock from '../mock/Posts.json'

export type User = {
  firstName: string
  lastName: string
  id: string
  userName: string
  email?: string
  createdAt: string
}

export type Comment = {
  comment: string
  id: string
  user: User
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
