import React from 'react'
import PropTypes from 'prop-types'
import TextInput from '../../form-controls/components/text-input'

const EditText = ({
  initialText,
  text,
  inputClassName,
  placeholder,
  onChange,
  onEnd
}) => {
  const onKeyUp = ({ event }) => {
    switch(event.keyCode) {
      // Enter or Return
      case 13:
        onEnd({ text: event.target.value })
        return
      // Esc
      case 27:
        onEnd({ text: initialText })
        return
      default:
        return
    }
  }

  return (
    <TextInput
      className={inputClassName}
      value={text}
      placeholder={placeholder}
      onChange={event => onChange({ event })}
      onKeyUp={event => onKeyUp({ event })}
      onFormSubmit={event => event.preventDefault()}
    />
  )
}

EditText.propTypes = {
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  initialText: PropTypes.string,
  text: PropTypes.string,
  onChange: PropTypes.func,
  onEnd: PropTypes.func
}

EditText.defaultProps = {
  placeholder: '',
  inputClassName: '',
}

export default EditText
