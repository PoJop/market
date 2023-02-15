import { UiKit } from '@/shared'
import { initializeApolloHygraph } from '@/shared/libs/apollo'
import { Welcome } from '@/widgets'
import { ApolloQueryResult, gql } from '@apollo/client'
import { GetServerSideProps, } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

export default function Home() {


  return (
    <>
      <UiKit.Main role="main" className='h-full min-h-full'>
        <Welcome />
      </UiKit.Main>
    </>
  )
}



export const getServerSideProps: GetServerSideProps = async ({ locale = '' }) => {
  const clientHygraph = initializeApolloHygraph()

  let res: ApolloQueryResult<any> | null = null

  try {
    res = await clientHygraph.query({
      query: gql`
      query Smths {
  smths {
    createdAt
    id
    publishedAt
    title
    updatedAt
  }
}
`,
      variables: {
      }
    });
  } catch (err) {

  }
console.log(res)
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'routers']))
    }
  }
}

