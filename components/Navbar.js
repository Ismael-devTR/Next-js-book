import Link from "next/link";
import React, { useContext } from "react";
import themeContext from "../components/themeContext";

export default function Navbar() {
  const { toggleTheme, theme } = useContext(themeContext);
  const newThemeName = theme === "dark" ? "light" : "dark";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-around",
        marginBottom: 25,
      }}
    >
      <div>My web site</div>
      <Link href="/" preload={false}>
        Home
      </Link>
      <Link href="/about" preload={false}>
        About
      </Link>
      <Link href="/contactos" preload={false}>
        Contacts
      </Link>
      <button onClick={toggleTheme}>set {newThemeName} theme</button>
    </div>
  );
}
