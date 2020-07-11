import React from 'react'
import PropTypes from 'prop-types'
import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from 'react-google-recaptcha-v3'

const ReactGoogleRecaptchaV3 = ({
  recaptchaLanguage,
  recaptchaKey,
  onInteractionVerify
}) => (
  <GoogleReCaptchaProvider 
    reCaptchaKey={recaptchaKey}
    language={recaptchaLanguage}
  >
    <GoogleReCaptcha 
      onVerify={onInteractionVerify} 
    />
  </GoogleReCaptchaProvider>
)

ReactGoogleRecaptchaV3.propTypes = {
  recaptchaKey: PropTypes.string.isRequired,
  onInteractionVerify: PropTypes.func,
  language: PropTypes.string,
}

export default ReactGoogleRecaptchaV3
