'use client'
import React, { useState } from "react"
const Page = ()=>{
  const [error,setError] = useState(false)
  return error? Error('111'):<div onClick={()=>{setError(true)}}>set error</div>
}
export default Page