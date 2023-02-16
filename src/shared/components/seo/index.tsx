import Head from 'next/head';
import { useRouter } from 'next/router';
import React from 'react';

type Props = {
    title: string,
    description: string,
    keywords: string,
}


export const Seo: React.FC<Props> = (props) => {
    const router = useRouter();
    const defaultMeta = {
        title: '',
        siteName: '',
        description: '',
        url: process.env.NEXT_PUBLIC_URL,
        // image: process.env.NEXT_PUBLIC_URL + '/map-popup-img.jpg',
        type: 'website',
        robots: 'follow, index',
    };
    defaultMeta.title = "market"
    defaultMeta.siteName = "market"
    defaultMeta.description = "market"
    const meta = {
        ...defaultMeta,
        ...props,
    };
    meta['title'] = props.title
        ? `${props.title} | ${meta.siteName}`
        : meta.title;

    return (
        <Head>
            <title>{meta.title}</title>
            <meta name='robots' content={meta.robots} />
            <meta content={meta.description} name='description' />
            <meta property='og:url' content={`${meta.url}${router.asPath}`} />
            <link rel='canonical' href={`${meta.url}${router.asPath}`} />
            <meta property='og:type' content={meta.type} />
            <meta property='og:site_name' content={meta.siteName} />
            <meta property='og:description' content={meta.description} />
            <meta property='og:title' content={meta.title} />
            {/* <meta name='image' property='og:image' content={meta.image} /> */}
            <meta name="twitter:card" content="summary_large_image" />
            <meta name='theme-color' content='#171A1C' />
        </Head>
    );
}
