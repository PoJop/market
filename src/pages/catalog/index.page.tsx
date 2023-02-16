import { GetServerSideProps, } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import React from 'react';
import { Catalog } from '@/widgets';
import { Main } from '@/shared/ui-kit';
import { GET_SHOPIFY_PRODUCTS } from '@/entities/product/schemes';
import { IResProductsCard } from '@/entities/product/schemes/get-products';
import { ApolloQueryResult, useQuery } from '@apollo/client';
import { initializeApolloShopify } from '@/shared/libs/apollo';
import { isIdxBot } from '@/shared/helpers';
import { IProductCard } from '@/entities/product/types';
import { faker } from '@faker-js/faker';
import { createRandomProductCard } from '@/entities/product';


interface ICatalogPageProps {
  productsData: ApolloQueryResult<IResProductsCard>;
  isBot: boolean;
}


export default function CatalogPage({ productsData, isBot }: ICatalogPageProps) {

  console.log(productsData)

  return (
    <>
      <Main>
        <Catalog productsData={productsData} isBot={isBot} />
      </Main>
    </>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ locale = '', req }) => {

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

  const t = {
    ...res,
    data: {
      products: {
        edges: createRandomProductCard({ length: 20 })
      }
    }
  }

  const userAgent = req.headers['user-agent']
  const isBot = userAgent ? isIdxBot({ userAgent: userAgent }) : false

  return {
    props: {
      isBot,
      productsData: t,
      ...(await serverSideTranslations(locale, ['common', 'routers']))
    }
  }
}

