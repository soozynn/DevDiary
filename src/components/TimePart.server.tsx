import React from "react";

function TimePart({ time, animate }: TimePartProps) {
  return (
    <span className={`${animate ? "animate-fade-in-down" : ""}`}>{time}</span>
  );
}

export default React.memo(TimePart);

interface TimePartProps {
  time: string;
  animate: boolean;
}
