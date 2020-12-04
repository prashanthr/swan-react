import React from 'react'
import PropTypes from 'prop-types'
import Form from './form'

const TextInput = ({
  id,
  name,
  elRef,
  formRef,
  formId,
  formName,
  formClassName,
  onFormChange,
  onFormSubmit,
  className,
  defaultValue,
  value,
  placeholder,
  onChange,
  onBlur,
  onKeyUp,
  onKeyDown,
  elementOnly
}) => {
  const inputEl = (
    <input
      ref={elRef}
      className={className}
      type='text'
      placeholder={placeholder}
      id={id}
      name={name}
      defaultValue={defaultValue}
      value={value}
      onBlur={onBlur}
      onChange={onChange}
      onKeyUp={onKeyUp}
      onKeyDown={onKeyDown}
    />
  )

  return !elementOnly
    ? <Form elRef={formRef} id={formId} name={formName} className={formClassName} onChange={onFormChange} onSubmit={onFormSubmit}>
        {inputEl}
      </Form>
    : inputEl
}

TextInput.defaultProps = {
  className: '',
  placeholder: '',
  elementOnly: false,
  onBlur: () => {},
  onChange: () => {},
  onKeyUp: () => {},
  onKeyDown: () => {}
}

TextInput.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  elRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  formRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  formId: PropTypes.string,
  formName: PropTypes.string,
  formClassName: PropTypes.string,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  defaultValue: PropTypes.string,
  elementOnly: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFormSubmit: PropTypes.func,
  onFormChange: PropTypes.func
}

export default TextInput
