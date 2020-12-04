import React from 'react'
import PropTypes from 'prop-types'
import Form from './form'

const NumericInput = ({
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
  min,
  max,
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
      type='number'
      placeholder={placeholder}
      id={id}
      name={name}
      min={min}
      max={max}
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

NumericInput.defaultProps = {
  className: '',
  placeholder: '',
  elementOnly: false,
  onBlur: () => {},
  onChange: () => {},
  onKeyUp: () => {},
  onKeyDown: () => {}
}

NumericInput.propTypes = {
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
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  elementOnly: PropTypes.bool,
  onBlur: PropTypes.func,
  onChange: PropTypes.func,
  onKeyUp: PropTypes.func,
  onKeyDown: PropTypes.func,
  onFormSubmit: PropTypes.func,
  onFormChange: PropTypes.func
}

export default NumericInput
