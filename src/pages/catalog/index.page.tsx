import Client from 'shopify-buy';

import { GetServerSideProps, } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react';
import { initializeApollo } from '@/app/libs/apollo/apollo-client';
import { Catalog } from '@/widgets';
import { Main } from '@/shared/ui-kit';
import { GET_SHOPIFY_PRODUCTS } from '@/entities/product/schemes';
import { IResProductsCard } from '@/entities/product/schemes/get-products';


export default function CatalogPage({ data }: IResProductsCard) {

  const { products: { edges } } = data

  return (
    <>
      <Main className='h-[200vh] ' >
        <Catalog products={edges} />
      </Main>
    </>
  )
}





export const getServerSideProps: GetServerSideProps = async ({ locale = '' }) => {

  const client = initializeApollo()
  const { data } = await client.query({
    query: GET_SHOPIFY_PRODUCTS,
    variables: {
      first: 12,
      imagesFirst2: 2
    }
  });


  return {
    props: {
      data: data,
      ...(await serverSideTranslations(locale, ['common', 'routers']))
    }
  }
}

