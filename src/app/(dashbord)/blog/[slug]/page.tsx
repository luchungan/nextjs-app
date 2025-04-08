import {  useRouter } from "next/navigation"
import React from "react"
const Page:React.FC<{params:Promise<{slug:string}>}> = async ({params})=>{
 
  const {slug} = await params
  return <div >My post:{slug}</div>
}

export default Page