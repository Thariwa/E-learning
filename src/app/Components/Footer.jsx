import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
<div className='grid grid-cols-2 bg-black h-[400px] text-white w-screen'>
     <div className='ml-[60px]'>
       <div className='mt-20'>
        <h1 className='font-bold text-4xl'>Uidex</h1>
       </div>
       <div className='mt-[120px]'>
        <p className='text-xl'>Subscribe to stay updated</p>
        <label htmlFor="Email"></label>
        <input type="text" placeholder='Email Address' className='rounded-2xl border border-white pr-10 pl-1 py-1 bg-black' />
       </div>
     </div>
   
  <div className='flex flex-row justify-end text-xl gap-10 mr-[100px] my-auto'>
    <div>
    <ul>
        <h2 className='font-bold text-2xl underline'>Pages</h2>
        <li >Courses</li>
        <li>Blog</li>
        <Link href='/Aboutus'><li>About us</li></Link>
        
        <li>Mentors</li>
        <li>Login</li>
        <li>sign up</li>
    </ul>
    </div>
    <div>
    <ul>
        <h2 className='font-bold text-2xl underline'>Social</h2>
        <li>Instagram</li>
        <li>Twitter</li>
        <li>Linked In</li>
        <li>Pinterest</li>
      </ul>
    </div>
    <div>
    <ul>
        <h2 className='font-bold text-2xl underline'>Our address</h2>
        <li>Mennica legacy</li>
        <li>Illinois 8588</li>
        <li>2972 Westheimer</li>
        <li>Rd. Santa Ana</li>
      </ul>
    </div>
    </div>

</div>
    </>
  )
}
