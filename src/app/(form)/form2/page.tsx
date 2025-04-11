import { findToDos, createToDo } from './action';
import Button from './button';
import Submit from './submit';

export default async function Page() {
  const todos = await findToDos();
  return (
    <>
      <form action={createToDo}>
        <input type="text" name="todo" />
        <Submit />
      </form>
      <Button />
       <ul>
        {todos.map((todo, i) => <li key={i}>{todo}</li>)}
      </ul>
    </>
  )
}