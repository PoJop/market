import { GetServerSideProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useTranslation } from 'react-i18next'



export default function Home() {

  const { t } = useTranslation('common')
  
  return (
    <>
    
    </>
  )
}



export const getServerSideProps: GetServerSideProps = async ({ req, res, locale = '' }) => {



  return {
    props: {
      ...(await serverSideTranslations(locale, ['common']))
    }
  }
}