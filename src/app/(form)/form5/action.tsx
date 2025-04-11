'use server'

import { revalidatePath } from "next/cache"

const sleep = (ms:number)=>new Promise(resolve=>setTimeout(resolve, ms))
const data = ['阅读', '写作', '冥想']
export async function findToDos() {
  return data
}
export async function createToDo(previous:{message:string},formData: FormData) {
  await sleep(2000)
  const todo = formData.get('todo') as string | null;
  if (todo) {
    data.push(todo);
  }
  revalidatePath('/form5')
  return {
    message:`add ${todo} success!`
  }
}