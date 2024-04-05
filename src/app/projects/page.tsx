import ProjectCard from "@/components/ProjectCard.client";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "My Project List",
};

/** Get from a Github pinned project list using Github's GraphQL API */
const getPinnedRepositories = async (username: string) => {
  const response: GithubResponse = await fetch(
    "https://api.github.com/graphql",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.GITHUB_PERSONAL_ACCESS_TOKEN}`,
      },
      body: JSON.stringify({
        query: `{
          user(login: "${username}") {
            pinnedItems(first: 6, types: REPOSITORY) {
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
    },
  ).then((res) => res.json());

  const pinnedProjectList =
    response?.data?.user?.pinnedItems?.nodes?.map(
      (projectInfo: RepositoryInformation) => projectInfo,
    ) || [];

  return pinnedProjectList;
};

export default async function ProjectsPage() {
  // 프로젝트의 이미지는 컴포넌트별 끼워쓸 수 있게 재사용성으로 만들기
  const pinnedProjectList = await getPinnedRepositories("soozynn");

  return (
    <>
      {pinnedProjectList.length > 0 ? (
        pinnedProjectList.map((projectInformation) => (
          <ProjectCard key={projectInformation.url} {...projectInformation} />
        ))
      ) : (
        <div>There is no pinned project list :{"("}</div>
      )}
    </>
  );
}

export interface RepositoryInformation {
  name: string;
  description: string;
  url: string;
  createdAt: string;
  updatedAt: string;
}

interface GithubResponse {
  data?: { user: { pinnedItems: { nodes: RepositoryInformation[] } } };
}
