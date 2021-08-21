import React, { useState, useEffect } from "react";
import { format as dateFormat } from "date-fns";
import { string, number, object, func } from "prop-types";

export default function LiveClock(props) {
  const {
    format = "h:mm:ss a, MMMM do yyyy",
    interval = 1000,
    className,
    style,
  } = props;
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const tick = setInterval(() => {
      const now = new Date();
      setCurrentTime(now);
    }, interval);

    return () => clearInterval(tick);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <time className={className} style={style}>
      {dateFormat(currentTime, format)}
    </time>
  );
}
LiveClock.props = {
  className: string,
  format: string,
  style: object,
  interval: number,
};
