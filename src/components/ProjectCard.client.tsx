import { RepositoryInformation } from "@/app/projects/page";
import Link from "next/link";

export default function ProjectCard({
  name,
  description,
  url,
  createdAt,
  updatedAt,
}: RepositoryInformation) {
  // 카드 UI - 호버 시 파르르 돌도록 효과 넣기
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);

    const formattedDate = new Intl.DateTimeFormat("ko-KR", {
      year: "2-digit",
      month: "2-digit",
      day: "2-digit",
    }).format(date);

    return formattedDate.replace(/\.\s*$/, "");
  };

  // 모바일 크기에선 하나씩 보여지도록 하고 싶고, 아닐 경우 4개의 카드가 다 보이도록 반응형 주기
  return (
    <div className="m-4 block rounded-lg bg-white shadow-xl">
      <div className="relative overflow-hidden bg-cover bg-no-repeat">
        <img
          className="rounded-t-lg"
          src="https://tecdn.b-cdn.net/img/new/standard/nature/186.jpg"
          alt="project repo image"
        />
      </div>
      <div className="text-surface p-6 dark:text-white">
        <h5 className="mb-2 text-xl font-medium leading-tight">{name}</h5>
        <p className="mb-4 text-base">{description}</p>
        <p>Created At: {formatDate(createdAt)}</p>
        <p>Updated At: {formatDate(updatedAt)}</p>
        <Link href={url} target="_blank" rel="noopener noreferrer">
          <button
            type="button"
            className="my-2 rounded-full border border-blue-300 px-6 pb-2 pt-2.5 text-xs uppercase text-blue-600 shadow-2xl shadow-blue-500/50 transition duration-150 ease-in-out hover:border-transparent hover:bg-blue-600 hover:text-white focus:outline-none focus:ring-blue-600 focus:ring-offset-2"
          >
            Visit Repository
          </button>
        </Link>
      </div>
    </div>
  );
}
