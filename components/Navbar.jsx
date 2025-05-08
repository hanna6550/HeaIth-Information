"use client"
import { useState } from 'react';
import Link from 'next/link';
import { signOut } from 'next-auth/react';

export default function Navbar({ session }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white shadow-md border-black">
      <div className="flex flex-wrap items-center justify-between mx-auto max-w-screen-xl p-4">
        {/* Logo */}
        <a href="/landing">
          <span className="self-center text-2xl md:text-4xl font-semibold whitespace-nowrap">
            Health-Info
          </span>
        </a>

        {/* Hamburger menu */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden inline-flex items-center p-2 text-sm text-gray-500 rounded-lg hover:bg-gray-100 focus:outline-none"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
          </svg>
        </button>

        {/* Links */}
        <div className={`w-full md:flex md:items-center md:space-x-8 md:w-auto ${isOpen ? 'block' : 'hidden'}`}>
          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center">
            <Link href="/home" className="text-black text-lg py-2 md:px-4 hover:underline">English</Link>
            <Link href="/pageAmharic" className="text-black text-lg py-2 md:px-4 hover:underline">Amharic</Link>
          </div>

          <div className="mt-4 md:mt-0 flex flex-col md:flex-row md:items-center md:space-x-4">
            <div className="text-black text-lg py-1 md:py-0">{session?.user?.name}</div>
            <button
              onClick={() => signOut({ callbackUrl: '/landing' })}
              className="text-white text-base md:text-lg bg-red-500 hover:underline py-1 px-4 rounded-md mt-2 md:mt-0"
            >
              Log Out
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
}
