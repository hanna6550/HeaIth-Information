"use client";

import { signOut } from "next-auth/react";
import { useSession } from "next-auth/react";
import React from 'react'
import Link from "next/link";

function Navbar() {
    const { data: session } = useSession();

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-black bg-white md:py-3 md:pl-20 shadow-md">
  <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-3">
    <a href="/landing">
      <span className="self-center md:text-4xl text-2xl font-semibold whitespace-nowrap md:pl-10 pl-4">
        Health-Info
      </span>
    </a>

    <div className="md:ml-96">
      <Link className="text-xl from-neutral-950  text-black" href="/home">English</Link>
      <Link className="text-xl from-neutral-950 text-black ml-8" href="/pageAmharic">Amharic</Link>
    </div>

    <div className="flex items-end md:space-x-6 md:mr-12">
      <div className="md:pr-0 pr-4 text-xl text-white hover:underline">
        {session?.user?.name}
      </div>
      <button
        onClick={() => signOut({ callbackUrl: '/landing' })}
        className="md:text-xl text-base rounded-md text-white bg-red-500 py-1 px-4 hover:underline"
      >
        Log Out
      </button>
    </div>
  </div>
</nav>

  )
}

export default Navbar