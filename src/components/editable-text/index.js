import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Text from './components/text'
import TextEdit from './components/text-edit'

const EditableText = ({ text, onChange, wrapperClassName, textClassName, inputClassName }) => {
  const [state, updateState] = useState({
    text,
    inEdit: false,
    input: {
      text
    }
  })
  const onTextInputChange = ({ event }) => {
    console.log('onTextInputChange', event)
    updateState({
      ...state,
      input: {
        ...state.input,
        text: event.target.value
      }
    })
  }
  const onTextInputEnd = ({ text }) => {
    console.log('onTextInputEnd', state, text)
    updateState({
      ...state,
      text,
      input: {
        text
      },
      inEdit: false
    })
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
        ? <Text text={state.text} />
        : <TextEdit
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

}

EditableText.defaultProps = {

}


export default EditableText
