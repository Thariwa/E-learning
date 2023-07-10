import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import black from '../Images/blackgirl.jpg'


export default function Navbar() {
  return (
    <nav className='flex items-center justify-between p-5 bg-white h-[10px] shadow-lg w-screen'>
    <div>
       <span className='text-2xl cursor-pointer text-black ml-10'>Uidex</span>
       
      
    </div>
       <ul className='flex items-center ml-80 text-xl'>
        <Link href='/'><li className='mx-4 my-2'>Home</li></Link>
        <Link href='/courses'><li className='mx-4 my-2'>Courses</li></Link>  
        <Link href='/contact'><li className='mx-4 my-2'>Contact</li></Link>  
        <Link href='/Aboutus'><li className='mx-4 my-2'>About Us</li></Link>
       
       </ul> 
       <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className='w-6 h-8 ml-72'>
        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
        </svg>
        <Image src={black} alt='Woman' width={35} height={35} className='rounded-full mr-2'/>
    </nav>
  )
}
