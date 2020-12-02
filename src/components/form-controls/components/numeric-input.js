import React from 'react'
import PropTypes from 'prop-types'

const NumericInput = ({
  id,
  name,
  className,
  min,
  max,
  defaultValue,
  value,
  onChange,
  onBlur
}) => (
  <input
    className={className}
    type='number'
    id={id}
    name={name}
    min={min}
    max={max}
    defaultValue={defaultValue}
    value={value}
    onBlur={onBlur}
    onChange={onChange}
  />
)

NumericInput.defaultProps = {
  className: '',
  onBlur: () => {},
  onChange: () => {}
}

NumericInput.propTypes = {
  className: PropTypes.string,
  value: PropTypes.number,
  defaultValue: PropTypes.number,
  min: PropTypes.number,
  max: PropTypes.number,
  onBlur: PropTypes.func,
  onChange: PropTypes.func
}

export default NumericInput
