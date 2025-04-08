import { Suspense } from "react"


const sleep = (ms:number) => new Promise(r=>setTimeout(r,ms))

async function PostFeed(){
  await sleep(2000)
  return <h1>Hello PostFeed</h1>
}

async function Weather(){
  await sleep(8000)
  return <h1>hello weather</h1>
}
async function Recommand(){
  await sleep(5000)
  return <h1>hello recommand</h1>
}

export default function Suspen(){
  return <section style={{'padding':'20px'}}>
    <Suspense fallback={<p>loading PostFeed component</p>}>
      <PostFeed />
    </Suspense>
    <Suspense fallback={<p>loading Weather component</p>}>
      <Weather />
    </Suspense>
    <Suspense fallback={<p>loading Recommand component</p>}>
      <Recommand />
    </Suspense>
  </section>
}