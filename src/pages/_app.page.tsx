import '../app/styles/globals.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import React from 'react'
import { Footer, Header } from '@/widgets'
import { firaSansFont } from '@/app/fonts/fira-sans'



function App({ Component, pageProps }: AppProps) {

  return (
    <div className={firaSansFont.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default appWithTranslation(App)