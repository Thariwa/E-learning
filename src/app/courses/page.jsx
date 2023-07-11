import React from 'react'
import Image from 'next/image'

const data = [
  
        {
          id: 1,
          title: 'Introduction to Python',
          description: 'Choose our Introduction to Python course for a comprehensive curriculum, interactive learning experience, and experienced instructors.',
          instructor: 'aisha mohammad',
          duration: '4 weeks',
          image: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Images/python.jpg?raw=true',
          profile: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Images/hijabi.jpg?raw=true'
        },
        {
          id: 2,
          title: 'Web Development Fundamentals',
          description: 'Our Web Development course offers a comprehensive curriculum, expert instructors, and practical projects to help you build professional websites and launch a successful career in the field.',
          instructor: 'muminat abdullah',
          duration: '6 weeks',
          image: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Images/web%20dev.jpg?raw=true',
          profile:' https://github.com/Thariwa/E-learning/blob/master/src/app/Images/hijabi2.jpg?raw=true'
        },
        {
          id: 3,
          title: 'Machine Learning Fundamentals',
          description: 'Explore the core concepts of machine learning and build predictive models.Learn various algorithms and techniques for data analysis.',
          instructor: 'Obinna Nwosu',
          duration: '8 weeks',
          image: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/mach%20learn.jpg?raw=true',
        profile: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/Teacher7.jpg?raw=true'
        },
        {
          id: 4,
          title: 'iOS App Development',
          description: 'Build your own iOS applications using Swift and Xcode.Create engaging user interfaces and implement app functionality.',
          instructor: 'Nkechi Onyeka',
          duration: '10 weeks',
          image: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/ios%20app.jpg?raw=true',
          profile: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/Teacher2.jpg?raw=true'
        },
        {
          id: 5,
          title: 'Introduction to Data Science',
          description: 'Get an overview of data science and learn essential data analysis techniques.Work with popular data science tools and libraries.',
          instructor: 'Adewale Abimbola',
          duration: '6 weeks',
          image: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/data%20science.jpg?raw=true',
          profile: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Images/profile%202.jpg?raw=true'
        },
        {
          id: 6,
          title: 'Cybersecurity Essentials',
          description: 'Learn the basics of cybersecurity and protect your digital assets.Understand common security threats and develop preventive measures.',
          instructor: 'Ngozi Eze',
          duration: '4 weeks',
          image: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/cyber%20sec.jpg?raw=true',
          profile: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Images/profile%201.jpg?raw=true'
        },
        {
          id: 7,
          title: 'UI/UX Design',
          description: 'Master the principles of user interface and user experience design.Create visually appealing and intuitive interfaces.',
          instructor: 'Olumide Adeleke',
          duration: '8 weeks',
          image: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/uix.jpg?raw=true',
          profile: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Images/profile%203.jpg?raw=true'
        },
        {
          id: 8,
          title: 'Cloud Computing Basics',
          description: 'Get introduced to cloud computing and popular cloud platforms.Understand cloud service models and deployment options.',
          instructor: 'Chidinma Nwachukwu',
          duration: '6 weeks',
          image: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/cloud%20comp.jpg?raw=true',
          profile: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/Teacher1.jpg?raw=true'
        },
        {
          id: 9,
          title: 'Full Stack Web Development',
          description: 'Become a full stack web developer and build dynamic web applications.Master front-end and back-end technologies.',
          instructor: 'Emeka Okafor',
          duration: '10 weeks',
          image: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/full%20stack.jpg?raw=true',
          profile: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/Teacher5.jpg?raw=true'
      },
      {
          id: 10,
          title: 'Artificial Intelligence in Business',
          description: 'Discover how AI technologies are transforming the business landscape.\nLearn about AI applications in marketing, finance, and operations.',
          instructor: 'Chioma Eze',
          duration: '8 weeks',
          image: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/AI.jpg?raw=true',
          profile: 'https://github.com/Thariwa/E-learning/blob/master/src/app/Images/blackgirl.jpg?raw=true'
        },
        {
          id: 11,
          title: 'Database Management Systems',
          description: 'Learn the principles of designing and managing relational databases.Master SQL for querying and manipulating data.',
          instructor: 'Oluwaseun Adebayo',
          duration:'6 weeks',
          image:"https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/database.jpg?raw=true",
          profile: "https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/Teacher6.jpg?raw=true"
        },
        {
          id: 12,
          title: 'Network Security',
          description: 'Master the techniques to secure computer networks against unauthorized access.Understand network vulnerabilities and implement effective security measures.',
          instructor: 'Nnamdi Okeke',
          duration: '6 weeks',
          image: "https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/network%20sec.jpg?raw=true",
          profile: "https://github.com/Thariwa/E-learning/blob/master/src/app/Pmages/Teacher4.jpg?raw=true"
        },
      ]



const techcourse = data.map(tech =>(
  <section key={tech.id} className='bg-sky-100 border rounded-2xl w-[300px] h-[300px] '>
           <section className='w-32 h-24 border rounded-2xl'>
             <Image src={tech.image} width={400} height={200}/>
           </section>

           <section >
            <p>{tech.title}</p>
            <p>{tech.description}</p>
           </section>


           <section className='flex p-4'>
            <p>{tech.profile}</p>
            <p>by {tech.instructor}</p>
            <p>{tech.duration}</p>
           </section>
        </section>
  ))
  
  
  
  
  export default async function page() {
  return (
    <>
    <div className='grid grid-cols-3 gap-[30px] px-[120px] py-5  h-[100rem] '>
       {techcourse}
    </div>
    </>
  )
}


