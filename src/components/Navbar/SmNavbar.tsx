"use client"

import { CaretDownIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import classNames from 'classnames'
import { SanityDocument } from 'next-sanity'
import Link from 'next/link'
import React,{useState} from 'react'

export default function SmNavbar({ categories = [] }: { categories : SanityDocument[] }) {
    
  const [isOpen, setIsOpen] = useState(false)
  
  const openHamburger =()=>{
    setIsOpen(!isOpen) 
  }

  return (
    <nav>
    <div className='flex justify-between align-middle mx-auto '>
      <Link href={`/`}>
        <div className='py-5 px-4 font-semibold my-auto'>
            <h1>MM MITTE</h1>
        </div>
      </Link>
        <div className='mr-4'>
          <button className='py-1 px-3 border-primary-2 rounded-lg border-2 my-4' onClick={openHamburger}>
            <HamburgerMenuIcon className='h-7 w-7'/>
          </button>
        </div>
    </div>

      <div className={classNames('bg-primary-1 transition-all ease-in-out duration-500 overflow-scroll scroll-smooth px-4', isOpen ? 'h-fit py-4 max-h-36 bg-primary-1 border-primary-2 border-t-2' : "max-h-0")}>
        <ul className='uppercase text-sm'>
          <Link href={`/`}>
            <li className='py-1 hover:text-primary-3'>Home</li>
          </Link>
          <li className='py-1 flex gap-1 hover:text-primary-3'>
              <p>Category</p>
              <CaretDownIcon className="h-5 w-5" />
              <ul className="bg-white text-black ml-4">
                  {categories.map((category)=>(
                    <Link key={category._id} href={`/blog/category/${(category.title).toLowerCase()}`}><li className="hover:text-primary-3 cursor-pointer p-1 text-xs">{category.title}</li></Link>
                  ))}
              </ul>
          </li>
          <Link href={`/contact`}>
          <li className='py-1 hover:text-primary-3'>Contact</li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}