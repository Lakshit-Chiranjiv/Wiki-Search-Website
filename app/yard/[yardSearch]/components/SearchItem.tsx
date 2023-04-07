import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

type Props = {
    result: Result
}

const SearchItem = ({ result }: Props) => {

  const itemTextPart = (
    <div className="flex flex-col justify-center">
        <h2>
            <Link href={`https://en.wikipedia.org/?curid=${result.pageid}`} target='_blank' className='text-2xl font-bold'>{result.title}</Link>
        </h2>
        <p>{result.extract}</p>
    </div>
  )

  const content = (
    result?.thumbnail?.source ? (
        <div className="m-4 border-2 rounded border-white/80 p-4">
            <div className="flex gap-4">
                <div className="flex flex-col justify-center">
                    <Image src={result.thumbnail.source} width={result.thumbnail.width} height={result.thumbnail.height} alt={result.title} loading='lazy' />
                </div>
                {itemTextPart}
            </div>
        </div>
    ) :
    (
        <div className="m-4 border-2 rounded border-white/80 p-4">
            {itemTextPart}
        </div>
    )
  )

  return content
}

export default SearchItem