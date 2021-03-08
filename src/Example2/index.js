import { useEffect, useState } from 'react';

export const Example2 = () => {
  const [time, setTime] = useState(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString());
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return <pre>{time}</pre>;
};
