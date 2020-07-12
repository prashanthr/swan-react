import React, { Fragment, useState } from 'react'
import PropTypes from 'prop-types'
import RecaptchaWidget from './widget'
import { DefaultSuccessComponent, DefaultWrapComponent } from './components'

const Recaptcha = ({ 
  version,
  recaptchaKey,
  isVerified,
  onInteractionVerify,
  onInteractionError,
  onInteractionExpire,
  recaptchaType,
  recaptchaTheme,
  recaptchaLanguage,
  wrapComponent,
  successComponent,
  failureComponent
}) => {
  if (isVerified) {
    return successComponent || DefaultSuccessComponent
  }
  return (
    <div>
      {wrapComponent || DefaultWrapComponent}
      {(
        <RecaptchaWidget
          version={version} 
          recaptchaKey={recaptchaKey}
          onInteractionVerify={onInteractionVerify}
          onInteractionError={onInteractionError}
          onInteractionExpire={onInteractionExpire}
          recaptchaType={recaptchaType}
          recaptchaTheme={recaptchaTheme}
          recaptchaLanguage={recaptchaLanguage}
        />
      )}
    </div>
  )
}

Recaptcha.propTypes = {
  recaptchaKey: PropTypes.string.isRequired,
  isVerified: PropTypes.bool,
  recaptchaType: PropTypes.string,
  recaptchaTheme: PropTypes.string,
  recaptchaLanguage: PropTypes.string,
  wrapComponent: PropTypes.element,
  successComponent: PropTypes.element,
  failureComponent: PropTypes.element,
  onInteractionVerify: PropTypes.func.isRequired,
  onInteractionError: PropTypes.func,
  onInteractionExpire: PropTypes.func,
}

Recaptcha.defaultProps = {
  isVerified: false,
  version: 'v2', // 'v3'
  recaptchaType: 'image', // 'audio'
  recaptchaTheme: 'light', // 'dark'
}

export default Recaptcha
