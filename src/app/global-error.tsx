'use client'

export default function GlobalError({error,reset}:{error:Error,reset:()=>void}){
  return (<html>
    <body>
      <h2> someting went wrong</h2>
      <button onClick={()=>reset()}>reset</button>
    </body>
  </html>)
}