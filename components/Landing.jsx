import Link from 'next/link'
import React from 'react'
import Navbar from './Navbar'
import Footer from './Footer'
import Image from 'next/image'
import img from "@/images/land.png"

function Landing() {
  return (
    <div>
    <Navbar/>
    <h1 className='md:text-5xl font-bold text-center md:mt-28 mt-10 md:mb-4'>Welcome to Health-Info</h1>
    <div className=' md:mx-10 mx-5 md:mt-10 mt-3 md:grid md:grid-cols-2'>
        <div className='md:px-20 px-5'>
            
            <h1 className=' md:text-2xl text-lg font-light text-gray-500 md:w-[100%]'><span className='font-bold text-4xl text-'>At Health-Info, </span> 
         we believe everyone deserves access to accurate and accessible health information. Our content is reviewed by medical professionals and tailored to meet your unique needs. From everyday health tips to in-depth resources, we are here to empower you every step of the way.</h1>
            <Link className='flex justify-center bg-blue-400 md:text-3xl text-xl font-semibold md:rounded-xl rounded-xl text-white py-6 md:mt-14 mt-10 md:mx-32 border-black' href={'/home'}>Get Started</Link>
            <h1 className='md:pt-12 pt-6 font-bold md:text-5xl text-3xl text-center'>We Care For Your Health !!!</h1>
        </div>

        <div className='rounded-lg md:mx-20 mx:8 md:my-12 my-6'>
          <Image src={img} width={800}/>
        </div>

        {/* <div className='md:px-20 px-5 md:py-20  md:pt-20 pt-16 text-2xl flex'>
        <h1 className=' md:text-2xl text-lg font-light text-gray-500 md:w-[100%]'><span className='font-bold text-4xl text-'>At Health-Info, </span> 
         we believe everyone deserves access to accurate and accessible health information. Our content is reviewed by medical professionals and tailored to meet your unique needs. From everyday health tips to in-depth resources, we are here to empower you every step of the way.</h1>
        </div> */}
    </div>


    <div className='flex justify-center items-center md:mt-28 mt-10'>
            <p className='text-center md:text-3xl text-base font-semibold text-gray-500 md:w-[60%] w-[80%]'>
            <span className='text-orange-500'>“</span> We are committed to providing reliable, evidence-based health information to improve lives. We aim to educate, support, and inspire individuals to take charge of their well-being.<span className='text-orange-500'>“</span>
            </p>
        </div>

        
    <div className='md:mt-40 mt-20'><Footer/></div>
    </div>
  )
}

export default Landing