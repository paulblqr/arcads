import { useState, useEffect, useCallback } from "react";
import style from "./Countdown.module.scss";
import Button from "../Button/Button";
export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState(30);

  useEffect(() => {
    const interval = setInterval(() => {
      if (timeLeft == 0) {
        clearInterval(interval);
        return;
      }
      setTimeLeft(timeLeft - 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, [timeLeft]);

  const sendNewMail = useCallback(() => {
    alert("Mail sent!");
    setTimeLeft(30);
  }, []);

  return (
    <div className={style.Countdown}>
      {timeLeft === 0 ? (
        <Button onClick={() => sendNewMail()}>Send a new email</Button>
      ) : (
        <div className={style.Item}>
          Resend mail in <span>{timeLeft}</span> seconds
        </div>
      )}
    </div>
  );
}
