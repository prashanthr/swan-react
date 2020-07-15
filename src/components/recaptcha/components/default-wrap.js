import React, { Fragment } from 'react'

const DefaultWrapComponent = (
  <Fragment>
    <br />
    <span 
      className='default-wrap-component'>
        Just checking if you're a
        &nbsp;<span role='img' aria-label='person'>&#x1F464;</span> 
        &nbsp;or 
        &nbsp;<span role='img' aria-label='robot'>&#x1F916;</span>
    ...</span>
    <br /><br />
  </Fragment>
)

export default DefaultWrapComponent
