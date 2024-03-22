import TimePart from "@/components/TimePart";
import React from "react";

interface Time {
  dayPeriod: string;
  hourTens: string;
  hourOnes: string;
  minuteTens: string;
  minuteOnes: string;
}

interface Animate {
  hourTens: boolean;
  hourOnes: boolean;
  minuteTens: boolean;
  minuteOnes: boolean;
}

interface TimeDisplayProps {
  time: Time;
  animate: Animate;
}

function TimeDisplay({ time, animate }: TimeDisplayProps) {
  return (
    <>
      <span>
        {time.dayPeriod}{" "}
        <TimePart time={time.hourTens} animate={animate.hourTens} />
        <TimePart time={time.hourOnes} animate={animate.hourOnes} />
        :
        <TimePart time={time.minuteTens} animate={animate.minuteTens} />
        <TimePart time={time.minuteOnes} animate={animate.minuteOnes} />
      </span>
    </>
  );
}

export default React.memo(TimeDisplay);
