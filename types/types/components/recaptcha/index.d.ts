import * as React from 'react'

export interface RecaptchaProps {
  recaptchaKey: string,
  isVerified: boolean,
  recaptchaType: string,
  recaptchaTheme: string,
  recaptchaLanguage: string,
  wrapComponent: React.ReactElement,
  successComponent: React.ReactElement,
  failureComponent: React.ReactElement,
  onInteractionVerify: () => void,
  onInteractionError: () => void,
  onInteractionExpire: () => void
}

export class Recaptcha extends React.Component<RecaptchaProps> {}
