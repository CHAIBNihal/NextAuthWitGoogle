"use client"
import { signIn } from 'next-auth/react'
import React from 'react'

const BtnSignInWithGoogle = () => {
  return (

      <button onClick={() => signIn("google", {redirect : true, callbackUrl : "/profile"})}
      className="p-4 rounded-lg text-black text-lg bg-yellow-100 -1/2 shadow-md ">Sign In with google </button>
    
  )
}

export default BtnSignInWithGoogle
