// "use client";
import BlogContext from "@/components/BlogContext.server";

// import BlogContext from "@/components/BlogContext.server";
// import useFetchBlogData from "@/hooks/useFetchBlogData.client";

const query = `
query velogPosts($input: GetPostsInput!) {
  posts(input: $input) {
    id
    title
    short_description
    thumbnail
    user {
      id
      username
      profile {
        id
        thumbnail
        display_name
      }
    }
    url_slug
    released_at
    updated_at
    comments_count
    tags
    is_private
    likes
  }
}
`;

const variables = {
  input: {
    cursor: "",
    username: process.env.VELOG_USER_NAME!,
    limit: 10,
    tag: "",
  },
};

const getVelogWritingList = async () => {
  const response: VelogDataResponse = await fetch(
    "https://v3.velog.io/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query,
        variables,
      }),
      cache: "force-cache",
    },
  ).then((res) => res.json());

  const velogWritingList =
    response?.data?.posts?.map(
      (velogDataInformation: Post) => velogDataInformation,
    ) || [];

  return velogWritingList;
};

export default async function BlogContentWrapper() {
  // const { blogData } = useFetchBlogData(query, variables);
  const velogWritingList = await getVelogWritingList();
  console.log(velogWritingList);
  return (
    <>
      {velogWritingList.length > 0 ? (
        velogWritingList.map((blogData) => (
          <BlogContext key={blogData.id} {...blogData} />
        ))
      ) : (
        <div>포스팅 된 글 목록이 없습니다.</div>
      )}
    </>
  );
}

interface Profile {
  id: string;
  thumbnail: string;
  display_name: string;
}

interface User {
  id: string;
  username: string;
  profile: Profile;
}

export interface Post {
  id: string;
  title: string;
  short_description: string;
  thumbnail: string | null;
  user: User;
  url_slug: string;
  released_at: string;
  updated_at: string;
  comments_count: number;
  tags: string[];
  is_private: boolean;
  likes: number;
}

interface VelogDataResponse {
  data: {
    posts: Post[];
  };
}
