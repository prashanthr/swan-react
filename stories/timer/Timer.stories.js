import React, { useState } from 'react'
import { Timer as TimerImports, Button } from '../../src'
import './index.css'

const TimerWithEffects = TimerImports.TimerWithEffects
const Timer = TimerImports.Timer

export default {
  title: 'Timer',
  component: TimerWithEffects,
}

const defaultStopwatchStart = { hour: 0, minute: 0, second: 0 }
const defaultCountdownStart = { hour: 0, minute: 0, second: 15 }

export const SimpleStopwatchTimer = () => {
  return (
    <div>
      <TimerWithEffects
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
      <TimerWithEffects
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
      <TimerWithEffects
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
      <TimerWithEffects
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
      <TimerWithEffects
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
      <TimerWithEffects
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
      <TimerWithEffects
        type={'progress'}
        progressOptions={{ strokeColor: 'orange' }}
        start={defaultCountdownStart}
        className={'swan-progress-dark-example'}
        digitClassName={'swan-progress-dark-example-digit'}
      />
    </div>
  )
}

export const TimerWithNoEffects = () => {
  const currentTime = { ...defaultCountdownStart, second: defaultCountdownStart.second - 2 }
  return (
    <div>
      <Timer
        type={'progress'}
        start={defaultCountdownStart}
        currentTime={currentTime}
        large
      />
      <div>
        Here's a timer with no effects where you manage your own current time. <br />
        Effects are included with the exports, see the TimerWithEffects example in the repo to set it up yourself.<br /><br />
        Start: {JSON.stringify(defaultCountdownStart)}<br />
        Current Time: {JSON.stringify(currentTime)}<br />
      </div>
    </div>
  )
}
