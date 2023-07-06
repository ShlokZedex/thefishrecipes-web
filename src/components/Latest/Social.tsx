import { InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

const Social = () => {
  return (
    <div className='bg-primary-1'>
        <div className="container mx-auto">
            <h1 className='mb-4 text-lg font-bold'>Social</h1>
            <div className="bg-primary-2 w-full">
                <ul className='grid grid-cols-3 text-center '>
                    <li className='flex flex-col gap-1 py-6 px-1 items-center justify-center hover:bg-primary-3 cursor-pointer hover:text-primary-1'>
                        <TwitterLogoIcon className='h-5 w-5'/>
                        <p>Twitter</p>
                        <p className='text-gray-400 text-sm'>25k likes</p>
                    </li>
                    <li className='flex flex-col gap-1 py-6 px-1 items-center justify-center hover:bg-primary-3 border-x border-primary-1 cursor-pointer hover:text-primary-1'>
                        <LinkedInLogoIcon className='h-5 w-5'/>
                        <p>LinkedIn</p>
                        <p className='text-gray-400 text-sm'>25k likes</p>
                    </li>
                    <li className='flex flex-col gap-1 py-6 px-1 items-center justify-center hover:bg-primary-3 cursor-pointer hover:text-primary-1'>
                        <InstagramLogoIcon className='h-5 w-5'/>
                        <p>Instagram</p>
                        <p className='text-gray-400 text-sm'>25k likes</p>
                    </li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Social