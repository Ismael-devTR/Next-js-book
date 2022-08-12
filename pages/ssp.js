import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const UserRequest = await fetch(
    "https://jsonplaceholder.typicode.com/users/1"
  );
  const UserData = await UserRequest.json();
  return {
    props: {
      user: UserData,
    },
  };
}

export default function Ssp(props) {
  return <div>Welcome, {props.user.name}.</div>;
}
