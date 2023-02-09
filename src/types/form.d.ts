import { Post } from './backend'

export interface tForm {
  mutatePost: Pick<Post, 'body'> & Pick<Post, 'title'>
  updateUser: {
    password: string
    input: {
      email: string
      userName: string
    }
  }
}
