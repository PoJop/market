import { UiKit } from '@/shared'
import { initializeApolloHygraph } from '@/shared/libs/apollo'
import { ApolloQueryResult, gql } from '@apollo/client'
import { GetServerSideProps, } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'



export default function BlogSingleArticle() {


    return (
        <>
            <UiKit.Main role="main" className='h-full min-h-full'>
            </UiKit.Main>
        </>
    )
}



export const getServerSideProps: GetServerSideProps = async ({ locale = '' }) => {

    return {
        props: {
            ...(await serverSideTranslations(locale, ['common', 'routers']))
        }
    }
}
