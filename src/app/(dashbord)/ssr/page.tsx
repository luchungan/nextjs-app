export default async  function Page() {
  const res = await fetch(`https://jsonplaceholder.typicode.com/todos`)
  const data = await res.json()
 
  return <p>{JSON.stringify(data)}</p>
}
 
