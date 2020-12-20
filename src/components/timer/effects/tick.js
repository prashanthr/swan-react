const tick = ({ time, countdown = false, isPaused = false }) => {
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

export default tick
