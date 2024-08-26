import React, { useState, useEffect } from "react";
export const useCountdown = () => {
  const COUNTDOWN_TARGET = new Date("2024-11-08T08:00:00");

  const getTimeLeft = () => {
    const totalTimeLeft = COUNTDOWN_TARGET - new Date();
    const days = Math.floor(totalTimeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((totalTimeLeft / (1000 * 60 * 60)) % 24);
    const minutes = Math.floor((totalTimeLeft / (1000 * 60)) % 60);
    const seconds = Math.floor((totalTimeLeft / 1000) % 60);
    return {
      dias: days > 0 ? days : 0,
      horas: hours > 0 ? hours : 0,
      minutos: minutes > 0 ? minutes : 0,
      segundos: seconds > 0 ? seconds : 0,
    };
  };

  const [timeLeft, setTimeLeft] = useState(() => getTimeLeft());
  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return {
    timeLeft,
  };
};
