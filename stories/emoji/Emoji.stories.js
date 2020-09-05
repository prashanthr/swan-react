import React from 'react'
import { Emoji } from '../../src'

export default {
  title: 'Emoji',
  component: Emoji,
}

const Wrap = ({ comp }) => (
  <div>
    Hello {comp}
  </div>
)

export const SimpleEmoji = () => (
  <Wrap
    comp={<Emoji
      label='Penguin'
      symbol='🐧'
    />}
  />
)
