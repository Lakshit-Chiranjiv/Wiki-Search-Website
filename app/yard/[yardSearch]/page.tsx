import React from 'react'
import getWikiData from '@/lib/getWikiData'
import SearchItem from './components/SearchItem'
import { Metadata } from 'next'

type Props = {
  params: {
    yardSearch: string
  }
}

export async function generateMetaData({ params: { yardSearch } }: Props): Promise<Metadata> {
  const wikiData: Promise<SearchResult> = getWikiData(yardSearch)
  const wikiDataJson = await wikiData

  const displayTerm = yardSearch.replaceAll('%20', ' ')

  if(!wikiDataJson?.query?.pages) return { title: `${displayTerm} not found` }

  return {
    title: `${displayTerm} - Yard Search`,
    description: `Search results for ${displayTerm}`
  }
}

export default async function YardSearch({ params: { yardSearch } }: Props) {

  const wikiData: Promise<SearchResult> = getWikiData(yardSearch)
  const wikiDataJson = await wikiData
  const results: Result[] | undefined = wikiDataJson?.query?.pages
  if(!results) return <p className='font-poppins'>No results found</p>
  const resultsArray = Object.values(results)

  return (
    <div className='font-poppins'>
      {
        resultsArray.map((result: Result) => {
          return (
            <SearchItem key={result.pageid} result={result} />
          )
        })
      }
    </div>
  )
}