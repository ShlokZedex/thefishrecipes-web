import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import React from 'react'

const Footer = () => {
  return (
    <footer className='w-full'>
        <div className='py-12 text-center max-h-48 bg-primary-2'>
            <h1 className='text-xl'>MITTE</h1>
            <p className='my-2'>Copyright - All rights reserved</p>
            <div className='flex gap-2 items-center justify-center'>
                <TwitterLogoIcon className='h-5 w-5'/>
                <LinkedInLogoIcon className='h-5 w-5'/>
                <GitHubLogoIcon className='h-5 w-5'/>
                <InstagramLogoIcon className='h-5 w-5'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer