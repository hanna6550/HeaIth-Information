"use client";
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import AmhContent from "./contentAmh"
import Image from 'next/image';

function amhPage() {
  return (
    <div>
      <Navbar />
      <div className="md:mb-0 mb-28"></div>
      {AmhContent.map((content) => (
      <div
        className='md:my-16 my-8 md:mt-32 md:mx-40 mx-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'
        key={content.id}
      >
        <div className='md:mx-20 mx-5'>
          <h3 className='md:text-5xl text-2xl  text-center font-bold text-black md:mb-6 mb-2 md:pt- pt-3'>{content.title}</h3>
          <p className='md:my-10 my-5 text-gray-800 md:text-xl text-base'>{content.description}</p>
          <h2 className='text-xl md:pb-2 pb-1 font-medium font-serif'>{content.title} can be classified as:</h2>
          <ul className='list-disc list-inside text-lg text-gray-700 mb-8 md:ml-5'>
            {content.classification?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Image height={300}
            src={content.image}
            className='md:my-6 my-4 mx-auto flex justify-center md:mt- mt-10 md:mb- mb-6'
          />
          <h1 className='text-2xl md:pb-2 pb-1 font-medium font-serif'>
            Symptoms and Signs: <span className='text-gray-700 text-lg'>{content.symptoms}</span>
          </h1>
          <h1 className='text-2xl md:pb-2 pb-1 font-medium font-serif'>
            Diagnosis: <span className='text-gray-700 text-lg'>{content.diagnosis}</span>
          </h1>
          <p className='md:my-10 my-5 text-gray-800 md:text-xl'>{content.description2}</p>
          <h2 className='text-2xl md:pb-2 pb-1 font-medium font-serif'>Treatment:</h2>
          <ul className='list-disc list-inside text-lg text-gray-700 mb-8 md:ml-5'>
            {content.treatments}
          </ul>
        </div>
      </div>
))}

<div className='mt-44'><Footer/></div>   
    </div>
  )
}

export default amhPage

// "use client";
// import React from 'react'
// import ReactPlayer from 'react-player'
// import { useTranslations } from 'next-intl';
// import Navbar from './Navbar';
// import Footer from './Footer';

// function Amhhome() {
//   return (
//     <div>
//       <Navbar/>
//         <div className='md:my-16 my-8 md:mt-20 md:mx-40 mx-8'>
//             <h3 className='md:text-5xl text-2xl text-center font-bold text-black md:mb-10 mb-6'>The Science of Gut Health</h3>
//             <p className='md:my-10 md:mx-20 my-5  md:text-2xl'>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet urna vitae arcu blandit, eu aliquam nibh consequat. Etiam blandit lacus nisi, at vehicula elit tincidunt et. Ut mollis diam blandit, condimentum mi eu, pulvinar diam. Nulla nunc enim, gravida in nibh eget, blandit aliquam metus. Vestibulum varius arcu sed massa aliquam vehicula. Morbi ac risus id massa luctus vulputate. Sed purus lacus, laoreet id varius eu, sagittis convallis sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget nulla velit. 
//             </p>
//             <h1 className='md:my-14 my-8 md:mx-40 mx-8 flex justify-center md:mt-16 mt-10 md:mb-20 mb-6'>
//                   <ReactPlayer url='https://www.youtube.com/watch?v=E3QpXj_QOqQ&pp=ygUGaGVhbHRo' />
//             </h1>
//         </div>

//         <div className='md:my-16 my-8 md:mx-40 mx-8 md:mt-40'>
//             <h3 className='md:text-5xl text-2xl text-center font-bold text-black md:mb-10 mb-6'>HealthInfo Title2</h3>
//             <p className='md:my-10 md:mx-20 my-5  md:text-2xl'>
//             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam aliquet urna vitae arcu blandit, eu aliquam nibh consequat. Etiam blandit lacus nisi, at vehicula elit tincidunt et. Ut mollis diam blandit, condimentum mi eu, pulvinar diam. Nulla nunc enim, gravida in nibh eget, blandit aliquam metus. Vestibulum varius arcu sed massa aliquam vehicula. Morbi ac risus id massa luctus vulputate. Sed purus lacus, laoreet id varius eu, sagittis convallis sem. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget nulla velit. 
//             </p>
            

//             {/* <video className='h-96 w-full'>
//             <source   src='https://www.youtube.com/watch?v=LXb3EKWsInQ'/>
             
//              </video> */}

//             <h1 className='md:my-14 my-8 md:mx-40 mx-8 flex justify-center md:mt-16 mt-10 md:mb-20 mb-6'>
//                   <ReactPlayer url='https://www.youtube.com/watch?v=BPI-FJj8f5o&pp=ygUGaGVhbHRo' />
//             </h1>
//         </div>

//      <div className='md:mt-40 mt-20'><Footer/></div>   
    
//     </div>
//   )
// }

// export default Amhhome