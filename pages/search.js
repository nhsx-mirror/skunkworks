import { useMemo } from 'react'
import Link from 'next/link'
import { NextSeo } from 'next-seo'
import { useRouter } from 'next/router'
import { posts } from 'cache/post-data'
import Introduction from 'components/Introduction'
import PageLayout from 'components/layouts/PageLayout'

export default function Search() {

   // Access router
   const router = useRouter()
   const { q } = router.query

   // Query cached posts 
   const queryPosts = () => {
      return posts.filter(
         post => {
            return (
               post
                  .title
                  .toLowerCase()
                  .includes(q.toLowerCase()) ||
               post
                  .content
                  .toLowerCase()
                  .includes(q.toLowerCase())
            );
         }
      );
   }

   // Retrieve results when we have access to router
   const results = useMemo(() => q && queryPosts(q), [q])

   return (
      <>
         <NextSeo
            title="NHS AI Lab Skunkworks | Search"
         />

         <PageLayout noPagination>
            <Introduction title="Search Results" description={results ? `Your search returned ${results.length} results` : 'No results found'} />
            {
               results && (
                  <div className="space-y-6">
                     {results.map(result => (
                        <Link key={result.slug} href={`/${result.slug}`}>
                           <a className="block">
                              <h3 className="text-lg font-medium text-nhsuk-text mb-1">{result.title}</h3>
                              <p className="text-nhsuk-secondary-text">{result.summary}</p>
                           </a>
                        </Link>
                     ))}
                  </div>
               )
            }
         </PageLayout>
      </>
   )
}