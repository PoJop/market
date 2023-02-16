import { UiKit } from '@/shared'
import { initializeApolloHygraph } from '@/shared/libs/apollo'
import { BlogPreview, Promotion, Welcome } from '@/widgets'
import { ApolloQueryResult, gql } from '@apollo/client'
import { GetServerSideProps, } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {


  return (
    <>
      <UiKit.Main role="main" className=''>
        <Welcome />
        <Promotion />
        <BlogPreview />
      </UiKit.Main>
    </>
  )
}



export const getServerSideProps: GetServerSideProps = async ({ locale = '' }) => {
//   const clientHygraph = initializeApolloHygraph()

//   let res: ApolloQueryResult<any> | null = null

//   try {
//     res = await clientHygraph.query({
//       query: gql`
//       query Smths {
//   smths {
//     createdAt
//     id
//     publishedAt
//     title
//     updatedAt
//   }
// }
// `,
//       variables: {
//       }
//     });
//   } catch (err) {

//   }
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'blog', "product", 'routers']))
    }
  }
}

