import { Inter } from 'next/font/google'
import Search from './components/Search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className="bg-slate-500 min-h-screen">
      Hello
      <div className='w-full flex justify-center'>
        <Search/>
      </div>
    </main>
  )
}
