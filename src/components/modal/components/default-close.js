import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const DefaultCloseComponent = ({ onClose }) => (
  <span
    onClick={onClose}
    className='swan-react-modal-close-button'>
    x
  </span>
)

DefaultCloseComponent.propTypes = {
  onClose: PropTypes.func
}

export default DefaultCloseComponent
