import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import Button from '../../button'
import './index.css'

const DefaultCloseComponent = ({ onClose }) => (
  <Button
    onClick={onClose}
    className='swan-react-modal-close-button-default'
    value={'x'}
  />
)

const CloseComponent = ({ Component, onClose }) => (
  <div className='swan-react-modal-close'>
    {(
      (Component && cloneElement(<Component />, { onClose }))
      || <DefaultCloseComponent onClose={onClose} />
    )}
  </div>
)

CloseComponent.propTypes = {
  onClose: PropTypes.func,
  component: PropTypes.element
}

export default CloseComponent
