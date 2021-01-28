import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import { getUserFriendlyTime } from '../utils/time'

const Duration = ({ className, current, total, CustomComponent }) => (
  (CustomComponent && createElement(<CustomComponent />, {
    current,
    total,
    className
  }))
  || <div className={className}>
      {getUserFriendlyTime(current)} / {getUserFriendlyTime(total)}
     </div>
)

Duration.propTypes = {
  className: PropTypes.string,
  current: PropTypes.number,
  total: PropTypes.number,
  CustomComponent: PropTypes.oneOfType([PropTypes.element, PropTypes.func])
}

Duration.defaultProps = {
  className: ''
}

export default Duration
