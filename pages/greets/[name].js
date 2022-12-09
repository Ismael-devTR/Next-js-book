import React from "react";
import { useRouter } from "next/router";

function Greet() {
  const { query } = useRouter();

  return <div>Hello {query.name}</div>;
}

export default Greet;
