import { useEffect, useState } from 'react';

const Time = () => {
  const [time, setTime] = useState('');

  useEffect(() => {
    const updateClock = () => {
      const now = new Date();
      const istTime = now.toLocaleTimeString('en-IN', {
        timeZone: 'Asia/Kolkata',
        hour: '2-digit',
        minute: '2-digit',
      });
      setTime(istTime);
    };

    updateClock();
    const interval = setInterval(updateClock, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className='kyiv-clock'>
        <h2>Bengaluru, India:</h2>
        <p>(GMT+5:30) {time}</p>
      </div>
    </>
  );
};

export default Time;
