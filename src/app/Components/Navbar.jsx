import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import black from '../Pmages/roundphoto.jpg'
import {IoMdSearch} from 'react-icons/io'


export default function Navbar() {
  return (
    <nav className='flex items-center justify-between py-4 px-16 bg-white shadow-lg top-0 left-0 right-0'>
      <div>
        <span className='text-2xl font-bold cursor-pointer text-black'>Uidex</span>
      </div>
      <ul className='flex items-center text-xl gap-10'>
        <Link href='/'><li className=' text-black hover:text-gray-600'>Home</li></Link>
        <Link href='/courses'><li className=' text-black hover:text-gray-600' >Courses</li></Link>  
        <Link href='/contact'><li className=' text-black hover:text-gray-600' >Contact</li></Link>  
        <Link href='/Aboutus'><li className=' text-black hover:text-gray-600' >About Us</li></Link>
      
      </ul> 
      <div className='flex items-center gap-6'>
        <IoMdSearch width={50} height={50} className='w-6 h-6'/>
        <Image src={black} alt='Woman' width={40} height={40} className='rounded-full w-8 h-8 '/>
      </div>
    </nav>
  )
}
