"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [localTime, setLocalTime] = useState(new Date());

  useEffect(() => {
    let requestId: number;
    let prevMinute: number;

    const updateLocalTime = () => {
      const currentDate = new Date();
      const currentMinute = currentDate.getMinutes();

      if (currentMinute !== prevMinute) {
        prevMinute = currentMinute;
        setLocalTime(currentDate);
      }

      requestId = requestAnimationFrame(updateLocalTime);
    };

    requestId = requestAnimationFrame(updateLocalTime);

    return () => cancelAnimationFrame(requestId);
  }, [localTime]);

  return (
    <footer className="bg-black text-white fixed bottom-0 w-full">
      <div className="md:py-10 px-10 py-6">
        <div className="md:flex justify-between md:divide-none divide-y divide-[#727274]">
          <div className="md:hidden pt-5 pb-8">
            <h5 className="mb-2 footer-h5">SOCIALS</h5>
            <nav className="flex gap-4">
              <Link href="https://velog.io/@serenity/posts">Posts</Link>
              <Link href="https://github.com/soozynn">GitHub</Link>
            </nav>
          </div>
          <div className="flex gap-10 pt-8 pb-5 md:pt-0 justify-between">
            <div>
              <h5 className="mb-2 footer-h5">VERSION</h5>
              <p>2024 © Edition </p>
            </div>
            <div>
              <h5 className="mb-2 footer-h5">LOCAL TIME</h5>
              <span>
                {localTime.toLocaleTimeString("ko-KR", {
                  hour12: true,
                  hour: "2-digit",
                  minute: "2-digit",
                })}
              </span>
            </div>
          </div>
          <div className="md:block hidden">
            <h5 className="mb-2 footer-h5">SOCIALS</h5>
            <nav className="flex gap-4">
              <Link href="https://velog.io/@serenity/posts" target="_blank">
                Posts
              </Link>
              <Link href="https://github.com/soozynn" target="_blank">
                GitHub
              </Link>
            </nav>
          </div>
        </div>
        <nav className="pt-2 footer-h5 md:m-0">
          <span>Built with </span>
          <Link href="https://nextjs.org/" target="_blank">
            Next.js,{" "}
          </Link>
          <Link href="https://tailwindcss.com/" target="_blank">
            Tailwind
          </Link>
          <span> and </span>
          <Link href="https://vercel.com/" target="_blank">
            Vercel
          </Link>
        </nav>
      </div>
    </footer>
  );
}
