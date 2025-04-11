'use client'

import { deleteToDo } from "./action"

export default function Button() {
  return (
    <button onClick={async ()=>{await deleteToDo()}}>删除一项</button>
  )
}