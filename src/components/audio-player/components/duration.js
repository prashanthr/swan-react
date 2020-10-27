import React, { createElement } from 'react'
import PropTypes from 'prop-types'
import { getUserFriendlyTime } from '../utils/time'

const Duration = ({ className, current, total, customComponent }) => (
  (customComponent && createElement(<customComponent />, {
    current,
    total
  }))
  || <div className={className}>
      {getUserFriendlyTime(current)} / {getUserFriendlyTime(total)}
     </div>
)

Duration.propTypes = {
  className: PropTypes.string,
  current: PropTypes.number,
  total: PropTypes.number,
  customComponent: PropTypes.element
}

Duration.defaultProps = {
  className: ''
}

export default Duration
