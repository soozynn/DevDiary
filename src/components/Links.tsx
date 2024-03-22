import Link from "next/link";
import React from "react";

function Links({ text, link }: { text: string; link: string }) {
  return (
    <Link href={link} target="_blank">
      {text}
    </Link>
  );
}

export default React.memo(Links);
