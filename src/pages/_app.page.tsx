import '../app/styles/globals.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import React from 'react'
import { Footer, Header } from '@/widgets'
import { firaSansFont } from '@/app/fonts/fira-sans'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/app/libs/apollo/apollo-client'



function App({ Component, pageProps }: AppProps) {
  const apolloClient = useApollo(pageProps)

  return (
    <ApolloProvider client={apolloClient}>
      <div className={firaSansFont.className}>
        <Header />
        <Component {...pageProps} />
        <Footer />
      </div>
    </ApolloProvider>
  )
}

export default appWithTranslation(App)