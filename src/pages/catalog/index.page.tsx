import { GetServerSideProps, } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react';
import { Catalog } from '@/widgets';
import { Main } from '@/shared/ui-kit';
import { GET_SHOPIFY_PRODUCTS } from '@/entities/product/schemes';
import { IResProductsCard } from '@/entities/product/schemes/get-products';
import { ApolloQueryResult, useQuery } from '@apollo/client';
import { initializeApolloShopify } from '@/shared/libs/apollo';


interface ICatalogPageProps {
  productsData: ApolloQueryResult<IResProductsCard>
}
export default function CatalogPage({ productsData }: ICatalogPageProps) {

  console.log(productsData)
  // const {error} = useQuery(GET_SHOPIFY_PRODUCTS)
  // console.log(error)
  // const { networkConnection } = useNetworkConnection()

  // React.useEffect(() => {
  //   console.log(networkConnection)
  // }, [networkConnection])

  return (
    <>
      <Main className='h-[200vh] ' >
        <Catalog productsData={productsData} />
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = '' }) => {

  const clientShopify = initializeApolloShopify()

  let res: ApolloQueryResult<IResProductsCard> | null = null

  try {
    res = await clientShopify.query({
      query: GET_SHOPIFY_PRODUCTS,
      variables: {
        first: 100,
        images: 1,
        truncateAt: 100,
        language: locale.toUpperCase()
      }
    });
  } catch (err) {

  }


  return {
    props: {
      productsData: res,
      ...(await serverSideTranslations(locale, ['common', 'routers']))
    }
  }
}

