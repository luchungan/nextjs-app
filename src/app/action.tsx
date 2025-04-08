'use server'

import { revalidateTag } from "next/cache"

export default async function collectionAction() {
  console.log('revalidate collection')
  revalidateTag('collection')
}