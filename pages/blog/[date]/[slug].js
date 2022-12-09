import React from "react";
import { useRouter } from "next/router";
import Image from "next/image";
import posts from "../../../data/posts";
import PostHead from "../../../components/postHead";

export function getServerSideProps({ params }) {
  const { slug } = params;
  const post = posts.find((p) => p.slug === slug);
  return {
    props: {
      post,
    },
  };
}

function Slug({ post }) {
  const { query } = useRouter();
  return (
    <div>
      <PostHead {...post} />
      Hello {query.slug}
      <Image
        src="https://images.unsplash.com/photo-1605460375648-278bcbd579a6"
        width={500}
        height={200}
        alt="A beutiful english setter"
      />
    </div>
  );
}

export default Slug;
