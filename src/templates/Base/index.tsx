import { ReactNode } from 'react'
import { Sidebar } from '../../components/Sidebar/sidebar_0/sidebar'
import { ToggleTheme } from '../../components/Switch/toggle_theme'
import { authVariables } from '../../graphql/vars/auth'
import * as Me from '../../mock/Me.json'
import * as S from './styles'

export type baseProps = {
  children: ReactNode
}

export const Base = ({ children }: baseProps) => {
  return (
    <S.Main>
      <Sidebar
        title={Me.data.me.firstName ?? ''}
        links={[
          {
            link: '/',
            text: 'Posts',
            visible: true,
            newTab: false,
          },
          {
            link:
              '/posts?author=' +
              encodeURIComponent(
                authVariables.var.id ?? '',
              ),
            text: 'Meus posts',
            visible: true,
            newTab: false,
          },
          {
            link: '/mutate-post',
            text: 'Criar post',
            visible: true,
            newTab: false,
          },
          {
            link: '/login',
            text: 'Login',
            visible: true,
            newTab: false,
          },
          {
            link: '/settings',
            text: 'Configurações',
            visible: true,
            newTab: false,
          },
          {
            link: '/logout',
            text: 'Sair',
            visible: true,
            newTab: false,
          },
        ]}
      />
      <ToggleTheme />
      <S.Content>{children}</S.Content>
    </S.Main>
  )
}
