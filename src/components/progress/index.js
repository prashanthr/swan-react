import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Progress = ({ id, role, elRef, onClick, onKeyPress, className, value, max }) => (
  <progress
    role={role}
    id={id}
    className={`swan-progress ${className}`}
    ref={elRef}
    value={value}
    max={max}
    onClick={onClick}
    onKeyPress={onKeyPress}
  />
)

Progress.propTypes = {
  id: PropTypes.string,
  role: PropTypes.string,
  className: PropTypes.string,
  value: PropTypes.number,
  max: PropTypes.number,
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  onClick: PropTypes.func,
  onKeyPress: PropTypes.func
}

Progress.defaultProps = {
  className: '',
  role: 'none',
  value: 0,
  max: 1
}

export default Progress
