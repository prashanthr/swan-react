import React from 'react'
import PropTypes from 'prop-types'

const SubmitButton = ({ elRef, value, className, onClick }) => (
  <input
    ref={elRef}
    className={className}
    type='submit'
    value={value}
    onClick={onClick}
  />
)

SubmitButton.defaultProps = {
  className: '',
  value: 'Submit',
  onClick: () => {}
}

SubmitButton.propTypes = {
  elRef: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default SubmitButton
