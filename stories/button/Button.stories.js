import React from 'react'
import { action } from '@storybook/addon-actions'
import { Button } from '../../src'

export default {
  title: 'Button',
  component: Button,
}

export const SimpleButton = () => {
  return (
    <div>
      <Button
        onClick={() => alert('Button was clicked')}
        value='This is a button'
        withBorder
      />
    </div>
  )
}

export const SimpleButtonNoBorder = () => {
  return (
    <div>
      <Button
        onClick={() => alert('Button was clicked')}
        value='This is a button'
      />
    </div>
  )
}

export const CustomButton = () => {
  return (
    <div>
      <Button
        onClick={() => alert('Button was clicked')}
        value={<span style={{ color: 'red' }}>This is custom text</span>}
        withBorder
      />
    </div>
  )
}
