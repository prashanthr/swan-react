import React, { useState } from 'react'
import { Timer, Button } from '../../src'
import './index.css'

export default {
  title: 'Timer',
  component: Timer,
}

const defaultStopwatchStart = { hour: 0, minute: 0, second: 0 }
const defaultCountdownStart = { hour: 0, minute: 0, second: 15 }

export const SimpleStopwatchTimer = () => {
  return (
    <div>
      <Timer
        type={'stopwatch'}
        start={defaultStopwatchStart}
        large
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
        large
      />
      <Button
        withBorder
        onClick={() => pause(isPaused => !isPaused)}
        value={isPaused ? 'Unpause' : 'Pause'}
        large
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
        large
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
        large
      />
      <Button
        withBorder
        onClick={() => pause(isPaused => !isPaused)}
        value={isPaused ? 'Unpause' : 'Pause'}
      />
    </div>
  )
}

export const SimpleCountdownProgressTimer = () => {
  return (
    <div>
      <Timer
        type={'progress'}
        start={defaultCountdownStart}
      />
    </div>
  )
}


export const PausableCountdownProgressTimer = () => {
  const [isPaused, pause] = useState(false)
  return (
    <div>
      <Timer
        type={'progress'}
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

export const SimpleCountdownProgressTimerDarkCustom = () => {
  return (
    <div>
      <Timer
        type={'progress'}
        start={defaultCountdownStart}
        className={'swan-progress-dark-example'}
        digitClassName={'swan-progress-dark-example-digit'}
      />
    </div>
  )
}
