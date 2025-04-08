import path from "node:path"

export default async  function Page() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await res.json()
  console.log(path.resolve())
  // console.log(data)
  return <p>{JSON.stringify(data)}</p>
}
 
