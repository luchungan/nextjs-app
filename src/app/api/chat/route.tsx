// import OpenAI from 'openai'
import { NextResponse } from 'next/server';
// const openai = new OpenAI({
//   baseURL: 'https://api.deepseek.com',
//   apiKey: 'sk-3b8e9bbb76c24b34ab83088ac1253190'
// });
function iteratorToStream(iterator:AsyncGenerator<Uint8Array<ArrayBufferLike>, void, unknown>) {
  return new ReadableStream({
    async pull(controller) {
      const { value, done } = await iterator.next()
 
      if (done) {
        controller.close()
      } else {
        controller.enqueue(value)
      }
    },
  })
}
 
function sleep(time:number) {
  return new Promise((resolve) => {
    setTimeout(resolve, time)
  })
}
 
const encoder = new TextEncoder()
 
async function* makeIterator() {
  yield encoder.encode('<p>One</p>')
  await sleep(200)
  yield encoder.encode('<p>Two</p>')
  await sleep(200)
  yield encoder.encode('<p>Three</p>')
}
 
export async function GET() {
  const iterator = makeIterator()
  const stream = iteratorToStream(iterator)
 
  return new Response(stream)
  // return NextResponse.json({code:200})
}