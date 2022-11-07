import React from 'react'
import {useRouter} from "next/router"

function contactos() {

  const {query} = useRouter();
  console.log(query);
  return (
    <div>contactos</div>
  )
}

export default contactos