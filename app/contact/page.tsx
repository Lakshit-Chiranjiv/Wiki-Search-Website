import React from 'react'

const Contact = () => {
  return (
    <div className='text-white/80'>
      <h1 className='text-4xl font-bold my-4'>Contact Me</h1>

      <div className='grid grid-cols-2 gap-12 mx-auto w-2/3 my-16 text-center'>
        <a href='https://www.linkedin.com/in/lakshit-chiranjiv-sagar-4b0b15198/' target='_blank' rel='noreferrer' className='bg-blue-700 hover:bg-blue-700/75 text-white font-bold py-4 px-4 rounded'>
          LinkedIn
        </a>
        <a href='https://twitter.com/lakshit_cs' target='_blank' rel='noreferrer' className='bg-blue-400 hover:bg-blue-400/75 text-white font-bold py-4 px-4 rounded'>
          Twitter
        </a>
        <a href='https://lakshitcs1.vercel.app/' target='_blank' rel='noreferrer' className='bg-green-500 hover:bg-green-500/75 text-white font-bold py-4 px-4 rounded'>
          Portfolio
        </a>
        <a href='https://github.com/Lakshit-Chiranjiv' target='_blank' rel='noreferrer' className='bg-gray-900 hover:bg-gray-800 text-white font-bold py-4 px-4 rounded'>
          Github
        </a>
      </div>
    </div>
  )
}

export default Contact