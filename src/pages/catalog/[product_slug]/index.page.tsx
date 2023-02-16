import React from 'react';
import { GetServerSideProps, } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { Container, Main } from '@/shared/ui-kit';
import { ApolloQueryResult } from '@apollo/client';
import { GET_SHOPIFY_SINGLE_PRODUCT, IResSingleProduct } from '@/entities/product/schemes/get-single-product';
import Image from 'next/image';
import cn from 'classnames';
import { initializeApolloShopify } from '@/shared/libs/apollo';


interface ICatalogPageProps {
  productData: ApolloQueryResult<IResSingleProduct>
}
export default function SingleProductPage({ productData }: ICatalogPageProps) {

  const { data } = productData
  return (
    <>
      <Main className='h-[200vh] ' >
        <Container>
          <div className='w-[500px] h-[500px]'>
            <Image
              width={data.product.images.edges?.[0].node.width}
              height={data.product.images.edges?.[0].node.width}
              src={String(data.product.images.edges?.[0].node.url)}
              alt={String(data.product.images.edges?.[0].node.altText)}
              className={cn("h-full w-full object-cover transition-all", { "scale-[1.1]": false })}
            />
          </div>
        </Container>
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = '', query }) => {

  const client = initializeApolloShopify()

  let res: ApolloQueryResult<IResSingleProduct> | null = null

  try {
    res = await client.query({
      query: GET_SHOPIFY_SINGLE_PRODUCT,
      variables: {
        handle: query.product_slug,
        images: 1,
        truncateAt: 100,
        language: locale.toUpperCase()
      }
    });
  } catch (err) {

  }


  return {
    props: {
      productData: res,
      ...(await serverSideTranslations(locale, ['common', 'routers']))
    }
  }
}

