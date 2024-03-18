"use client";

import Link from "next/link";
import { useEffect, useState, useRef } from "react";

export default function Footer() {
  const [time, setTime] = useState({
    dayPeriod: "",
    hourTens: "",
    hourOnes: "",
    minuteTens: "",
    minuteOnes: "",
  });
  const [animate, setAnimate] = useState({
    hourTens: false,
    hourOnes: false,
    minuteTens: false,
    minuteOnes: false,
  });
  const prevMinute = useRef("");

  useEffect(() => {
    let requestId: number;

    const updateKoreanLocalTime = () => {
      const formatterKoreanTime = new Intl.DateTimeFormat("ko-KR", {
        timeZone: "Asia/Seoul",
        hour: "2-digit",
        minute: "2-digit",
        hour12: true,
      }).formatToParts(new Date());

      const getTimeValue = (type: string) => {
        const part =
          formatterKoreanTime.find((part) => part.type === type)?.value || "00";
        return part.padStart(2, "0");
      };

      const newTime = {
        dayPeriod:
          formatterKoreanTime.find(
            (koreanTime) => koreanTime.type === "dayPeriod",
          )?.value || "",
        hourTens: getTimeValue("hour")[0],
        hourOnes: getTimeValue("hour")[1],
        minuteTens: getTimeValue("minute")[0],
        minuteOnes: getTimeValue("minute")[1],
      };

      const currentMinutes = newTime.minuteTens.concat(newTime.minuteOnes);

      if (currentMinutes !== prevMinute.current) {
        console.log("?");
        setTime(newTime);

        const newAnimate = {
          hourTens: newTime.hourTens !== time.hourTens,
          hourOnes: newTime.hourOnes !== time.hourOnes,
          minuteTens: newTime.minuteTens !== time.minuteTens,
          minuteOnes: newTime.minuteOnes !== time.minuteOnes,
        };
        setAnimate(newAnimate);
        setTimeout(
          () =>
            setAnimate({
              hourTens: false,
              hourOnes: false,
              minuteTens: false,
              minuteOnes: false,
            }),
          500,
        );

        prevMinute.current = currentMinutes;
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
              <span>
                {time.dayPeriod}{" "}
                <span
                  className={`${animate.hourTens ? "animate-slide-up" : ""}`}
                >
                  {time.hourTens}
                </span>
                <span
                  className={`${animate.hourOnes ? "animate-slide-up" : ""}`}
                >
                  {time.hourOnes}
                </span>
                :
                <span
                  className={`${animate.minuteTens ? "animate-slide-up" : ""}`}
                >
                  {time.minuteTens}
                </span>
                <span
                  className={`${animate.minuteOnes ? "animate-slide-up" : ""}`}
                >
                  {time.minuteOnes}
                </span>
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
