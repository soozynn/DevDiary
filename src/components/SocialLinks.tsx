import Link from "next/link";
import React from "react";

function SocialLinks() {
  return (
    <nav className="flex gap-4">
      <Link href="https://velog.io/@serenity/posts" target="_blank">
        Posts
      </Link>
      <Link href="https://github.com/soozynn" target="_blank">
        GitHub
      </Link>
    </nav>
  );
}

export default React.memo(SocialLinks);
