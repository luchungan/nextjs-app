
import 'server-only' // This is a server component
export async function getData() {
  const requestHeaders = new Headers()
  requestHeaders.append('Authorization', process.env.API_KEY as string)
  const res = await fetch('https://jsonplaceholder.typicode.com/todos/2', {
    headers:  requestHeaders
     
  })
 
  return res.json()
}