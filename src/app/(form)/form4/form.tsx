'use client'

import { useActionState } from "react"
import { useFormStatus } from "react-dom"
import { createToDo } from "./action"


const initialState = {
  message:''
}


 function SubmitButton(){
  const {pending} = useFormStatus()
  return  <button type="submit" >{pending?'Adding':'Add'}</button>

}

export default function AddToDoForm(){
  const [state,formAction] = useActionState(createToDo, initialState)

  return <form action={formAction}>
    <input type="text" name="todo" />
    <SubmitButton/>
    <p>{state?.message}</p>
  </form>
}

