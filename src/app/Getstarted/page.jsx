import React from 'react'

export default function page() {
  return (
    <>
   <div className='h-[200px] bg-gray-500'>
    <h1 className='text-center text-3xl pt-[40px]'>Get Started Today</h1>
    <p className='text-center text-lg'>Join us now! and Unlock your potential</p>
   </div>

<div className='h-[500px] '>
    <div className='flex flex-row gap-[100px] justify-center pt-[60px]'>
        <div className='flex flex-col'>
          <label htmlFor="Firstname">First Name</label>
          <input type="text" name='Firstname' className='border-2 border-black w-[250px] h-[38px] pl-3' />
        </div>
        <div className='flex flex-col'>
          <label htmlFor="Lastname">Last Name</label>
          <input type="text" name='Lastname' className='border-2 border-black w-[250px] h-[38px] pl-3' />
       </div>
    </div>
    <div className='flex flex-row gap-[100px] justify-center mt-6'>
       <div className='flex flex-col'>
          <label htmlFor="Email">Email</label>
          <input type="text" name='Email' className='border-2 border-black w-[250px] h-[38px] pl-3' />
       </div>
       <div className='flex flex-col'>
          <label htmlFor="Phonenumber">Phone Number</label>
          <input type="text" name='Phonenumber' className='border-2 border-black w-[250px] h-[38px] pl-3' />
       </div>
    </div>
    <div className='flex flex-row justify-center gap-[230px] mt-6'>
          <div className='flex flex-col'>
             <label className='text-lg font-black'>Gender</label>
            <div>
                <input type="radio" name='gender' id='gender' />
                <label htmlFor="gender" className='text-lg mx-2'>Female</label>
                <input type="radio" name='gender' id='gender' />
                <label htmlFor="gender" className='text-lg mx-2'>Male</label>
            </div>
           </div>
            
            <div className='flex flex-col'>
                <label htmlFor="course" className='text-lg '>Course</label>
                <select name="Course" id="Course" className='border-black border-2 w-[250px] h-[38px]'>
                    <option value="Course">Choose your course</option>
                    <option value="IOP">Introduction to Python</option>
                    <option value="WDF">Web Development Fundamentals</option>
                    <option value="MLF">Machine Learning Fundamentals</option>
                    <option value="IAD">iOS App Development</option>
                    <option value="IDS">Introduction to Data Science</option>
                    <option value="CSE">Cybersecurity Essentials</option>
                    <option value="Ui/Ux design">UI/UX Design</option>
                    <option value="CCB">Cloud Computing Basics</option>
                    <option value="Full stack">Full Stack Web Development</option>
                    <option value="AIB">Artificial Intelligence in Business</option>
                    <option value="Database">Database Management Systems</option>
                    <option value="Network">Network Security</option>
                </select>
            </div>
         </div>
           <div className='flex flex-row justify-center gap-[100px] mt-6'>
            <div className='flex flex-col'>
                <label htmlFor="track" className='text-lg '>Track</label>
                <select name="track" id="track" className='border-black border-2 w-[250px] h-[38px]'>
                    <option value="Course">Choose a track</option>
                    <option value="thrice">Online(Twice a week)</option>
                    <option value="weekends">Online(Weekends)</option>
                </select>
            </div>
            <div className='flex flex-col'>
                <label htmlFor="Language" className='text-lg mx-2'>Communication Preference</label>
               <input type="text" name='Language' id='Language' className='border-2 border-black w-[250px] h-[38px] pl-3' />
            </div>
           </div>
           <button className='bg-gray-500 px-4 py-2 border rounded-md mx-[580px] mt-10'>Submit</button>
</div>
    </>
  )
}
