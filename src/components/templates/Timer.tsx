import { VFC, useEffect, useState, useMemo, useCallback, useRef } from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import { Button } from "@mui/material";
import { Typography } from "@mui/material";
import { getPrimes } from "lib/math-tools";
import useTimer from "hooks/use-timer";

const Timer: VFC<{ limit: number }> = ({ limit }) => {
  const [timeLeft, isPrime, reset] = useTimer(limit);

  return (
    <Card>
      <a>Counter</a>
      <CardContent>
        <Typography>time</Typography>
        <Typography color={isPrime ? "error" : "primary"}>
          {timeLeft}
        </Typography>
        <Button onClick={reset}>RESET</Button>
      </CardContent>
    </Card>
  );
};

export default Timer;
