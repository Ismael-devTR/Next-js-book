import Link from "next/link";
import React from "react";

export default function Navbar() {
  return (
    <div>
      <Link href="/" preload={false}>
        Home
      </Link>
      <Link href="/about" preload={false}>
        About
      </Link>
      <Link href="/contactos" preload={false}>
        Contacts
      </Link>
    </div>
  );
}
