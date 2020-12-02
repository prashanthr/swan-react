import React from 'react'
import PropTypes from 'prop-types'

const SubmitButton = ({ value, className, onClick }) => (
  <input
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
  value: PropTypes.string,
  className: PropTypes.string,
  onClick: PropTypes.func
}

export default SubmitButton
