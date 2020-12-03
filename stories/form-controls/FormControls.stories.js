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

export const TextInput = () => (
  <WrapFormElement title='Text Input'>
    <FormControls.TextInput
      defaultValue={'Hello'}
      onChange={action('onChange')}
      onBlur={action('onBlur')}
    />
  </WrapFormElement>
)

export const SubmitButton = () => (
  <WrapFormElement title='Submit Button'>
    <FormControls.SubmitButton
      onClick={action('onClick')}
    />
  </WrapFormElement>
)

const formSubmitAction = action('onFormSubmit');
export const Form = () => (
  <WrapFormElement title='Custom Form'>
    <FormControls.Form
      includeSubmitButton
      onChange={action('onFormChange')}
      onSubmit={event => {
        event.preventDefault();
        formSubmitAction(event);
      }}
    >
      <FormControls.TextInput
        defaultValue={'Hello'}
        elementOnly
      />
      <br /><br />
      <FormControls.NumericInput
        defaultValue={5}
        elementOnly
      />
      <br /><br />
    </FormControls.Form>
  </WrapFormElement>
)
