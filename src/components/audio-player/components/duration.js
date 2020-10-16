import React from 'react'
import PropTypes from 'prop-types'
import { getUserFriendlyTime } from '../utils/time'
import './index.css'

const Duration = ({ current, total }) => (
  <div className='swan-audio-player-duration'>
    {getUserFriendlyTime(current)} / {getUserFriendlyTime(total)}
  </div>
)

export default Duration
