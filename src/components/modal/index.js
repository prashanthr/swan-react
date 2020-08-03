import React, { cloneElement } from 'react'
import PropTypes from 'prop-types'
import { CloseComponent } from './components'
import './index.css'

const Modal = ({
  className,
  isOpen,
  onClose,
  closeComponent,
  contentClassName,
  content
}) => (
  <div className={`swan-react-modal ${isOpen ? 'swan-react-model-open' : ''} ${className}`}>
    <div className={`swan-react-modal-content ${contentClassName}`}>
        <CloseComponent
          component={closeComponent}
          onClose={onClose}
        />
        {content}
    </div>
  </div>
)

Modal.propTypes = {
  isOpen: PropTypes.bool,
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  closeComponent: PropTypes.element,
  onClose: PropTypes.func,
}

Modal.defaultProps = {
  isOpen: false,
  className: '',
  contentClassName: ''
}

export default Modal
