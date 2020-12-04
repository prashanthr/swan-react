import React from 'react'
import PropTypes from 'prop-types'

const SubmitButton = ({ ref, value, className, onClick }) => (
  <input
    ref={ref}
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
  ref: PropTypes.oneOfType([
    PropTypes.func,
    PropTypes.shape({ current: PropTypes.instanceOf(Element) })
  ]),
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default SubmitButton
