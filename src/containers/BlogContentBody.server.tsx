import { PostType } from "@/app/blog/[slug]/page";
import { CustomMDX } from "@/app/mdx-remote";

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
  console.log(body);

  return (
    <>
      <div>{title}</div>
      <div>업로드 날짜: {updated_at}</div>
      <div>수정된 날짜: {released_at}</div>
      <div>{thumbnail}</div>
      <div>{url_slug}</div>
      <div>{likes}</div>
      <div>{liked}</div>
      <div>{comments}</div>
      <CustomMDX source={body} />
      {/* <Image
        src={thumbnail as string}
        width={500}
        height={300}
        alt="velog content thumbnail"
      /> */}
      {/* <MDXContent /> */}
    </>
  );
}
