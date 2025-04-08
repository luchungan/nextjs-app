import React from "react"
const Page:React.FC<{params:Promise<{slug:string}>}> =async ({params})=>{
const _params = await params
  return <div>My post:{JSON.stringify(_params)}</div>
}

export default Page