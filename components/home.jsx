"use client";
import React from 'react'
import Navbar from './Navbar';
import Footer from './Footer';
import EngContent from "./contentEng"
import Image from 'next/image';

export default function Home() {
  return (
    <div>
      <Navbar/>
      <div className="md:mb-0 mb-28"></div>
      {EngContent.map((content) => (
      <div
        className='md:my-16 mb-5 md:mt-32 md:mx-40 mx-5 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-800 dark:border-gray-700'
        key={content.id}
      >
        <div className='md:mx-20 mx-5'>
          <h3 className='md:text-5xl text-2xl md:pt-4 text-center font-bold text-black md:mb-6 mb-2'>{content.title}</h3>
          <p className='md:my-10 my-5 text-gray-800 md:text-xl text-lg'>{content.description}</p>
          <h2 className='text-xl md:pb-2 pb-1 font-medium font-serif'>{content.title} can be classified as:</h2>
          <ul className='list-disc list-inside text-lg text-gray-700 mb-8 md:ml-5'>
            {content.classification?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
          <Image 
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
            {content.treatments?.map((item, index) => (
              <li key={index}>{item}</li>
            ))}
          </ul>
        </div>
      </div>
))}

<div className='mt-44'><Footer/></div>   
    </div>
  )
}