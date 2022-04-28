import Head from 'next/head'

export default function CustomHead({ route_title }) {
    return (
        <Head>
            <title>Visate Min{route_title ? `: ${route_title}` : ''}</title>
            <meta name="description" content="Generated by create next app" />
            <meta name="theme-color" content="#333" />
            <meta name="viewport" content="width=device-width, initial-scale=1, user-scalable=no"/>
            <meta name="apple-mobile-web-app-status-bar-style" content="#333" />
            <link rel="icon" href="/favicon.ico" />
        </Head>

    )
}