import React from 'react'
import getWikiData from '@/lib/getWikiData'

type Props = {
  params: {
    yardSearch: string
  }
}

export default async function YardSearch({ params: { yardSearch } }: Props) {

  const wikiData: Promise<SearchResult> = getWikiData(yardSearch)
  const wikiDataJson = await wikiData
  const results: Result[] | undefined = wikiDataJson?.query?.pages
  if(!results) return <p>No results found</p>
  const resultsArray = Object.values(results)
  console.log(results,"results")

  return (
    <div>
      {
        resultsArray.map((result: Result) => {
          return (
            <div key={result.pageid}>
              <h1>{result.title}</h1>
              <p>{result.extract}</p>
            </div>
          )
        })
      }
    </div>
  )
}