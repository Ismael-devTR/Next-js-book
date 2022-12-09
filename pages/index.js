import Head from "next/head";
import Image from "next/image";
import { browser } from "process";
import { useEffect, useState } from "react";
import { useRouter } from "next/router";
import styles from "../styles/Home.module.css";

export default function Home() {
  const router = useRouter();

  const [side, setSide] = useState("server");
  /* useEffect(() => {
    setTimeout(() => {
      setSide(typeof window !== undefined && "client");
    }, 2000);
  });*/

  useEffect(() => {
    //router.push("ssp")
    router.push({
      pathname: "/blog/[date]/[slug]",
      query: {
        date: "sdsdfd",
        name: "das",
        id: "qWD3Pzce",
        slug: "dog-of-the-day-the-english-setter",
        title: "Dog of the day: the English Setter",
        subtitle:
          "The English Setter dog breed was named for these dogs practice of setting, or crouching low, when they found birds so hunters could throw their nets over them",
        image: "https://images.unsplash.com/photo-1605460375648-278bcbd579a6",
      },
    });
  });

  return <div>You are on {side} side.</div>;
}
