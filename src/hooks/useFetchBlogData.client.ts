"use client";

import { useState, useEffect } from "react";

interface ReadPostListVariables {
  username: string;
  url_slug: string;
}

interface GetPostsInput {
  cursor: string;
  username: string;
  limit: number;
  tag: string;
}

interface ReadContentPostsVariables {
  input: GetPostsInput;
}

export default function useFetchBlogData(
  query: string,
  variables: ReadPostListVariables | ReadContentPostsVariables,
) {
  const [blogData, setBlogData] = useState([]);
  // const [error, setError] = useState(null);
  // const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch(process.env.NEXT_PUBLIC_API_BASE_URL!, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            query,
            variables,
          }),
          cache: "force-cache",
        });

        if (!response.ok) {
          throw new Error(`Error! ${response.status} :(`);
        }

        const data = await response.json();
        setBlogData(data);
        console.log(blogData);
      } catch (error) {
        console.error("Failed to fetch blog data :(", error);
        // setError(error);
      } finally {
        // setLoading(false);
      }
    })();
  }, [blogData, query, variables]);

  return { blogData };
}
