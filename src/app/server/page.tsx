import { cookies } from "next/headers"

// export const revalidate = 30 // 0 means no cache, 1 means 1 second cache, 2 means 2 second cache, etc.
export default async function Page({searchParams}:any) {
  const url = (await (await fetch('https://api.thecatapi.com/v1/images/search')).json())[0].url
  // const cookieStore = await cookies()
  // const theme = cookieStore.get('theme')

 
  return (
    <>
    <img  src={url} width="300" alt="cat" />
    {new Date().toLocaleString()}
    {JSON.stringify(searchParams) /*  {JSON.stringify(theme)} */}
    </>
  )
}