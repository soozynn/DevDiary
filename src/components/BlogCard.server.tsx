import { Post } from "@/app/blog/page";
import Link from "next/link";

export default function BlogCard(props: Post) {
  const {
    id,
    title,
    short_description,
    thumbnail,
    url_slug,
    released_at,
    updated_at,
    likes,
  } = props;

  return (
    <div>
      <div>{id}</div>
      <Link href={`/blog/${url_slug}`}>{title}</Link>
      <div>{short_description}</div>
      <div>{thumbnail}</div>-<div>{released_at}</div>
      <div>{updated_at}</div>
      <div>{likes}</div>
    </div>
  );
}
