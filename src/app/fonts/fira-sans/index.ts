import localFont from '@next/font/local'


export const firaSansFont = localFont({
    src: [
        {
            path: './sourse/300.woff2',
            weight: '300',
            style: 'normal',
        },
        {
            path: './sourse/400.woff2',
            weight: '400',
            style: 'normal',
        },
        {
            path: './sourse/500.woff2',
            weight: '500',
            style: 'normal',
        },
        {
            path: './sourse/700.woff2',
            weight: '700',
            style: 'normal',
        },
    ],
})