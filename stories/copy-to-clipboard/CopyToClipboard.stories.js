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



export const CustomCopyToClipboard = () => (
  <div>
    <CopyToClipboard
      inputClassName='custom-input'
      text={'Hello world'}
      isInput
      buttonText='Copy'
      buttonClassName='custom-btn'
      onCopy={({ data }) => { alert(`Copied: ${data}`); action('onCopy'); }}
    />
  </div>
)

export const CustomCopyToClipboardWithEffectOnly = () => (
  <div>
    <input type='text' defaultValue='Hello World' id='myInput' className='custom-input' />
    <div>
      <button
        onClick={() => effects.copyToClipboard({
          elementId: 'myInput',
          isInputEl: true,
          onCopy: ({ data }) => { alert(`Copied: ${data}`); action('onCopy'); }
        })}
        className='custom-btn'
      >
        Copy
      </button>
    </div>
  </div>
)

