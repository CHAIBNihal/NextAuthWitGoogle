'use client'
import React, { use } from 'react'
import { useSession } from 'next-auth/react'
import BtnSignInWithGoogle from './BTN/btnSignInWithGoogle'
import Image from 'next/image'
import BtnSignOut from './BTN/BtnSignOut'
const ClientComponents = () => {
  const { data, status } = useSession()
  return (
    <div>
      {status === 'loading' && <p>Loading...</p>}
      {status === "unauthenticated" && <BtnSignInWithGoogle />}
      {status === 'authenticated' && (
       <>
       <p>{data?.user?.email}</p>
       <p> {data?.user?.name} </p>
       <Image  src={data.user?.image as string} alt='image ' width={60} height={60}/ >
       <BtnSignOut />
       </>
      )}






    </div>
  )
}

export default ClientComponents
