import { Post } from './backend'

export interface tForm {
  mutatePost: Pick<Post, 'body'> & Pick<Post, 'title'>
}
