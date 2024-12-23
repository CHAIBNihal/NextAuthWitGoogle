import React from 'react'
import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "../lib/nextAuth";


import BtnSignOut from ".././_components/BTN/BtnSignOut";
const page = async () => {
    const session = await getServerSession(authOptions)
  return (
    <div className="flex flex-row  pl-3 mt-3 ">
   
      <h1>User Infos</h1>
    {
    session && (<div className="text-2xl font-bold "> 
    <h1>
       Welcom <span className="text-yellow-300">
      {session?.user?.name } </span>
    </h1>
   
      <p >
        Email : 
        {session.user?.email}
      </p>
      <Image src={session.user?.image as string } alt="image " width={50} height={50} />

      <BtnSignOut />
      </div> 
      
    ) }
 
 
 {/* <ClientComponents /> */}
</div>
  )
}

export default page
