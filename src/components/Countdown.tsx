import {type CSSProperties, useEffect, useState} from "react";
import {t} from "astro-i18n";

/** Saturday, 21 September 2024 14:00:00 GMT+02:00 */
const WEDDING_TIMESTAMP_MS = 1726920000000;

const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = 60 * SECOND_IN_MS;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;
const DAY_IN_MS = 24 * HOUR_IN_MS;

const styleWithValue = (v: number) => ({"--value": v}) as CSSProperties;

export default function Countdown() {
  const [timestampLeft, setTimestampLeft] = useState<undefined | number>(undefined);

  useEffect(() => {
    const rest = WEDDING_TIMESTAMP_MS - Date.now();

    if (rest <= 0) {
      setTimestampLeft(0);
      return;
    }

    setTimestampLeft(rest);

    const interval = setInterval(() => setTimestampLeft(WEDDING_TIMESTAMP_MS - Date.now()), 1000);

    return () => clearInterval(interval);
  }, []);

  const daysCount = timestampLeft == null ? undefined : Math.floor(timestampLeft / DAY_IN_MS);
  const hoursCount = timestampLeft == null ? undefined : Math.floor((timestampLeft % DAY_IN_MS) / HOUR_IN_MS);
  const minutesCount =
    timestampLeft == null ? undefined : Math.floor(((timestampLeft % DAY_IN_MS) % HOUR_IN_MS) / MINUTE_IN_MS);
  const secondsCount =
    timestampLeft == null
      ? undefined
      : Math.floor((((timestampLeft % DAY_IN_MS) % HOUR_IN_MS) % MINUTE_IN_MS) / SECOND_IN_MS);

  const textClasses = "text-4xl font-bold lg:text-5xl lg:tracking-tight xl:text-6xl text-primary";

  function renderCountdown(label: string, value: number | undefined) {
    return (
      <div className="flex flex-col ">
        {value == null ? (
          <span className={textClasses}>
            <span className="loading loading-infinity loading-lg"></span>
          </span>
        ) : (
          <span className={textClasses + " countdown"}>
            <span style={styleWithValue(value)}></span>
          </span>
        )}
        {label}
      </div>
    );
  }

  function renderDaysCountdown() {
    const daysLabel = t("countdown.day", {v: daysCount});

    if (daysCount == null) {
      return (
        <div className="flex flex-col">
          <span className={textClasses + " countdown"}>
            <span className="loading loading-infinity loading-lg"></span>
          </span>
          {daysLabel}
        </div>
      );
    }

    if (0 > daysCount || daysCount > 100) {
      // daisy countdown can show only 0..100
      return (
        <div className="flex flex-col">
          <span className={textClasses}>
            <span>{daysCount}</span>
          </span>
          {daysLabel}
        </div>
      );
    }

    return (
      <div className="flex flex-col">
        <span className={textClasses + " countdown"}>
          <span style={styleWithValue(daysCount)}></span>
        </span>
        {daysLabel}
      </div>
    );
  }

  return (
    <div className="grid auto-cols-max grid-flow-col place-content-center gap-5 text-center">
      {renderDaysCountdown()}

      {renderCountdown(t("countdown.hour", {v: hoursCount}), hoursCount)}
      {renderCountdown(t("countdown.minute", {v: minutesCount}), minutesCount)}
      {renderCountdown(t("countdown.second", {v: secondsCount}), secondsCount)}
    </div>
  );
}
