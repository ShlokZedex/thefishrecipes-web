"use client"

import { GitHubLogoIcon, InstagramLogoIcon, LinkedInLogoIcon, TwitterLogoIcon } from '@radix-ui/react-icons'
import Link from 'next/link'
import React, { useEffect } from 'react'
import { Facebook } from 'react-feather'

const Footer = () => {
  useEffect(() => {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    const yearElement = document.getElementById('year') as HTMLSpanElement;
    if (yearElement) {
      yearElement.textContent = currentYear.toString(); 
    }
  }, []);
  return (
    <footer className='w-full bg-primary-2'>
        <div className='py-12 text-center max-h-48'>
            <Link href={`/`}><h1 className='text-xl'>MITTE</h1></Link>
            <p className='my-2 text-sm text-gray-400'>&copy;Copyright <span id="year"></span> - All rights reserved</p>
            <div className='flex gap-2 items-center justify-center'>
                <TwitterLogoIcon className='h-5 w-5 hover:text-primary-3 cursor-pointer'/>
                <LinkedInLogoIcon className='h-5 w-5 hover:text-primary-3 cursor-pointer'/>
                <GitHubLogoIcon className='h-5 w-5 hover:text-primary-3 cursor-pointer'/>
                <InstagramLogoIcon className='h-5 w-5 hover:text-primary-3 cursor-pointer'/>
            </div>
        </div>
    </footer>
  )
}

export default Footer