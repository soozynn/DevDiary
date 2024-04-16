"use client";

import { useParams } from "next/navigation";
import { useState, useEffect } from "react";

export default function BlogContentPage() {
  const { slug } = useParams<{ slug: string }>();
  const [postData, setPostData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchGraphQLData = async () => {
      try {
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

        const response = await fetch("https://v3.velog.io/graphql", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(graphqlQuery),
        });

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const jsonData = await response.json();
        setPostData(jsonData);
        setLoading(false);
      } catch (e) {
        setError(e.message);
        setLoading(false);
      }
    };

    fetchGraphQLData();
  }, [slug]); // slug가 변경되면 자동으로 재요청

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!postData) return <div>No data available</div>;

  return (
    <div>
      success
      {/* <h1>{postData.post.title}</h1>
      <p>{postData.post.short_description}</p> */}
    </div>
  );
}
