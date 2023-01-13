import type { AppProps } from 'next/app'
import { GlobalStyles } from '../styles/globals'
import { Roboto } from '@next/font/google'
import { Theme } from '../contexts/theme/theme'
import { Base } from '../templates/Base'
import { ApolloProvider } from '@apollo/client'
import { apolloClient } from '../graphql/apollo/client'
const myFont = Roboto({
  style: ['normal', 'italic'],
  weight: ['100', '300', '500', '900'],
  subsets: ['latin'],
})

export default function App({
  Component,
  pageProps,
}: AppProps) {
  return (
    <ApolloProvider client={apolloClient}>
      <Theme>
        <GlobalStyles />
        <main className={myFont.className}>
          <Base>
            <Component {...pageProps} />
          </Base>
        </main>
      </Theme>
    </ApolloProvider>
  )
}
