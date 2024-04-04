"use client";

import { getGithubPinnedRepositories } from "@/app/projects/page";
import React, { useEffect } from "react";

export default function ProjectCard() {
  useEffect(() => {
    console.log(getGithubPinnedRepositories());
  }, []);

  return <>BlogContext test</>;
}
