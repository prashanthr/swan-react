import React from 'react'
import { Progress } from '../../src'
import './index.css'

export default {
  title: 'Progress',
  component: Progress,
}

const Wrap = ({ children }) => (
  <div className='progress-wrap'>
    {children}
  </div>
)

export const SimpleProgressBar = () => (
  <Wrap>
    A simple progress component
    <Progress />
    A simple progress component filled at 50%
    <Progress value={0.5} />
    A simple progress component filled at 100%
    <Progress value={1} />
    A custom progress component with a larger height
    <Progress className='custom-progress-h' value={1} />
    A custom progress component filled at 75%
    <Progress className='custom-progress-1' value={0.75} />
    A custom progress component filled at 75%
    <div className='custom-progress-2-wrap'>
      <Progress value={0.75} />
    </div>
  </Wrap>
)
