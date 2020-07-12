import React from 'react'
import PropTypes from 'prop-types'
import GooleRecaptchaV2 from './recaptcha-v2'
import GoogleRecaptchaV3 from './recaptcha-v3'

const GoogleRecaptchaWidget = ({
  version,
  recaptchaKey,
  onInteractionVerify,
  onInteractionExpire,
  onInteractionError,
  recaptchaType,
  recaptchaTheme,
  recaptchaLanguage
}) => {
  switch(version) {
    case 'v3':
    case '3':
      return (
        <GoogleRecaptchaV3
          recaptchaLanguage={recaptchaLanguage}
          recaptchaKey={recaptchaKey}
          onInteractionVerify={onInteractionVerify}
        />
      )
    case 'v2':
    case '2':
    default:
      return (
        <GooleRecaptchaV2
          recaptchaLanguage={recaptchaLanguage}
          recaptchaKey={recaptchaKey}
          onInteractionVerify={onInteractionVerify}
          onInteractionExpire={onInteractionExpire}
          onInteractionError={onInteractionError}
        />
      )
  }
}

GoogleRecaptchaWidget.propTypes = {
  version: PropTypes.string.isRequired,
  recaptchaKey: PropTypes.string.isRequired,
  onInteractionVerify: PropTypes.func,
  onInteractionExpire: PropTypes.func,
  onInteractionError: PropTypes.func,
  recaptchaType: PropTypes.string,
  recaptchaTheme: PropTypes.string,
  recaptchaLanguage: PropTypes.string
}

GoogleRecaptchaWidget.defaultProps = {
  version: 'v2' // 'v3'
}

export default GoogleRecaptchaWidget
