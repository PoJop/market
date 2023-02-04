import '../app/styles/globals.scss'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'
import React from 'react'
import { adventProFont } from 'app/fonts/advent-pro'
import { Footer, Header } from 'widgets'



function App({ Component, pageProps }: AppProps) {

  return (
    <div className={adventProFont.className}>
      <Header />
      <Component {...pageProps} />
      <Footer />
    </div>
  )
}

export default appWithTranslation(App)