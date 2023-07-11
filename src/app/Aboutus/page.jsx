import React from 'react'
import Image from 'next/image'
import style from '../style.module.css'
import learn from '../Images/E-learning.jpg'
import Link from 'next/link'

export default function page() {
  return (
    <>
 <div>
      <div className={style.red} >
      <h1 className='text-center pt-[20px] text-4xl h-[100px] text-sky-300'>About Uidex</h1>
      </div>
    <div className='mb-[100px]'>  
        <div className='grid grid-cols-2'>
          <div>
          <Image src={learn} alt='a learning app' width={250} height={45} className='ml-[200px] border border-4 border-solid border-sky-100 mt-5'/>
          </div>
          <div>
          <p className='text-2xl mx-6 my-6 pt-8'>Welcome to UIDEX, a leading e-learning platform that is revolutionizing the way individuals learn and grow in the digital age. At UIDEX, we believe that education should be accessible to everyone, regardless of their geographical location or socioeconomic status.</p>
          </div>
       </div>  
    <div>
       <h2 className='mt-8 text-3xl text-center'>Our Vision: Empowering Learners, Transforming Lives</h2>
       <p className='text-xl ml-5'>We envision a future where learning knows no boundaries and every individual has the opportunity to thrive. By empowering learners with flexible and accessible education, UIDEX aims to transform lives and foster a global community of lifelong learners. We believe that education is the key to personal growth, professional success, and societal progress.</p>
       <h2 className='mt-6 text-3xl text-center'>Mission: Bridging the Gap in Education</h2>
        <p  className='text-xl ml-5'>At UIDEX, our mission is to bridge the gap in education by providing a comprehensive and inclusive e-learning platform. We aim to break down barriers to learning and equip learners with the knowledge and skills they need to succeed in today's fast-paced world. By leveraging the power of technology, we strive to make education more engaging, interactive, and personalized.</p>
        <h2 className='mt-6 text-3xl text-center'>Join UIDEX: Unlock Your Potential Today</h2>
        <p className='text-xl ml-5'>Whether you are a student, a professional seeking to enhance your skills, or someone passionate about lifelong learning, UIDEX welcomes you to embark on an enriching educational journey with us. Explore our diverse range of courses, engage with a vibrant community of learners, and unlock your true potential. Together, let's shape a brighter future through the power of education.</p>
    </div>   
    </div>
 </div>
 <div className='bg-gray-500 h-[500px] w-screen '>
  <h2 className='text-center pt-[100px] text-4xl'>Join UIDEX today and embrace the future of learning!</h2>
 
  <p className='text-center text-xl pt-5'>Discover a world of boundless knowledge with UIDEX,</p>
  <p className='text-center text-xl'>the revolutionary e-learning platform. Engage in interactive lessons,</p> 
  <p className='text-center text-xl'>collaborate with peers, and unlock your full academic potential from anywhere,</p>
  <p className='text-center text-xl'>at any time. Embrace a future of flexible learning</p>  
  <p className='text-center text-xl'>and ignite your intellectual journey with UIDEX.</p>

  <div className='flex gap-3 justify-center '>
   <button className='text-xl border rounded-md border-sky-300 bg-sky-300 text-white hover:bg-white hover:text-gray-500 px-4  py-2 mt-3' >Explore courses</button>
   <Link href='/contact'><button className='text-xl border rounded-md border-white bg-white text-gray-500 hover:bg-sky-300 hover:border-sky-300 hover:text-white px-6 py-2 mt-3'>Contact us </button></Link>
   
  </div>
  
  

 </div>
    </>
  )
}
