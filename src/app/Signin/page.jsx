import React from 'react'
import Link from 'next/link'

export default function page() {
  return (
    <>
      <div className='h-[200px] bg-gray-500 w-screen'>
       <h1 className='text-center text-3xl pt-[40px]'>Sign in to your account</h1>
       <p className='text-center text-lg'>Sign in now and let's continue your pursuit of knowledge together! </p>
     </div>
      <div>

      <div className='flex pt-9 justify-center'>
            

           
             
      <div className='py-8 px-4  m-auto  w-64 mb-10'>
      <p><label htmlFor="email">Email</label></p>
      <p><input type="text" name='email' placeholder='Umarthariwa@gmail.com' className='border-2 border-black w-[250px] h-[38px] pl-'  /></p>
      <p><label htmlFor="password">Password</label></p>
      <p><input type="text" name='password' id='password' className='border-2 border-black w-[250px] h-[38px] pl-2' /></p>
     
      <input type='checkbox' name='rem' id='rem' className='mt-3 text-xs'/>
      <label htmlFor="rem" className='mx-1'>Remember me</label>

      
    
   
      <button className='text-center bg-gray-500 ml-2 text-white px-20 py-0 border rounded-md mt-6 '>Sign In</button>
      <Link href='/forgotpassword'>
      <p className='mt-4 text-red-600 text-center'>Forgot Password?</p>
      </Link>

     </div>
     
    
 
     
      

      
      </div>
      </div>
    </>
  )
}
