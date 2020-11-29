import React from 'react'
import { EditableText } from '../../src'
import './index.css'

export default {
  title: 'EditableText',
  component: EditableText,
}

export const SimpleEditableText = () => (
  <EditableText
    text={'hello'}
  />
)
