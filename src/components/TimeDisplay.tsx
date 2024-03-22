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

export default function TimeDisplay({ time, animate }: TimeDisplayProps) {
  return (
    <>
      <span>
        {time.dayPeriod}{" "}
        <span className={`${animate.hourTens ? "animate-fade-in-down" : ""}`}>
          {time.hourTens}
        </span>
        <span className={`${animate.hourOnes ? "animate-fade-in-down" : ""}`}>
          {time.hourOnes}
        </span>
        :
        <span className={`${animate.minuteTens ? "animate-fade-in-down" : ""}`}>
          {time.minuteTens}
        </span>
        <span className={`${animate.minuteOnes ? "animate-fade-in-down" : ""}`}>
          {time.minuteOnes}
        </span>
      </span>
    </>
  );
}
