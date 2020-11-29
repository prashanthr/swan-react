import React from 'react'
import PropTypes from 'prop-types'

const EditText = ({
  initialText,
  text,
  inputClassName,
  placeholder,
  onChange,
  onEnd
}) => {
  const onKeyUp = ({ event }) => {
    console.log('onKeyUp', event, event.keyCode)
    switch(event.keyCode) {
      case 13:
        onEnd({ text: event.target.value })
        return
      case 27:
        onEnd({ text: initialText })
        return
      default:
        return
    }
  }

  return (
    <input
      className={inputClassName}
      value={text}
      placeholder={placeholder}
      onChange={event => onChange({ event })}
      onKeyUp={event => onKeyUp({ event })}
    />
  )
}

EditText.propTypes = {
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  initialText: PropTypes.string,
  onChange: PropTypes.func
}

EditText.defaultProps = {
  placeholder: '',
  inputClassName: '',
}

export default EditText
