import '@/app/styles/globals.scss'
import { Advent_Pro } from '@next/font/google'
import type { AppProps } from 'next/app'
import { appWithTranslation } from 'next-i18next'

const adventPro = Advent_Pro({ subsets: ['latin', "cyrillic"], weight: ["400"] })


function App({ Component, pageProps }: AppProps) {


  return (
    <div className={adventPro.className}>
      <Component {...pageProps} />
    </div>
  )
}

export default appWithTranslation(App)