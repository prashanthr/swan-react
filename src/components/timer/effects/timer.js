import { useState, useEffect } from 'react'

export const useTimer = ({ start, countdown = false, isPaused = false }) => {
  const { hour, minute, second } = start
  const [currentTime, setTime] = useState({ hour, minute, second })
  const tick = (time) => {
    const isZero = ({ hour, minute, second }) => (
      hour === 0 && minute === 0 && second === 0
    )
    if (isPaused || (countdown && isZero(time))) {
      return time
    }
    const updateSecond = ({ hour, minute, second }) => {
      if (countdown) {
        return second === 0 ? 59 : second - 1
      } else {
        return second === 59 ? 0 : second + 1
      }
    }

    const updateMin = ({ hour, minute, second }) => {
      if (countdown) {
        return minute !== 0 && second === 0 ? minute - 1 : minute
      } else {
        return second === 59 ? minute + 1 : minute
      }
    }

    const updateHour = ({ hour, minute, second }) => {
      if (countdown)  {
        return hour !== 0 && minute === 0 && second === 0 ? hour - 1: hour
      } else {
        return minute === 59 ? hour + 1 : hour
      }
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
