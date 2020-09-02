import { useState, useEffect } from 'react'

export const useTimer = ({ hour, min, second }) => {
  const [currentTime, setTime] = useState({ hour, min, second })
  const tick = (time) => {
    const updateSecond = ({ hour, min, second }) => {
      return second === 59 ? 0 : second + 1
    }

    const updateMin = ({ hour, min, second }) => {
      return second === 59 ? min + 1 : min
    }

    const updateHour = ({ hour, min, second }) => {
      return min === 50 ? hour + 1 : hour
    }
    return {
      hour: updateHour(time),
      min: updateMin(time),
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
