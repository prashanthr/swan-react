import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Text from './components/text'
import TextEdit from './components/text-edit'

const EditableText = ({ text, onUpdate, wrapperClassName, textClassName, inputClassName }) => {
  const [state, updateState] = useState({
    text,
    inEdit: false,
    input: {
      text
    }
  })
  const onTextInputChange = ({ event }) => {
    updateState({
      ...state,
      input: {
        ...state.input,
        text: event.target.value
      }
    })
  }
  const onTextInputEnd = ({ text }) => {
    const previous = state.text
    updateState({
      ...state,
      text,
      input: {
        text
      },
      inEdit: false
    })
    // Callback
    if (onUpdate) {
      onUpdate({
        current: text,
        previous
      })
    }
  }
  const onTextInputStart = () => {
    updateState({
      ...state,
      inEdit: true
    })
  }

  return (
    <div className={`swan-react-editable-text ${wrapperClassName}`} onClick={onTextInputStart}>
      {(!state.inEdit
        ? <Text
            text={state.text}
            className={textClassName}
          />
        : <TextEdit
            inputClassName={inputClassName}
            onChange={onTextInputChange}
            initialText={state.text}
            text={state.input.text}
            onEnd={onTextInputEnd}
          />
      )}
    </div>
  )
}

EditableText.propTypes = {
  text: PropTypes.string,
  wrapperClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  onUpdate: PropTypes.func
}

EditableText.defaultProps = {
  wrapperClassName: '',
  inputClassName: '',
  inputClassName: ''
}


export default EditableText
