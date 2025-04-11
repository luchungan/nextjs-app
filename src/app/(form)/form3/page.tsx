'use client'

import { useActionState } from 'react';

export default function Home() {

  async function createTodo(prevState:Array<string>, formData:FormData) {
    return prevState.concat(formData.get('todo') as string);
  }

  const [state, formAction] = useActionState(createTodo, [])

  return (
    <form action={formAction}>
      <input type="text" name="todo" />
      <button type="submit">Submit</button>
      <p>{state.join(',')}</p>
    </form>
  ) 
}