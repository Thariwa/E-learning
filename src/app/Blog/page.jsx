import React from 'react'
import { Ubuntu } from 'next/font/google'
import elearn from '../Images/e-learnimg.jpg'
import learn from '../Images/learningcircle.jpg'
import Image from 'next/image'
import Link from 'next/link'
import {BsInstagram} from 'react-icons/bs'
import {BsTwitter} from 'react-icons/bs'
import {BsLinkedin} from 'react-icons/bs'
import {BsGithub} from 'react-icons/bs'

const buntu = Ubuntu({ subsets: ['latin'],
weight:["400"]
 })


export default function page() {
  return (
    <>
    <div className='h-[140rem]'> 
    <div className={buntu.className}>
    <h1 className='text-4xl text-center mt-10'>Unleashing the Magic of Learning: Insights from the Digital Classroom</h1>
    </div>
    <div>
        <Image src={elearn} alt='elearning illustration' className='w-[700px] h-[300px] mt-6 m-auto' />
        <p className='text-2xl mt-6'>Welcome to our e-learning platform blog! In this digital age, where technology has transformed every aspect of our lives, education is no exception. Our e-learning platform is designed to provide a dynamic and immersive learning experience for students of all ages and backgrounds. Whether you're a student looking to enhance your knowledge or an educator seeking innovative teaching tools, our platform is here to empower you on your educational journey.</p>
        <h2 className='mt-3 text-center border-solid border-4 text-xl text-sky-300'>Explore the benefits of Online learning and Tips to effective online studying</h2>
        <ol className='list-decimal list-inside text-lg'>
            <li> <span className='text-sky-300'>Flexibility</span>: E-learning provides the freedom to study anytime, anywhere. You can create a personalized learning schedule that fits your lifestyle, allowing you to balance other commitments while pursuing your education.</li>
            <li className='mt-3'> <span className='text-sky-300'>Establish a Dedicated Study Space</span>: Create a quiet and organized study space that is free from distractions. Having a designated area for studying will help you stay focused and maintain productivity.</li>
            <li className='mt-3'> <span className='text-sky-300'>Self-Paced Learning</span>: E-learning allows you to learn at your own pace. You can progress through the material at a speed that suits you, spending more time on challenging concepts and breezing through familiar topics.</li>
            <li className='mt-3'> <span className='text-sky-300'>Practice Effective Time Management</span>: Create a study schedule that aligns with your personal preferences and commitments. Allocate specific time slots for studying, taking breaks, and engaging in other activities to maintain a healthy work-life balance.</li>
            <li className='mt-3'> <span className='text-sky-300'>Global Learning Community</span>: E-learning platforms connect learners from around the world, creating a vibrant community. Engaging in discussions, collaborating on projects, and sharing insights with fellow learners can broaden your perspectives and foster a sense of belonging.</li>
            <li className='mt-3'> <span className='text-sky-300'>Seek Support and Stay Connected</span>: Reach out to instructors, peers, or online forums for support and clarification when needed. Collaborate with fellow learners, form study groups, and utilize the available resources on the e-learning platform to enhance your understanding and learning experience.</li>
            <li className='mt-3'> <span className='text-sky-300'>Stay Engaged and Actively Participate</span>: Actively engage with the learning materials by taking notes, asking questions, and participating in discussions. Stay motivated by setting aside time for reflection and applying what you've learned in real-life scenarios.</li>
        </ol>
        <Image src={learn} alt='learning circle' width={500} height={200} className='m-auto mt-5'/>
        <p className='mt-10 text-xl'>E-learning offers numerous benefits, including flexibility, access to diverse courses, and a global learning community. By implementing effective online studying strategies such as establishing a dedicated study space, setting clear goals, managing time efficiently, actively participating, and seeking support, you can maximize your e-learning experience and achieve your educational goals. Embrace the power of e-learning and embark on a rewarding journey of knowledge acquisition and personal growth.</p>
    </div>
    
    <div className='bg-gray-500 h-[580px] w-screen mt-4'>
  <h2 className='text-center pt-[100px] text-4xl'>Join UIDEX today and embrace the future of learning!</h2>
 
  <p className='text-center text-xl pt-5'>Discover a world of boundless knowledge with UIDEX,</p>
  <p className='text-center text-xl'>the revolutionary e-learning platform. Engage in interactive lessons,</p> 
  <p className='text-center text-xl'>collaborate with peers, and unlock your full academic potential from anywhere,</p>
  <p className='text-center text-xl'>at any time. Embrace a future of flexible learning</p>  
  <p className='text-center text-xl'>and ignite your intellectual journey with UIDEX.</p>

  <div className='flex justify-center '>
   <Link href='/contact'><button className='text-xl border rounded-md border-white bg-white text-gray-500 hover:bg-sky-300 hover:border-sky-300 hover:text-white px-6 py-2 mt-3'>Contact us </button></Link>
   
   
  </div>
  <h3 className='text-3xl text-center mt-10 ' >Check out our socials</h3>
  
  <ul className='flex justify-center ml-[20px] gap-4 mt-[30px]'>

<Link href="https://www.instagram.com/thariwah/" target='blank'><li><BsInstagram/></li></Link>
<Link href="https://twitter.com/Thariwa1" target='blank'><li><BsTwitter/></li></Link>
<Link href="https://www.linkedin.com/in/thariwat-umar-58880927b/" target='blank'><li><BsLinkedin/></li></Link>
<Link href="https://github.com/Thariwa" target='blank'> <li><BsGithub/></li></Link>

</ul>
 </div>
     
    </div>
    </>
  )
}
