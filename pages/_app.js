import { NextSeo } from 'next-seo'
import Head from 'next/head'

import 'styles/index.css'

export default function App({ Component, pageProps }) {
   return (
      <>
         <Head>
            <NextSeo
               title="NHS AI Lab Skunkworks | Resources"
               description="Welcome to the technical website of the NHS AI Lab Skunkworks team. For our general public-facing website, please visit the AI Skunkworks programme."
               openGraph={{
                  url: 'https://nhsx.github.io/skunkworks/',
                  title: 'NHS AI Lab Skunkworks',
                  description: 'Finding new ways to use AI for driving forward the early adoption of technology to support health and social care, in both clinical and business contexts.',
                  images: [
                     {
                        url: 'https://nhsx.github.io/skunkworks/social-cover.jpg',
                        width: 1200,
                        height: 630,
                        alt: 'NHS AI Lab Skunkworks Social Cover',
                        type: 'image/jpg',
                     }
                  ],
               }}
               twitter={{
                  handle: '@NHSuk',
                  site: '@NHSuk',
                  cardType: 'summary_large_image',
               }}
            />
         </Head>
         <div className="antialiased">
            <Component {...pageProps} />
         </div>
      </>
   )
}
