import {type CSSProperties, useEffect, useState} from 'react';

/** Saturday, 21 September 2024 14:00:00 GMT+02:00 */
const WEDDING_TIMESTAMP_MS = 1726920000000;

const SECOND_IN_MS = 1000;
const MINUTE_IN_MS = 60 * SECOND_IN_MS;
const HOUR_IN_MS = 60 * MINUTE_IN_MS;
const DAY_IN_MS = 24 * HOUR_IN_MS;

const styleWithValue = (v: number) => ({'--value': v}) as CSSProperties;

export type CountdownProps = {
  daysLabel: string;
  hoursLabel: string;
  minutesLabel: string;
  secondsLabel: string;
};

export default function Countdown(props: CountdownProps) {
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

  function renderCountdown(label: string, value: number | undefined) {
    return (
      <div className="flex flex-col ">
        {value == null ? (
          <span className="text-5xl text-primary">
            <span className="loading loading-infinity loading-lg"></span>
          </span>
        ) : (
          <span className="countdown text-5xl text-primary">
            <span style={styleWithValue(value)}></span>
          </span>
        )}
        {label}
      </div>
    );
  }

  function renderDaysCountdown() {
    const daysCount = timestampLeft == null ? undefined : Math.floor(timestampLeft / DAY_IN_MS);

    if (daysCount == null) {
      return (
        <div className="flex flex-col">
          <span className="countdown text-5xl text-primary">
            <span className="loading loading-infinity loading-lg"></span>
          </span>
          {props.daysLabel}
        </div>
      );
    }

    if (0 > daysCount || daysCount > 100) {
      // daisy countdown can show only 0..100
      return (
        <div className="flex flex-col">
          <span className="text-5xl text-primary">
            <span>{daysCount}</span>
          </span>
          {props.daysLabel}
        </div>
      );
    }

    return (
      <div className="flex flex-col">
        <span className="countdown text-5xl text-primary">
          <span style={styleWithValue(daysCount)}></span>
        </span>
        {props.daysLabel}
      </div>
    );
  }

  return (
    <div className="grid auto-cols-max grid-flow-col place-content-center gap-5">
      {renderDaysCountdown()}

      {renderCountdown(
        props.hoursLabel,
        timestampLeft == null ? undefined : Math.floor((timestampLeft % DAY_IN_MS) / HOUR_IN_MS)
      )}
      {renderCountdown(
        props.minutesLabel,
        timestampLeft == null ? undefined : Math.floor(((timestampLeft % DAY_IN_MS) % HOUR_IN_MS) / MINUTE_IN_MS)
      )}
      {renderCountdown(
        props.secondsLabel,
        timestampLeft == null
          ? undefined
          : Math.floor((((timestampLeft % DAY_IN_MS) % HOUR_IN_MS) % MINUTE_IN_MS) / SECOND_IN_MS)
      )}
    </div>
  );
}
