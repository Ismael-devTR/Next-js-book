import Head from "next/head";
import Image from "next/image";
import { browser } from "process";
import { useEffect, useState } from "react";
import { useRouter } from "next/router"
import styles from "../styles/Home.module.css";

export default function Home() {

  const router = useRouter();

  const [side, setSide] = useState("server");
 /* useEffect(() => {
    setTimeout(() => {
      setSide(typeof window !== undefined && "client");
    }, 2000);
  });*/

  useEffect(()=>{
    //router.push("ssp")
    router.push({
      pathname: "/blog/[date]/[slug]",
      query:{
        date: "sdsdfd",
        slug: "Happy",
        name: "das"
      },
    })
  })

  return <div>You are on {side} side.</div>;
}
