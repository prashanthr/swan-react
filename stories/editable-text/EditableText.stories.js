import React from 'react'
import { EditableText } from '../../src'
import { action } from '@storybook/addon-actions'
import './index.css'

export default {
  title: 'EditableText',
  component: EditableText,
}

const HelpText = () => (
  <div className='editable-text-help-msg'>
    Hint: Click the above text to edit. While in edit mode, press enter to save and escape to cancel.
  </div>
)

export const SimpleEditableText = () => (
  <>
    <EditableText
      text={'Hello'}
    />
    <HelpText />
  </>
)

export const CustomEditableText = () => (
  <>
    <EditableText
      text={'Hello'}
      wrapperClassName='custom-editable-text-wrap'
      inputClassName='custom-editable-text-input'
      textClassName='custom-editable-text-text'
    />
    <HelpText />
  </>
)


export const SimpleEditableTextWithCallback = () => (
  <>
    <EditableText
      text={'Hello'}
      onUpdate={action('onUpdate')}
    />
    <HelpText />
  </>
)
