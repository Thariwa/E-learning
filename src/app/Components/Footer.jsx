import Link from 'next/link'
import React from 'react'

export default function Footer() {
  return (
    <>
<div className='grid grid-cols-2 bg-black h-[450px] text-white w-screen'>
     <div className='ml-[60px]'>
       <div className='mt-20'>
        <h1 className='font-bold text-4xl'>Uidex</h1>
       </div>
       <div className='mt-[120px]'>
        <p className='text-xl'>Subscribe to stay updated</p>
        
        <input type="text" id='Email' name='Email' placeholder='Email Address' className='rounded-2xl border border-white pr-10 pl-3 py-1 bg-black' />
       </div>
     </div>
   
  <div className='flex flex-row justify-end text-xl gap-10 mr-[100px] my-auto'>
    <div>
    <ul>
        <h2 className='font-bold text-2xl underline'>Pages</h2>
        <Link href='/courses'><li>Courses</li></Link>
        <Link href='/Blog'><li>Blog</li></Link>
        <Link href='/Aboutus'><li>About us</li></Link>
        <Link href='/Signin'><li>Login</li></Link>
        <Link href='/Getstarted'><li>Sign up</li></Link>
    </ul>
    </div>
    <div>
    <ul>
        <h2 className='font-bold text-2xl underline'>Social</h2>
        <Link href="https://www.instagram.com/thariwah/" target='blank'><li>Instagram</li></Link>
        <Link href="https://twitter.com/Thariwa1" target='blank'><li>Twitter</li></Link>
        <Link href="https://www.linkedin.com/in/thariwat-umar-58880927b/" target='blank'><li>Linked In</li></Link>
        <Link href="https://www.pinterest.com/Thariwaumar/" target='blank'><li>Pinterest</li></Link>
      </ul>
    </div>
    <div>
    <ul>
        <h2 className='font-bold text-2xl underline'>Our address</h2>
        <Link href="https://www.google.com/maps/place/Magodo+GRA+Phase+II,+Ikosi+Ketu+105102,+Ikeja,+Lagos/@6.6191239,3.3593701,14z/data=!3m1!4b1!4m6!3m5!1s0x103b93a899b7c9b7:0x8630de71dbc44ffd!8m2!3d6.6176339!4d3.3817264!16s%2Fg%2F1tf09pcq?entry=ttu" target='blank'>
        <li>Magodo phase 2</li>
        <li>Cmd Rd. Shangisha</li>
        <li>Ketu, Ikosi</li>
        <li>Lagos, Nigeria</li>
        </Link>
       
      </ul>
    </div>
    </div>
   
    
      
    
    

</div>
    </>
  )
}
