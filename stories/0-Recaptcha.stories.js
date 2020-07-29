import React from 'react'

import { action } from '@storybook/addon-actions'
import { Recaptcha } from '../src'

const RECAPTCHA_V2_DEMO_KEY = process.env.STORYBOOK_RECAPTCHA_V2_DEMO_KEY
const RECAPTCHA_V3_DEMO_KEY = process.env.STORYBOOK_RECAPTCHA_V3_DEMO_KEY

export default {
  title: 'Recaptcha',
  component: Recaptcha,
};

export const RecaptchaWidget = () => (
  <Recaptcha
    recaptchaKey={RECAPTCHA_V2_DEMO_KEY}
    onInteractionVerify={action('onInteractionVerify')}
  />
)

RecaptchaWidget.story = {
  name: 'Recaptcha Widget'
}


export const RecaptchaWidgetCustomWrap = () => (
  <Recaptcha
    wrapComponent={'Are you even human?'}
    recaptchaKey={RECAPTCHA_V2_DEMO_KEY}
    onInteractionVerify={action('onInteractionVerify')}
  />
)

export const RecaptchaWidgetVerfied = () => (
  <Recaptcha
    isVerified={true}
    recaptchaKey={RECAPTCHA_V2_DEMO_KEY}
    onInteractionVerify={action('onInteractionVerify')}
  />
)

export const RecaptchaWidgetVerfiedCustomSuccess = () => (
  <Recaptcha
    isVerified={true}
    successComponent={'Well done, boss.'}
    recaptchaKey={RECAPTCHA_V2_DEMO_KEY}
    onInteractionVerify={action('onInteractionVerify')}
  />
)

export const RecaptchaWidget3 = () => (
  <Recaptcha
    version='v3'
    recaptchaKey={RECAPTCHA_V3_DEMO_KEY}
    onInteractionVerify={action('onInteractionVerify')}
  />
)



