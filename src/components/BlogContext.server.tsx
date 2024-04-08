import { Post } from "@/containers/BlogContentWrapper";

export default function BlogContext(props: Post) {
  const {
    id,
    title,
    short_description,
    thumbnail,
    released_at,
    updated_at,
    likes,
  } = props;

  return (
    <>
      <div>{id}</div>
      <div>{title}</div>
      <div>{short_description}</div>
      <div>{thumbnail}</div>
      <div>{released_at}</div>
      <div>{updated_at}</div>
      <div>{likes}</div>
    </>
  );
}
