// import useFetchBlogData from "@/hooks/useFetchBlogData.client";

export default function BlogContentWrapper() {
  // const query = `
  // query velogPosts($input: GetPostsInput!) {
  //   posts(input: $input) {
  //     id
  //     title
  //     short_description
  //     thumbnail
  //     user {
  //       id
  //       username
  //       profile {
  //         id
  //         thumbnail
  //         display_name
  //       }
  //     }
  //     url_slug
  //     released_at
  //     updated_at
  //     comments_count
  //     tags
  //     is_private
  //     likes
  //   }
  // }
  // `;

  // const variables = {
  //   input: {
  //     cursor: "",
  //     username: process.env.VELOG_USER_NAME!,
  //     limit: 10,
  //     tag: "",
  //   },
  // };

  // const { blogData } = useFetchBlogData(query, variables);

  return <>test</>;
}
