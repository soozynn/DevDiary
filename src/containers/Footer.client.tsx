"use client";

import Links from "@/components/Links.server";
import SocialLinks from "@/containers/SocialLinks.server";
import TimeDisplay from "@/containers/TimeDisplay.server";
import { useThemeContext } from "@/contexts/ThemeContext.client";
import { useEffect, useState, useRef } from "react";

export default function Footer() {
  const { isBrightTheme } = useThemeContext();

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
  const timeRef = useRef(time);

  useEffect(() => {
    let requestID: number;
    let timeoutID: number;

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
      const prevMinutes = timeRef.current.minuteTens.concat(
        timeRef.current.minuteOnes,
      );

      if (currentMinutes !== prevMinutes) {
        setTime(newTime);

        const newAnimate = {
          hourTens: newTime.hourTens !== timeRef.current.hourTens,
          hourOnes: newTime.hourOnes !== timeRef.current.hourOnes,
          minuteTens: newTime.minuteTens !== timeRef.current.minuteTens,
          minuteOnes: newTime.minuteOnes !== timeRef.current.minuteOnes,
        };

        setAnimate(newAnimate);
        timeoutID = window.setTimeout(
          () =>
            setAnimate({
              hourTens: false,
              hourOnes: false,
              minuteTens: false,
              minuteOnes: false,
            }),
          5000,
        );

        timeRef.current = newTime;
      }

      requestAnimationFrame(updateKoreanLocalTime);
    };

    requestID = requestAnimationFrame(updateKoreanLocalTime);

    return () => {
      cancelAnimationFrame(requestID);
      clearTimeout(timeoutID);
    };
  }, []);

  return (
    <footer
      className={`${isBrightTheme ? "light-theme border-t border-t-gray-200" : "dark-theme"} bottom-0 flex w-full flex-shrink-0`}
    >
      <div className="px-10 py-6 md:py-10">
        <div className="justify-between divide-y divide-[#727274] md:flex md:divide-none">
          <div className="pb-8 pt-5 md:hidden">
            <h5 className="footer-h5 mb-2">SOCIALS</h5>
            <SocialLinks />
          </div>

          <div className="flex justify-between gap-10 pb-5 pt-8 md:pt-0">
            <div>
              <h5 className="footer-h5 mb-2">VERSION</h5>
              <p>2024 © Edition </p>
            </div>
            <div>
              <h5 className="footer-h5 mb-2">KOREA LOCAL TIME</h5>
              <TimeDisplay animate={animate} time={time} />
            </div>
          </div>
          <div className="hidden md:block">
            <h5 className="footer-h5 mb-2">SOCIALS</h5>
            <SocialLinks />
          </div>
        </div>

        <nav className="footer-h5 pt-2 md:m-0">
          <span>Built with </span>
          <Links text={"Next.js, "} link={"https://nextjs.org"} />
          <Links text={"Tailwind"} link={"https://tailwindcss.com"} />
          <span> and </span>
          <Links text={"Vercel"} link={"https://vercel.com"} />
        </nav>
      </div>
    </footer>
  );
}
