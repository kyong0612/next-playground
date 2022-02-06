import { VFC, useEffect, useState, useMemo, useCallback, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { getPrimes } from "lib/math-tools";

const Timer: VFC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, setTimeLeft] = useState(limit);
  const timerId = useRef<NodeJS.Timeout>();
  const primes = useMemo(() => getPrimes(limit), [limit]);
  const tick = (): void => setTimeLeft((t) => t - 1);

  const clearTimer = () => {
    if (timerId.current) clearInterval(timerId.current);
  };

  const reset = useCallback(() => {
    clearTimer();
    timerId.current = setInterval(tick, 1000);
    setTimeLeft(limit);
  }, [limit]);

  useEffect(() => {
    const timerId = setInterval(tick, 1000);
    return () => reset();
  }, [reset]);

  useEffect(() => {
    if (timeLeft === 0) reset();
  }, [timeLeft, reset]);

  return (
    <Card>
      <a>Counter</a>
      <CardContent>
        <Typography>time</Typography>
        <Typography color={primes.includes(timeLeft) ? "error" : "primary"}>
          {timeLeft}
        </Typography>
        <Button onClick={reset}>RESET</Button>
      </CardContent>
    </Card>
  );
};

export default Timer;
