'use client'
import { increment } from "@/lib/features/counter/counterSlice"
import { useAppDispatch, useAppSelector } from "@/lib/hooks"
import React from "react"
const Page: React.FC<{ params: Promise<{ slug: string }> }> = ({ params }) => {
  const count = useAppSelector(state => state.counter.value)
  const dispatch = useAppDispatch()
  const [slug, setSlug] = React.useState<string | null>(null)

  React.useEffect(() => {
    const fetchSlug = async () => {
      const { slug } = await params
      setSlug(slug)
    }
    fetchSlug()
  }, [params])

  return <div onClick={() => { dispatch(increment()) }}>My post: {slug}-{ count}</div>
}

export default Page