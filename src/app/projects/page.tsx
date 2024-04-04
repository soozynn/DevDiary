import ProjectCard from "@/components/ProjectCard.client";

// import type { Metadata } from "next";

// export const metadata: Metadata = {
//   title: "Projects",
// };

/** Get from a Github pinned project using Github's GraphQL API */
export const getGithubPinnedRepositories = async () => {
  try {
    const response = await fetch("https://api.github.com/graphql", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${process.env.NEXT_PUBLIC_GITHUB_PERSONAL_ACCESS_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        query: `{
            user(login: "soozynn") {
              pinnedItems(first: 6, types: REPOSITORY) {
                totalCount
                nodes {
                  ... on Repository {
                    name
                    description
                    url
                    createdAt
                    updatedAt
                  }
                }
              }
            }
          }`,
      }),
    });

    if (!response.ok) {
      throw new Error(`GitHub API error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error fetching GitHub pinned repositories:", error);
  }
};

export default function ProjectsPage() {
  // 깃헙에서 핀 걸어온 프로젝트들만 가져오기
  // 프로젝트의 이미지는 컴포넌트별 끼워쓸 수 있게 재사용성으로 만들기
  // 내부 항목 컴포넌트 만들어서 카드 형식으로 보여지도록 설정하고 클릭 시 레포 새탭으로 이동
  // 카드 UI - 호버 시 파르르 돌도록 효과 넣기

  return (
    <>
      <ProjectCard />
    </>
  );
}
