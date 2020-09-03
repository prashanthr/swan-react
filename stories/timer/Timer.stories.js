import React, { useState } from 'react'
import { Timer, Button } from '../../src'

export default {
  title: 'Timer',
  component: Timer,
}

const defaultStopwatchStart = { hour: 0, minute: 0, second: 15 }
const defaultCountdownStart = { hour: 0, minute: 1, second: 30 }

export const SimpleStopwatchTimer = () => {
  return (
    <div>
      <Timer
        type={'stopwatch'}
        start={defaultStopwatchStart}
      />
    </div>
  )
}

export const PausableStopwatchTimer = () => {
  const [isPaused, pause] = useState(false)
  return (
    <div>
      <Timer
        type={'stopwatch'}
        isPaused={isPaused}
        start={defaultStopwatchStart}
      />
      <Button
        withBorder
        onClick={() => pause(isPaused => !isPaused)}
        value={isPaused ? 'Unpause' : 'Pause'}
      />
    </div>
  )
}

export const SimpleCountdownTimer = () => {
  return (
    <div>
      <Timer
        type={'countdown'}
        start={defaultCountdownStart}
      />
    </div>
  )
}

export const PausableCountdownTimer = () => {
  const [isPaused, pause] = useState(false)
  return (
    <div>
      <Timer
        type={'countdown'}
        isPaused={isPaused}
        start={defaultCountdownStart}
      />
      <Button
        withBorder
        onClick={() => pause(isPaused => !isPaused)}
        value={isPaused ? 'Unpause' : 'Pause'}
      />
    </div>
  )
}
