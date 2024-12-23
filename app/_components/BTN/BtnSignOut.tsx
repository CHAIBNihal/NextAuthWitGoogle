"use client"
import { signOut } from 'next-auth/react'
import React from 'react'

const BtnSignOut = () => {
  return (
    <div>
      <button className='bg-red-400 text-black shadow-sm rounded-md mt-4 p-3 font-bold'
       onClick={()=>signOut()}
      >Sign Out </button>
    </div>
  )
}

export default BtnSignOut
