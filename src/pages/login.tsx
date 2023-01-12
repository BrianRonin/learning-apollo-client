import { Login } from '../templates/Login'

export default function PageLogin() {
  return (
    <Login
      handleLogin={() =>
        console.log('logado com sucesso!')
      }
    />
  )
}
