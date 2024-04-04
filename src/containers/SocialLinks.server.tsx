import Links from "@/components/Links.server";
import React from "react";

function SocialLinks() {
  return (
    <nav className="flex gap-4">
      <Links text={"Posts"} link={"https://velog.io/@serenity/posts"} />
      <Links text={"GitHub"} link={"https://github.com/soozynn"} />
    </nav>
  );
}

export default React.memo(SocialLinks);
