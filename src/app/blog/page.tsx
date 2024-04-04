import BlogContentWrapper from "@/containers/BlogContentWrapper";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Dev Blog",
};

export default function BlogPage() {
  return (
    // 컨텐트 컨텍스트 목록이 보여지고, 연도별로 구분짓고 싶고,
    // 컨텐트를 눌러서 내부 페이지로 진입하면 내용 보여지고, 코드는 구분되고
    // 페이지네이션으로 가져오고 최대 10개까지만 보여주기
    // 10개씩 끊어서 lazy load
    <>
      <BlogContentWrapper />
    </>
  );
}
