import React from 'react'
import { useRouter } from "next/router"

function Greet() {
  const { query } = useRouter();
  console.log(query);

  return (
    <div>Hello {query.name}</div>
  )
}

export default Greet