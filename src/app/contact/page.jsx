import Link from 'next/link'
import React from 'react'
import {MdEmail} from 'react-icons/md'
import {BsTelephoneFill} from 'react-icons/bs'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'



export default function page() {
  return (
    <>
   <div className='bg-sky-100 h-[300px] w-screen '>
        <h1 className='text-center text-4xl pt-10'>Contact <span className='text-gray-500'>Information</span> </h1>
        <p className='text-center text-xl mt-2'> Unlock   <span className='text-gray-500'>boundless</span> knowledge!</p> 
        <p className='text-center text-xl' > join our immersive <span className='text-gray-500'>e-learning platform.</span> </p>
        <p className='text-center text-xl'> <span className='text-gray-500'>Contact us </span>now to embark on a journey of knowledge,</p>
        <p className='text-center text-xl text-gray-500'>  convenience, and success.</p>
        <ul className='flex justify-center ml-[20px] gap-4 mt-[50px]'>

          <Link href="https://www.instagram.com/thariwah/" target='blank'><li><BsInstagram/></li></Link>
          <Link href="https://twitter.com/Thariwa1" target='blank'><li><BsTwitter/></li></Link>
          <Link href="https://www.linkedin.com/in/thariwat-umar-58880927b/" target='blank'><li><BsLinkedin/></li></Link>
          <Link href="https://github.com/Thariwa" target='blank'> <li><BsGithub/></li></Link>
         
        </ul>
   </div>

   <div className='bg-slate-50 flex flex-row w-screen'>
        <div className='h-[400px] ml-[200px] pt-[100px] '>
           <div className='bg-sky-100 h-[70px] w-[280px]'>
            <div className='flex'>
               <MdEmail className='w-12 h-12 pt-5'/>
               <h2 className='text-gray-500 text-center text-lg ml-2 mt-4'>Email Address</h2>
            </div>
            <p className='text-center mr-2'>umarthariwa@gmail.com</p>
            </div>
       
        <div className='bg-sky-100 h-[70px] w-[280px]'>
           <div className='flex mt-8'>
               <BsTelephoneFill className='w-12 h-12 pt-5'/>
               <h2 className='text-gray-500 text-center text-lg ml-2 mt-4'>Phone Number</h2>
            </div>
            <p className='ml-14'>+2347013989857</p>
        </div>

         </div>
      <div className='bg-white shadow-xl w-[600px] h-[360px] ml-[60px]  mt-5'>
          <h1 className='pt-4 text-2xl ml-4'>Send a <span className='text-gray-500'> Message</span></h1>
             <p className='ml-4 text-lg'>Send a message <span className='text-gray-500' >ask any question</span>  you have about our program <span className='text-gray-500'>and our courses</span> </p>
          <div className='ml-2 mt-3 '>
             <input type="text" placeholder='Your name' className='border-solid rounded-md border-black w-[230px] border-2 py-1'/>
          
             <input type="text" placeholder='Email Address' className='ml-[20px] border-solid rounded-md w-[230px] border-black border-2 py-1' />
          </div>
          <div className='ml-2 mt-5'>
             <input type="text" placeholder='Phone Number' className='border-solid rounded-md w-[230px] border-black border-2 py-1' />
             
             <input type="text" placeholder='Subject' className='ml-[20px] border-solid w-[233px] rounded-md border-black border-2 py-1' />
          </div>
          <div className='ml-2 mt-5'>
             <input type="text" placeholder='Message' className='border-solid rounded-md border-black border-2 pb-14 w-[500px] h-[100px]' />
          </div>
          <button className='ml-1 bg-sky-200 text-gray-500 mt-1  px-3 py-2 border rounded-lg'>Send Message</button>
      </div>
    </div>

    <div className='h-[100px] w-screen mx-[560px] my-[100px]'>
      <button className='shadow-lg border rounded-xl px-3 py-2 bg-sky-200 text-gray-500 hover:bg-white'> Explore Courses</button>
    </div>
   
    </>
  )
}
