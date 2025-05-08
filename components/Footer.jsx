import React from 'react'
import { LuPhoneCall } from "react-icons/lu";

function Footer() {
    const currentYear = new Date().getFullYear();

  return (
    <div className="fixed bottom-0 left-0 right-0 z-40 bg-gray-100 border-gray-950 shadow-slate-950">
    <div className="md:px-14 px-6 md:pt-3 pt-2 grid grid-cols-2 md:gap-16 gap-4">
      <div>
        <h1 className="md:text-2xl text-xl md:pl-14 font-semibold">WE CARE FOR YOUR HEALTH !!!</h1>
      </div>
  
      <div className="md:pl-32 pl-5">
        <h1 className="md:text-xl text-lg md:ml-12 font-semibold">For more information</h1>
        <div className="flex md:px-5 md:space-x-4 space-x-2 md:pt-2 pt-2 md:text-xl text-xl md:pl-16">
          <LuPhoneCall size={25} />
          <span>0909112233</span>
        </div>
      </div>
    </div>
    <div className="text-black text-base text-center pt-2 font-light">
      All rights reserved. @ {currentYear}
    </div>
  </div>
  
  )
}

export default Footer