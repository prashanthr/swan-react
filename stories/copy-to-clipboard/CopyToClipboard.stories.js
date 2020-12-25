import React from 'react'
import { CopyToClipboard as Library } from '../../src'
import { action } from '@storybook/addon-actions'
import './index.css'

const { CopyToClipboard, effects } = Library

export default {
  title: 'CopyToClipboard',
  component: CopyToClipboard,
}

export const CopyTextToClipboard = () => (
  <div>
    <CopyToClipboard
      text={'Hello world'}
      buttonClassName='copy-to-clip-btn'
      onCopy={({ data }) => { alert(`Copied: ${data}`); action('onCopy'); }}
    />
  </div>
)

export const CopyInputToClipboard = () => (
  <div>
    <CopyToClipboard
      text={'Hello world'}
      isInput
      buttonClassName='copy-to-clip-btn'
      onCopy={({ data }) => { alert(`Copied: ${data}`); action('onCopy'); }}
    />
  </div>
)


