import React from 'react'
import { getRecaptchaKeys } from '../utils/env'
import { action } from '@storybook/addon-actions'
import { Recaptcha } from '../../src'

const { v2Key, v3Key } = getRecaptchaKeys()

export default {
  title: 'Recaptcha',
  component: Recaptcha,
}

export const RecaptchaWidget = () => (
  <Recaptcha
    recaptchaKey={v2Key}
    onInteractionVerify={action('onInteractionVerify')}
  />
)

RecaptchaWidget.story = {
  name: 'Recaptcha Widget'
}


export const RecaptchaWidgetCustomWrap = () => (
  <Recaptcha
    wrapComponent={'Are you even human?'}
    recaptchaKey={v2Key}
    onInteractionVerify={action('onInteractionVerify')}
  />
)

export const RecaptchaWidgetVerfied = () => (
  <Recaptcha
    isVerified={true}
    recaptchaKey={v2Key}
    onInteractionVerify={action('onInteractionVerify')}
  />
)

export const RecaptchaWidgetVerfiedCustomSuccess = () => (
  <Recaptcha
    isVerified={true}
    successComponent={'Well done, boss.'}
    recaptchaKey={v2Key}
    onInteractionVerify={action('onInteractionVerify')}
  />
)

export const RecaptchaWidget3 = () => (
  <Recaptcha
    version='v3'
    recaptchaKey={v3Key}
    onInteractionVerify={action('onInteractionVerify')}
  />
)



