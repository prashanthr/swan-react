import React from 'react'
import PropTypes from 'prop-types'

const EditText = ({
  initialText,
  text,
  wrapperClassName,
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
    <div className={wrapperClassName}>
      <input
        className={inputClassName}
        value={text}
        placeholder={placeholder}
        onChange={event => onChange({ event })}
        onKeyUp={event => onKeyUp({ event })}
      />
    </div>
  )
}

EditText.propTypes = {
  wrapperClassName: PropTypes.string,
  inputClassName: PropTypes.string,
  placeholder: PropTypes.string,
  initialText: PropTypes.string,
  onChange: PropTypes.func
}

EditText.defaultProps = {
  placeholder: '',
  wrapperClassName: '',
  inputClassName: '',
}

export default EditText
