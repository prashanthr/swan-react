import React from 'react'
import PropTypes from 'prop-types'
import './index.css'

const Card = ({ className, contentClassName, content, isRounded }) => (
  <div
    className={`swan-react-card ${isRounded ? 'swan-react-card-rounded' : ''} ${className}`}
  >
    <div
      className={`swan-react-card-content ${contentClassName}`}
    >
      {content}
    </div>
  </div>
)

Card.propTypes = {
  className: PropTypes.string,
  contentClassName: PropTypes.string,
  isRounded: PropTypes.bool,
  content: PropTypes.element
}

Card.defaultProps = {
  className: '',
  contentClassName: '',
  isRounded: false
}

export default Card
