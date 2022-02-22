import Head from 'next/head'

import 'styles/index.css'

export default function App({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>NHS AI Lab Skunkworks | Resources</title>
         </Head>
         <div className="antialiased">
            <Component {...pageProps} />
         </div>
      </>
   )
}