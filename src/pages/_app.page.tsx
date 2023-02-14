import '../app/styles/globals.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import React from 'react'
import { Footer, Header } from '@/widgets'
import { firaSansFont } from '@/app/fonts/fira-sans'
import { ApolloProvider } from '@apollo/client'
import { useApollo } from '@/app/libs/apollo/apollo-client'
// import { Provider } from 'react-redux'
// import store from '@/app/store/store'
// import { useAppMode } from '@/app/hooks/useAppMode'
// import { changeAppModeReduce } from '@/app/store/slice/appSlice/appSlice'



function App({ Component, pageProps }: AppProps) {


  const apolloClient = useApollo(pageProps)

  // useAppMode({
  //   initCallback: (mode) => { store.dispatch(changeAppModeReduce({ mode })) }
  // })

  return (
    <ApolloProvider client={apolloClient}>
      {/* <Provider store={store}> */}
        <div className={firaSansFont.className}>
          <Header />
          <Component {...pageProps} />
          <Footer />
        </div>
      {/* </Provider> */}
    </ApolloProvider>
  )
}

export default appWithTranslation(App)