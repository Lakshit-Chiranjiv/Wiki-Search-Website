'use client'

import { useState, MouseEvent } from "react"
import { useRouter } from "next/navigation"

export default function Search() {

  const [search, setSearch] = useState('')

  const router = useRouter()

  const handleDump = (e: MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    router.push(`/yard/${search}`)
    setSearch('')
  }

  return (
    <div className="flex flex-col gap-4 md:flex-row text-sm w-fit items-center">
        <input type="text" placeholder="Search Wikipedia" className="rounded p-2 outline-none w-56" onChange={(e) => {
          setSearch(e.target.value)
        }}
        value={search}
        />
        <button className="bg-slate-600 text-white/90 px-4 py-2 rounded-md hover:bg-slate-700 w-32" onClick={handleDump}>Dump🚀</button>
    </div>
  )
}