import Head from "next/head";
import Image from "next/image";
import { browser } from "process";
import { useEffect, useState } from "react";
import styles from "../styles/Home.module.css";

export default function Home() {
  const [side, setSide] = useState("server");
  useEffect(() => {
    setTimeout(() => {
      setSide(typeof window !== undefined && "client");
    }, 2000);
  });

  return <div>You are on {side} side.</div>;
}
