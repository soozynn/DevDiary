import { RepositoryInformation } from "@/app/projects/page";

export default function ProjectCard({
  name,
  description,
  url,
  createdAt,
  updatedAt,
}: RepositoryInformation) {
  return (
    <div>
      <h3>{name}</h3>
      <p>{description}</p>
      <a href={url} target="_blank" rel="noopener noreferrer">
        Visit Repository
      </a>
      <p>Created at: {createdAt}</p>
      <p>Updated at: {updatedAt}</p>
    </div>
  );
}
