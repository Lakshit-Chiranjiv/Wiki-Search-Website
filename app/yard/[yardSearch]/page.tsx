import React from 'react'

type Props = {
  params: {
    yardSearch: string
  }
}

export default function YardSearch({ params: { yardSearch } }: Props) {
  return (
    <div>
      <h1 className='text-6xl'>{yardSearch}</h1>
    </div>
  )
}