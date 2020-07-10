import React from 'react'

import { action } from '@storybook/addon-actions'
import Recaptcha from '../src/components/recaptcha/index'

export default {
  title: 'Recaptcha',
  component: Recaptcha,
};

export const RecaptchaWidget = () => (
  <Recaptcha 
    isVerified={false} 
    recaptchaKey={'6LcTCLAZAAAAAPH9SPDuXqzuDMrWG_Z60GgvG-2Z'} 
    onInteractionChange={action('onInteractionChange')} 
  />
)

RecaptchaWidget.story = {
  name: 'Recaptcha Widget'
}
  
