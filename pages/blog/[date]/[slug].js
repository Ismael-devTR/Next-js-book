import React from 'react'
import {useRouter} from "next/router"
import Image from "next/image"
function Slug() {
    const {query} = useRouter();
    console.log(query);
  return (
    <div>Hello {query.slug}
    
    <Image 
    src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
    width={500}
    height={200}
    alt="A beutiful english setter"
    /></div>
  )
}

export default Slug