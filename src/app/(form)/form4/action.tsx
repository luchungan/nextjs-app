'use server'

import { revalidatePath } from "next/cache";

const data = ['阅读', '写作', '冥想']

const sleep = (ms:number)=>new Promise(resolve=>setTimeout(resolve, ms))
export async function findToDos() {
  return data
}

export async function createToDo(prevState:{message:string},formData: FormData):Promise<{message:string}> {
    await sleep(2000)
  const todo = formData.get('todo') as string | null;
  if (todo) {
    data.push(todo);
  }
  revalidatePath('/form2')
  return {
    message:`add ${todo} success!`,
  }
}
