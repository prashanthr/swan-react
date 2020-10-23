import React from 'react'
import PropTypes from 'prop-types'
import { getUserFriendlyTime } from '../utils/time'
import './index.css'

const Duration = ({ className = '', current, total }) => (
  <div className={className}>
    {getUserFriendlyTime(current)} / {getUserFriendlyTime(total)}
  </div>
)

export default Duration
