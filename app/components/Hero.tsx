'use client'

import { useRouter } from 'next/navigation'

const Hero = () => {
    const router = useRouter()

  return (
    <div className='md:w-3/4 mx-auto md:flex md:flex-col md:gap-8 md:items-center'>
        <h1 className='text-xl font-bold text-white/90 md:text-4xl lg:text-6xl my-12'>Dump out with us and know whatever you want</h1>
        <button className='bg-white rounded p-2 md:px-8 md:py-4 hover:bg-white/90 active:scale-95 font-semibold' onClick={() => {
        router.push('/yard')
        }}>Head to the Yard</button>
    </div>
  )
}

export default Hero