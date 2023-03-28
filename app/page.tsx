import { Inter } from 'next/font/google'
import Search from './components/Search'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main>
      <div className='w-full flex justify-center my-8'>
        <Search/>
      </div>
    </main>
  )
}
