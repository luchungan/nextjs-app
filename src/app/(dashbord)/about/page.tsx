'use client'
import { notFound, useSearchParams } from "next/navigation";
import React, { use, useState } from "react"
const getData = async () => {
await new Promise((resolve)=>setTimeout(resolve,3000))

return {
  message:'Hello,Dashbord'
}
};

const AboutPage = ()=>{
  const [error,setError] = useState(false)
  const {message} = use(getData())
  const seatchParams = useSearchParams()
  function updateSorting(sortOrder:string){
    const params = new URLSearchParams(seatchParams.toString())
    params.set('sort',sortOrder)
    window.history.pushState(null,'',`?${params.toString()}`)
  }
  // notFound()
  return <>
  <h1 onClick={() => { setError(true); } }>{message}</h1>
  <h2 onClick={()=>{notFound()}}>not found</h2>
  <h2 onClick={()=>{updateSorting('asc')}}>asc</h2>
  <h2 onClick={()=>{updateSorting('desc')}}>desc</h2>

  </>
}

export default AboutPage;