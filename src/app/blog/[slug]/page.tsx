import BlogContentBody from "@/containers/BlogContentBody.server";

export async function generateMetadata({ params }: { params: ParamsType }) {
  const { slug } = params;

  return {
    title: decodeURIComponent(slug),
  };
}

const getVelogWritingContent = async (slug: string) => {
  const graphqlQuery = {
    operationName: "ReadPost",
    variables: {
      username: process.env.VELOG_USER_NAME!,
      url_slug: slug,
    },
    query: `
      query ReadPost($username: String, $url_slug: String) {
        post(username: $username, url_slug: $url_slug) {
          id
          title
          released_at
          updated_at
          tags
          body
          short_description
          is_markdown
          is_private
          is_temp
          thumbnail
          comments_count
          url_slug
          likes
          liked
          user {
            id
            username
            is_followed
            profile {
              id
              display_name
              thumbnail
              short_bio
              profile_links
            }
            velog_config {
              title
            }
          }
          comments {
            id
            user {
              id
              username
              profile {
                id
                thumbnail
                display_name
              }
            }
            text
            replies_count
            level
            created_at
            level
            deleted
          }
          series {
            id
            name
            url_slug
            series_posts {
              id
              post {
                id
                title
                url_slug
                user {
                  id
                  username
                }
              }
            }
          }
          linked_posts {
            previous {
              id
              title
              url_slug
              user {
                id
                username
              }
            }
            next {
              id
              title
              url_slug
              user {
                id
                username
              }
            }
          }
        }
      }
      `,
  };

  try {
    const response: VelogDataResponse = await fetch(
      "https://v2cdn.velog.io/graphql",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(graphqlQuery),
      },
    ).then((res) => res.json());

    return response?.data?.post || null;
  } catch (e) {
    console.error("Fetching Velog Content API Error: ", e);
    return null;
  }
};

export default async function BlogContentPage({
  params,
}: {
  params: { slug: string };
}) {
  const velogWritingContentData = await getVelogWritingContent(
    decodeURIComponent(params.slug),
  );

  return (
    <div>
      {velogWritingContentData ? (
        <BlogContentBody {...velogWritingContentData} />
      ) : (
        <p>No content available</p>
      )}
    </div>
  );
}

export interface PostType {
  id: string;
  title: string;
  released_at: string;
  updated_at: string;
  tags: string[];
  body: string;
  short_description: string;
  is_markdown: boolean;
  is_private: boolean;
  is_temp: boolean;
  thumbnail: string | null;
  comments_count: number;
  url_slug: string;
  likes: number;
  liked: boolean;
  user: UserType;
  comments: string[];
  series: SeriesType | null;
  linked_posts: LinkedPostsType;
}

interface SeriesType {
  id: string;
  name: string;
}

interface VelogDataResponse {
  data: {
    post: PostType;
  };
}

interface UserType {
  id: string;
  username: string;
  is_followed: boolean;
  profile: UserProfileType;
  velog_config: VelogConfigType;
}

interface UserProfileType {
  id: string;
  display_name: string;
  thumbnail: string | null;
  short_bio: string;
  profile_links: ProfileLinksType;
}

interface ProfileLinksType {
  github: string;
}

interface VelogConfigType {
  title: string;
}

interface PreviousLinkedPostsType {
  id: string;
  title: string;
  url_slug: string;
  user: PostUserType;
}

interface PostUserType {
  id: string;
  username: string;
}

interface LinkedPostsType {
  previous: PreviousLinkedPostsType | null;
  next: PreviousLinkedPostsType | null;
}

interface ParamsType {
  slug: string;
}
