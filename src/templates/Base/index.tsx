import { ReactNode, Suspense, useEffect, useState } from 'react'
import { Sidebar } from '../../components/Sidebar/sidebar_0/sidebar'
import { ToggleTheme } from '../../components/Switch/toggle_theme'
import { authVariables, useUser } from '../../graphql/vars/auth'
import * as S from './styles'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useTheme } from '@emotion/react'
import { Loading } from '../../components/loading'
import { navLinkProps } from '../../components/Sidebar/sidebar_0/nav_link'
import { useRouter } from 'next/router'
import { useSubscription } from '@apollo/client'
import { gql_onComment } from '../../graphql/subscriptions/onComment'

export type baseProps = {
  children: ReactNode
}

export const Base = ({ children }: baseProps) => {
  const theme = useTheme()
  const router = useRouter()
  const [name, setName] = useState('')

  useSubscription(gql_onComment, {
    onSubscriptionData({ subscriptionData }) {
      console.log(subscriptionData.data)
    },
  })

  useEffect(() => {
    setName(authVariables.var.userName)
  }, [])

  const handleLogout = async () => {
    authVariables.reset()
    await router.push({ pathname: '/' })
    window.location.reload()
  }

  const links: navLinkProps[] = [
    {
      link: '/',
      text: 'Posts',
      visible: true,
      newTab: false,
    },
  ]

  if (name) {
    links.push(
      {
        link: '/mutate-post',
        text: 'Criar post',
        visible: true,
        newTab: false,
      },
      {
        link:
          '/posts?author=' +
          encodeURIComponent(authVariables.var.id ?? ''),
        text: 'Meus posts',
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
        onClick: handleLogout,
      },
    )
  } else {
    links.push({
      link: '/login',
      text: 'Login',
      visible: true,
      newTab: false,
    })
  }

  return (
    <S.Main>
      <Sidebar title={name} links={links} />
      <ToggleTheme />
      <ToastContainer
        progressStyle={{
          color: theme.colors.primary[2],
          background: theme.colors.primary[2],
        }}
        theme={theme.name === 'dark' ? 'dark' : 'light'}
      />
      {/* <button onClick={testToast}>eeeeeee</button> */}
      <S.Content>{children}</S.Content>
    </S.Main>
  )
}
