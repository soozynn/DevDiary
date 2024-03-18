"use client";

import Link from "next/link";
import { useEffect, useState } from "react";

export default function Footer() {
  const [koreanLocalTime, setKoreanLocalTime] = useState({
    dayPeriod: "",
    hours: "",
    minutes: "",
  });
  const [koreanLocalTimeAnimate, setKoreanLocalTimeAnimate] = useState(false);

  useEffect(() => {
    let requestId: number;
    let prevMinute = koreanLocalTime.minutes;

    const updateKoreanLocalTime = () => {
      const currentKoreanLocalTime = new Intl.DateTimeFormat("ko-KR", {
        timeZone: "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).formatToParts(new Date());

      const currentDayPeriod = currentKoreanLocalTime.find(
        (koreanLocalTime) => koreanLocalTime.type === "dayPeriod",
      )?.value;
      const currentHour = currentKoreanLocalTime.find(
        (koreanLocalTime) => koreanLocalTime.type === "hour",
      )?.value;
      const currentMinute = currentKoreanLocalTime.find(
        (koreanLocalTime) => koreanLocalTime.type === "minute",
      )?.value;

      console.log(currentHour, currentMinute);
      if (currentMinute !== prevMinute) {
        setKoreanLocalTime((prevKoreanLocalTime) => ({
          ...prevKoreanLocalTime,
          dayPeriod: currentDayPeriod || prevKoreanLocalTime.dayPeriod,
          hours: currentHour || prevKoreanLocalTime.hours,
          minutes: currentMinute || prevKoreanLocalTime.minutes,
        }));
        setKoreanLocalTimeAnimate(true);
        setTimeout(() => setKoreanLocalTimeAnimate(false), 500);
        prevMinute = currentMinute || koreanLocalTime.minutes;
      }

      requestAnimationFrame(updateKoreanLocalTime);
    };

    requestId = requestAnimationFrame(updateKoreanLocalTime);

    return () => cancelAnimationFrame(requestId);
  }, []);

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
              <h5 className="mb-2 footer-h5">KOREA LOCAL TIME</h5>
              <span
                className={`${koreanLocalTimeAnimate ? "animate-slideUp" : ""}`}
              >
                {koreanLocalTime.dayPeriod} {koreanLocalTime.hours}:
                {koreanLocalTime.minutes}
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
