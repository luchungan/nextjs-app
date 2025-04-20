

interface Post {
  id: string
  title: string
  content: string
}

export const revalidate = 60

export const dynamicParams = true 
export async function generateStaticParams() {
  const posts: Post[] = await fetch('https://api.vercel.app/blog').then((res) =>
    res.json()
  )
  return posts.map((post) => ({
    id: String(post.id),
  }))
}
 
export default async function Page({
  params,
}:{params:Promise<{id:string}>}) {
  const _params = await params
  const post: Post = await fetch(`https://api.vercel.app/blog/2`,{next:{revalidate:60}}).then(
    (res) => res.json()
  )
  return  <main>
  <h1>{post.title}</h1>
  <p>{post.content}</p>
  <p>{JSON.stringify(_params)}</p>
</main>
} 