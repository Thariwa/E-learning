
import React from 'react'
import style from './style.module.css'
import Image from 'next/image'
import google from './Images/google.png'
import Amazon from './Images/Amazon.png'
import Micro from './Images/Microsoft.png'
import Adobe from './Images/Adobe.png'
import git from './Images/github.png'
import drib from './Images/dribble.png'
import pin from './Images/pinterest.png'
import girl from './Images/python.jpg'
import black from './Images/blackgirl.jpg'
import hijab from './Images/hijabi.jpg'
import hijab2 from './Images/hijabi2.jpg'
import {IoIosPaper} from 'react-icons/io'
import {FaGraduationCap} from 'react-icons/fa'
import {GiWallet} from 'react-icons/gi'
import {SiGoogleclassroom} from 'react-icons/si'


export default function page() {
  return (
<>
<div className='bg-sky-100 h-screen flex flex-row '>
      <div className='ml-[100px]'>
         <p className='pt-32  font-bold text-4xl w-80'>Unlock Your Potential with Our Comprehensive <span className='text-gray-500'>E-learning</span> Programs</p>
         <p className='pt-2  text-xl text-gray-500'>Discover a world of knowledge with our online learning platform - Anytime,Anywhere.</p>
         <button className='border rounded-md border-gray-500 mt-3 mx-2 py-2 px-2 bg-gray-500 text-white hover:bg-white hover:text-gray-500 text-xl'>Get Started</button>
         <button className='border rounded-md border-gray-500 mt-3 mx-2 py-2 px-2 text-gray-500 hover:bg-gray-500 hover:text-white text-xl'>Explore Courses</button>
      </div>
      <div className={style.clip} >
      </div>
</div>

<div className='flex flex-row gap-10 h-[760px]'>
      <div>
         <p className='pl-14 mt-12 text-4xl '>Explore our <span className='text-gray-500 '>Courses</span></p> 
      </div>
   <div>   
      <div className='ml-[650px]'>
         <p className='mt-12 w-96 text-xl'>Discover a world of knowledge with our online learning platform - Anytime,Anywhere.</p>
         <button className='border rounded-md border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white mt-3 px-4  py-2 text-xl'>Explore</button>
      </div>
    <div className='grid grid-cols-3 gap-[300px] '>
      <div className='border rounded-lg w-[389px] h-[420px] bg-sky-100 mt-10 mr-[900px] '>
            <div>
              <Image src={girl} alt='girl looking at laptop'  className='w-[380px] h-[200px] border rounded-2xl ml-1 mt-1 ' />   
            </div>
            <div>
              <h2 className='font-bold text-gray-500 text-2xl mt-3 ml-2'>Introduction to Python</h2>
              <p className='ml-3 mt-3 text-lg'>Choose our Introduction to Python course for a comprehensive curriculum, interactive learning experience, and experienced instructors.</p>
            </div>
            <div className='grid grid-cols-2 gap-[45px]'>
               <div className='flex '>
                  <Image src={hijab} alt='hijabi woman' width={50} height={50} className='rounded-full w-6 h-6 mt-4 ml-2'/>
                  <p className='ml-2 mt-4'>by aisha mohammad</p>
                 
               </div>
               <div className='flex mt-[14px] gap-2'>
                  <IoIosPaper width={50} height={50} className='mt-2'/>
                  <p >4 weeks</p>
               </div>
            </div>
      </div>
      <div className='border rounded-lg w-[389px] h-[420px] bg-sky-100 mt-10 mr-[50px] '>
            <div>
              <Image src={black} alt='black girl looking at laptop'  className='w-[380px] h-[200px] border rounded-2xl ml-1 mt-1 ' />   
            </div>
            <div>
              <h2 className='font-bold text-gray-500 text-2xl mt-3 ml-2'>Web Development Fundamentals</h2>
              <p className='ml-3 mt-3 text-md'>Our Web Development course offers a comprehensive curriculum, expert instructors, and practical projects to help you build professional websites and launch a successful career in the field.</p>
           </div>
           <div className='grid grid-cols-2 gap-[20px]'>
               <div className='flex '>
                  <Image src={hijab2} alt='hijabi woman' width={50} height={50} className='rounded-full w-6 h-6 mt-4 ml-2'/>
                  <p className='ml-2 mt-4'>by muminat abdullah</p>
               </div>
               <div className='flex mt-[13px] gap-2'>
                  <IoIosPaper width={50} height={50} className='mt-2' />
                  <p className='mt-1 ml-2'>6 weeks</p>
               </div>
           </div>
      </div>
    </div>
   </div>
  </div>


  <div className=' bg-sky-100 h-[800px]'>
      <div className='text-center '>
         <p className='text-3xl pt-10'>The quickest and Effective</p>
         <p className='text-3xl'>Way Of <span className='text-gray-500'>Learning</span> </p>
         <button className='mx-2 text-xl border rounded-md border-gray-500 bg-gray-500 text-white hover:bg-white hover:text-gray-500 px-4  py-2 mt-8'>Get Started</button>
         <button className='mx-2 text-xl border rounded-md border-gray-500 text-gray-500 hover:bg-gray-500 hover:text-white px-4  py-2 mt-8'>Explore Courses</button>
      </div>
      <div className='bg-white w-[920px] h-[470px] m-auto my-10 rounded-3xl' >
          <div>
             <iframe width="900" height="460" src="https://www.youtube.com/embed/xFOG_9Y883c" title="YouTube video player" frameborder="0" className='m-auto pt-2 rounded-3xl' allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen ></iframe>
          </div>
      </div>
  </div>


  <div className='h-[400px] grid grid-cols-2 bg-white gap-[200px]' >
      <div className='my-auto ml-[20px]' >
        <h2 className='text-4xl'>Special <span className='text-gray-500'>Facilities</span></h2>
        <h2 className='text-4xl'>that we provide</h2>
        <p className='text-gray-500 text-xl'>Experience top-tier e-learning with our expert teachers and affordable rates. Engage in interactive virtual classrooms and unlock your learning potential. Join us now for exceptional facilities and accessible education.</p>
        <button className='mx-2 text-xl border rounded-md border-gray-500 bg-gray-500 text-white hover:bg-white hover:text-gray-500 px-4  py-2 mt-8'>Get Started</button>
      </div>
      <div className='grid grid-cols-3 w-[470px] h-[190px] '>
         
            <div className={style.grid}>
               <div className='bg-white w-[50px] h-[50px] mt-5 ml-3 rounded-lg'>
                <FaGraduationCap  className='w-12 h-12'/>
                <h2 className='mt-2 text-md'>Best Teachers</h2>
                
               </div>
            </div>
            <div className={style.grid2}>
               <div className='bg-white w-[50px] h-[50px] mt-5 ml-3 rounded-lg'>
                 <GiWallet className='w-12 h-12'/>
                 <h2 className='mt-2 text-sm'>Affordable Courses</h2>
               </div>
            </div>
            <div className={style.grid3}>
               <div className='bg-white w-[50px] h-[50px] mt-5 ml-[40px] rounded-lg'>
                  <SiGoogleclassroom className='w-10 h-12 ml-1' />
                  <h2 className='mt-2 text-md'>Interactive Classes</h2>
               </div>
            </div>
      </div>
   </div>


  <div className='bg-sky-100 h-[350px]'>
       <div className='text-center text-4xl pt-8'>
          <h2>Collaboration with Various</h2>
          <h2>top <span className='text-gray-500'>companies</span> </h2>
       </div>
    <ul className='flex justify-center items-center gap-10 mt-8 '>
      <li><Image src={google} alt='google logo' width={150} height={200}/> </li>
      <li><Image src={Amazon} alt='amazon logo' width={150} height={200}/></li>
      <li><Image src={Micro} alt='microsoft logo' width={150} height={200}/></li>
      <li><Image src={Adobe} alt='adobe logo' width={150} height={200}/></li>
      <li><Image src={git} alt='github logo' width={150} height={200}/></li>
    </ul>
    <ul className='flex justify-center items-center gap-5'>
      <li><Image src={drib} alt='' width={150} height={200}/></li>
      <li><Image src={pin} alt='' width={150} height={200}/></li>
    </ul>
  </div>
  <div className='h-[800px] mt-8'>
     <h2 className='text-center text-4xl '>Interesting <span className='text-gray-500'>reviews</span>  from</h2>
     <h2 className='text-center text-4xl'>our students</h2>
   </div>
 
</>
  )
}
