import { setContext } from '@apollo/client/link/context'
import { authVariables } from '../vars/auth'

export const authLink = setContext(
  (_: any, { headers }: { headers: Record<string, any> }) => {
    const authCtx = authVariables.var.token // operation.getContext().auth
    const auth = authCtx
      ? {
          authorization: 'Bearer ' + authCtx,
        }
      : {
          naoDeu: 'aqui',
        }

    return {
      headers: {
        ...headers,
        ...auth,
      },
    }
  },
)
