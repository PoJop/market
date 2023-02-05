import { GetServerSideProps,  } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {


  return (
    <>
      <main role="main">

      </main>
    </>
  )
}



export const getServerSideProps : GetServerSideProps  = async ({ locale = '' }) => {

  return {
      props: {
          ...(await serverSideTranslations(locale, ['common', 'routers']))
      }
  }
}

