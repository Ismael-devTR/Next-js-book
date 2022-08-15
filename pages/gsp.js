import Head from "next/head";

import { useEffect, useState } from "react";

export async function getStaticProps(){
  const userRequest = await fetch("https://jsonplaceholder.typicode.com/users/1");
  const userData = await userRequest.json();
  return{
    props:{
      user: userData
    },
    revalidate: 60
  }

}

export default function Gsp(props) {

  return <div>Get static Props: {props.user.name}</div>;
}
