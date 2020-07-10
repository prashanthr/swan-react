import {
  GoogleReCaptchaProvider,
  GoogleReCaptcha
} from 'react-google-recaptcha-v3'

const ReactGoogleRecaptchaV3 = ({
  recaptchaKey,
  onInteractionVerify
}) => (
  <GoogleReCaptchaProvider reCaptchaKey={recaptchaKey}>
    <GoogleReCaptcha onVerify={onInteractionVerify} />
  </GoogleReCaptchaProvider>
)

ReactGoogleRecaptchaV3.propTypes = {
  recaptchaKey: PropTypes.string.isRequired,
  onInteractionVerify: PropTypes.func
}

export default ReactGoogleRecaptchaV3
