import React from 'react'
import PropTypes from 'prop-types'
import ReactGoogleRecaptcha from 'react-google-recaptcha'

const ReactGoogleRecaptchaV2 = ({
  recaptchaKey,
  onInteractionVerify,
  onInteractionExpire,
  onInteractionError,
  recaptchaType,
  recaptchaTheme,
  recaptchaLanguage
}) => (
  <ReactGoogleRecaptcha
    sitekey={recaptchaKey}
    onChange={onInteractionVerify}
    onExpired={onInteractionExpire}
    onErrored={onInteractionError}
    type={recaptchaType}
    theme={recaptchaTheme}
    hl={recaptchaLanguage}
  />
)

ReactGoogleRecaptchaV2.propTypes = {
  recaptchaKey: PropTypes.string.isRequired,
  onInteractionVerify: PropTypes.func,
  onInteractionExpire: PropTypes.func,
  onInteractionError: PropTypes.func,
  recaptchaType: PropTypes.string,
  recaptchaTheme: PropTypes.string,
  recaptchaLanguage: PropTypes.string
}

ReactGoogleRecaptchaV2.defaultProps = {
  recaptchaTheme: 'light', // 'dark'
  recaptchaType: 'image' // 'audio'
}

export default ReactGoogleRecaptchaV2
