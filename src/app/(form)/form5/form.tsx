'use client'

import { useActionState, useOptimistic } from "react"
import { createToDo } from "./action"

const initialState = {
  message:''
}
type State = {
  text:string,
  sending?:boolean
}

export default function Form({todos}:{todos:string[]}){
  const [state,sendFormAction] = useActionState(createToDo, initialState)
  const [optimsiToDos, addOptimsiToDos] = useOptimistic<State[],string>(
    todos.map((i)=>({text:i})),
    (state,newTodo) => [
      ...state,
      {text:newTodo,sending:true}
    ]
  )

  async function formAction(formData:FormData){
    addOptimsiToDos(formData.get('todo') as string)
    sendFormAction(formData)
  }

  return <form action={formAction}>
    <input type="text" name="todo" />
    <button type="submit">Add</button>
    <p>
      {state?.message}
    </p>
    <ul>
      {optimsiToDos.map(({text,sending},i)=><li key={i}>{text}{!!sending && <small>(sending...)</small>}</li>)}
    </ul>
    
  </form>
}