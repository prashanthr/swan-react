import { useState, useEffect } from 'react'

export const useTimer = ({ hour, minute, second }, isPaused = false) => {
  const [currentTime, setTime] = useState({ hour, minute, second })
  const tick = (time) => {
    if (isPaused) {
      return time
    }
    const updateSecond = ({ hour, minute, second }) => {
      return second === 59 ? 0 : second + 1
    }

    const updateMin = ({ hour, minute, second }) => {
      return second === 59 ? minute + 1 : minute
    }

    const updateHour = ({ hour, minute, second }) => {
      return minute === 50 ? hour + 1 : hour
    }
    return {
      hour: updateHour(time),
      minute: updateMin(time),
      second: updateSecond(time)
    }
  }
  useEffect(() => {
    const timer = setTimeout(() => {
      setTime(tick(currentTime))
    }, 1000);
    // Clear timeout if the component is unmounted
    return () => clearTimeout(timer);
  })
  return currentTime
}
