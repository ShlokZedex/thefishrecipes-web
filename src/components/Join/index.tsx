import React from 'react'

const Join = () => {
  return (
    <div className='bg-primary-1'>
      <div className='container bg-primary-2 mx-auto'>
        <div className='pt-12 pb-2 px-5 text-center h-auto'>
            <h1 className='text-lg font-semibold'>Join our NewsLetter</h1>
            <p className='mt-2 mb-6 text-gray-400 text-sm'>Sign up for our free newsletters to receive the latest news. Don't worry we won't do spam.</p>
            <div className='flex flex-col lg:flex-row text-sm items-center justify-center'>
                <input type="text" className='py-4 px-5 mb-8 w-full lg:w-1/2' placeholder='Enter you Email Address'/>
                <button className='bg-red-600 text-primary-1 py-4 px-10 mb-8 uppercase text-xs'>Subscribe</button>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Join