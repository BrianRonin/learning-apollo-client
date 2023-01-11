import { ReactNode } from 'react'
import { Sidebar } from '../../components/Sidebar/sidebar_0/sidebar'
import { ToggleTheme } from '../../components/Switch/toggle_theme'
import * as Me from '../../mock/Me.json'
import * as S from './S.Base'

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
            link: '/create-post',
            text: 'Criar post',
            visible: true,
            newTab: false,
          },
          {
            link: '/settings',
            text: 'Configurações',
            visible: true,
            newTab: false,
          },
        ]}
      />
      <ToggleTheme />
      {children}
    </S.Main>
  )
}
