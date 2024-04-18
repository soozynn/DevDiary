import { PostType } from "@/app/blog/[slug]/page";
import { customMDXComponents } from "@/app/mdx-components";
import { useMDXComponent } from "next-contentlayer/hooks";
import Image from "next/image";
import React from "react";

export default function BlogContentBody(props: PostType) {
  const {
    title,
    released_at,
    updated_at,
    body,
    thumbnail,
    url_slug,
    likes,
    liked,
    comments,
  } = props;

  const MDXContent = useMDXComponent(body || "");

  return (
    <>
      <div>{title}</div>
      <div>업로드 날짜: {updated_at}</div>
      <div>수정된 날짜: {released_at}</div>
      <div>{url_slug}</div>
      <div>{likes}</div>
      <div>{liked}</div>
      <div>{comments}</div>
      <Image
        src={thumbnail as string}
        width={500}
        height={300}
        alt="velog content thumbnail"
      />
      <MDXContent components={customMDXComponents} />
    </>
  );
}
