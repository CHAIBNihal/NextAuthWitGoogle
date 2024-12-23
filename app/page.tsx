import { getServerSession } from "next-auth";
import Image from "next/image";
import { authOptions } from "./lib/nextAuth";


import BtnSignOut from "./_components/BTN/BtnSignOut";
export default  function Home() {
 

  return (
    <h1>Hello Page Home</h1>
    
  );
}
