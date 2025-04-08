
"use client"
import { notFound } from "next/navigation";
import React, { use, useEffect } from "react"
const getData = async () => {
await new Promise((resolve)=>setTimeout(resolve,3000))


return {
  message:'Hello,Dashbord-analytics'
}
};

const AboutPage = ()=>{
  // const [error,setError] = useState(false)
  const {message} = use(getData())
  useEffect(()=>{
    console.log('HAOA')
  },[])
  // const seatchParams = useSearchParams()

  // notFound()
  return  <>
  <h1>{message}</h1>
  

  </>
}

export default AboutPage;