import { Container } from '@/shared/ui-kit';


// function Error({ statusCode }: { statusCode: number }) {
//     return (


//     )
// }
// interface Context extends NextPageContext {
//     // any modifications to the default context, e.g. query types
// }

// Error.getInitialProps = async ({ res, err, locale = ''  }: Context) => {

//     console.log(locale)

//     const statusCode = res ? res.statusCode : err ? err.statusCode : 404
//     return { 
//         statusCode, 
//         ...(await serverSideTranslations(locale, ['common', 'routers']))
//      }
// }

// export default Error

import { GetStaticProps } from 'next'
import { useTranslation } from 'next-i18next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export const getStaticProps: GetStaticProps = async ({  locale }) => {

    // const statusCode = res ? res.statusCode : err ? err.statusCode : 404
    return {
        props: {
            ...(await serverSideTranslations(locale ?? "en", ['errors', 'routers']))
        },
    }
}

const NotFoundPage = () => {
    const { t } = useTranslation('errors')
    return <>
        <main role="main" className='flex items-center justify-center w-full h-[100vh]'>
            <Container className='flex items-center justify-center '>
                <p>
                   {t("404.message")}
                </p>
            </Container>
        </main>
    </>
}

export default NotFoundPage