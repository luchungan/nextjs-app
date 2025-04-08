'use client'

import Link from "next/link"
import { usePathname } from "next/navigation"
import { useRouter } from "next/navigation"
type Props = {
  slug:string,title:string
}
const PostList:React.FC<{posts:Props[]}> = ({posts})=>{
  const pathname = usePathname()
  const router = useRouter()
  return <ul>
    {
      posts.map((post:Props,index:number)=>{
        const isActive = pathname === `/blog/${post.slug}`
        return <li key={index} className={isActive?'text-red':'text-black'}>
          <Link href={`/blog/${post.slug}`} onMouseEnter={()=>{router.prefetch(`/blog/${post.slug}`)}}  >{post.title}</Link>
        </li>
      })
    }
  </ul>
}

export default PostList