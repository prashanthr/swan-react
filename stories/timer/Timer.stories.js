import React, { useState } from 'react'
import { Timer, Button } from '../../src'

export default {
  title: 'Timer',
  component: Timer,
}

const defaultStart = { hour: 0, min: 0, second: 15 }

export const SimpleTimer = () => {
  return (
    <div>
      <Timer
        start={defaultStart}
      />
    </div>
  )
}

export const PausableTimer = () => {
  const [isPaused, pause] = useState(false)
  return (
    <div>
      <Timer
        isPaused={isPaused}
        start={defaultStart}
      />
      <Button
        withBorder
        onClick={() => pause(isPaused => !isPaused)}
        value={isPaused ? 'Unpause' : 'Pause'}
      />
    </div>
  )
}
