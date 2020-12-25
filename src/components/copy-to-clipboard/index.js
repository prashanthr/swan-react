import React from 'react'
import PropTypes from 'prop-types'
import Button from '../button'
import { copyToClipboard } from './effects/copy'
import { uuid } from '../../utils/uuid'
import FormControls from '../form-controls'
import './index.css'

const effects = { copyToClipboard }

const CopyToClipboard = ({ elementId, text, isInput, className, customButton, buttonText, buttonEmoji, showButtonEmoji, buttonClassName, onCopy }) => (
  <div className={`swan-copy-to-clipboard ${className}`}>
    {isInput
      ? (
          <FormControls.TextInput
            id={elementId}
            defaultValue={text}
          />
        )
      : (
          <span id={elementId}>
            {text}
          </span>
      )
    }
    &nbsp;
    {customButton
      ? (cloneElement(<customButton />, { onClick: () => effects.copyToClipboard({
              elementId,
              isInputEl: isInput,
              onCopy
            })
          })
        )
      : (
        <Button
          className={`${buttonClassName}`}
          value={`${buttonText} ${showButtonEmoji ? buttonEmoji : ''}`}
          onClick={() => effects.copyToClipboard({
            elementId,
            isInputEl: isInput,
            onCopy
          })}
          withBorder
        />
      )
    }
  </div>
)

CopyToClipboard.propTypes = {
  elementId: PropTypes.string,
  text: PropTypes.string,
  isInput: PropTypes.bool,
  className: PropTypes.string,
  customButton: PropTypes.element,
  buttonClassName: PropTypes.string,
  buttonText: PropTypes.string,
  buttonEmoji: PropTypes.string,
  showButtonEmoji: PropTypes.bool,
  onCopy: PropTypes.func
}

CopyToClipboard.defaultProps = {
  elementId: uuid({ short: true }),
  className: '',
  buttonClassName: '',
  buttonText: 'Copy',
  buttonEmoji: '📋',
  showButtonEmoji: true
}

export {
  CopyToClipboard,
  effects
}
