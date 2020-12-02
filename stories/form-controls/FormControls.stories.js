import React, { useState } from 'react'
import { action } from '@storybook/addon-actions'
import { FormControls } from '../../src'

export default {
  title: 'Form Controls',
  component: NumericInput,
}

const WrapFormElement = ({ title, children }) => (
  <div>
    {title}
    <br />
    {children}
  </div>
)

export const NumericInput = () => (
  <WrapFormElement title='Numeric Input'>
    <FormControls.NumericInput
      defaultValue={5}
      min={1}
      max={10}
      onChange={action('onChange')}
      onBlur={action('onBlur')}
    />
  </WrapFormElement>
)
