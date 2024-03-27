"use client";

// import type { Metadata } from "next";
import { useEffect, useState } from "react";

// export const metadata: Metadata = {
//   title: "My Dev Blog",
// };

export default function Blog() {
  const [blogList, setBlogList] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const response = await fetch("https://velog.io/@serenity/posts", {
          cache: "force-cache",
        });
        const data = await response.json();
        console.log(data);
        setBlogList(data);
      } catch (error) {
        console.error("Failed to fetch blog data:", error);
      }
    })();
  }, []);

  return (
    // 컨텐트 컨텍스트 목록이 보여지고, 연도별로 구분짓고 싶고,
    // 컨텐트를 눌러서 내부 페이지로 진입하면 내용 보여지고, 코드는 구분되고
    // 페이지네이션으로 가져오고 최대 10개까지만 보여주기
    <>
      {blogList.map((blog) => (
        <div key={blog}>{blog}</div>
      ))}
    </>
  );
}
