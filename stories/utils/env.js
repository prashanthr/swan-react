export const isProdEnv = () => (
  process.env.NODE_ENV &&
  process.env.NODE_ENV.toLowerCase() === 'production'
)

export const getRecaptchaKeys = () => {
  const isProd = isProdEnv()
  const RECAPTCHA_V2_KEY = isProd
    ? process.env.STORYBOOK_RECAPTCHA_V2_PROD_KEY
    : process.env.STORYBOOK_RECAPTCHA_V2_DEV_KEY
  const RECAPTCHA_V3_KEY = isProd
    ? process.env.STORYBOOK_RECAPTCHA_V3_PROD_KEY
    : process.env.STORYBOOK_RECAPTCHA_V3_DEV_KEY
  return {
    v2Key: RECAPTCHA_V2_KEY,
    v3Key: RECAPTCHA_V3_KEY
  }
}
