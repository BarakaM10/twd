import React, { useState, useEffect } from 'react';
import styles from './Timer.module.css'
import { Clock } from 'lucide-react';

const Timer = () => {
  const [timeLeft, setTimeLeft] = useState(3600);

  useEffect(() => {
    if (timeLeft <= 0) return;

    const interval = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [timeLeft]);

  // Convert seconds to hours, minutes, seconds
  const formatTime = (totalSeconds:number) => {
    const hours = Math.floor(totalSeconds / 3600);
    const minutes = Math.floor((totalSeconds % 3600) / 60);
    const seconds = totalSeconds % 60;

    return `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}:${String(seconds).padStart(2, '0')}`;
  };

  return (
    <div className={styles.timerContainer}>
        <div className={styles.count}>
          <Clock className={styles.clockIcon} />
          <h2> {formatTime(timeLeft)}</h2>
        </div>

        <div className={styles.liveButton}>
            <div className={styles.liveDot}></div>
            <div className={styles.liveText}>
                Live Counting
            </div>
        </div>
    </div>
  );
};
export default Timer;
