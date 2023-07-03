"use client"

import { HamburgerMenuIcon } from '@radix-ui/react-icons'
import classNames from 'classnames'
import React,{useState} from 'react'

const SmNavbar = () => {

    
  const [isOpen, setIsOpen] = useState(false)
  
  const openHamburger =()=>{
    setIsOpen(!isOpen) 
  }

  return (
    <nav>
    <div className='flex justify-between align-middle mx-auto '>
        <div className='py-5 px-4 font-semibold my-auto'>
            <h1>MM MITTE</h1>
        </div>
        <div className='mr-4'>
          <button className='py-1 px-3 border-primary-2 rounded-lg border-2 my-4' onClick={openHamburger}>
            <HamburgerMenuIcon className='h-7 w-7'/>
          </button>
        </div>
    </div>

      <div className={classNames('bg-primary-1 transition-all ease-in-out duration-500 overflow-scroll px-4', isOpen ? 'h-fit py-4 max-h-36 bg-primary-1 border-primary-2 border-t-2' : "max-h-0")}>
        <ul className='uppercase'>
          <li className='py-1'>Home</li>
          <li className='py-1'>Category</li>
          <li className='py-1'>Contact</li>
        </ul>
      </div>
    </nav>
  )
}

export default SmNavbar