import Head from 'next/head'
import { RecoilRoot } from 'recoil'

import 'styles/index.css'

export default function App({ Component, pageProps }) {
   return (
      <>
         <Head>
            <title>NHS AI Lab Skunkworks | Resources</title>
         </Head>
         <RecoilRoot>
            <div className="antialiased">
               <Component {...pageProps} />
            </div>
         </RecoilRoot>
      </>
   )
}