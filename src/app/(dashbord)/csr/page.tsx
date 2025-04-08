import ClientComponent from './client'
import ServerComponent from './server'
import React from 'react'
export default function Page() {
  return (
    <ClientComponent>
      <ServerComponent />
    </ClientComponent>
  )
}