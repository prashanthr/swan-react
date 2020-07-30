# swan-react

Re-usable React Components

[CHANGELOG](./CHANGELOG.md)

## Installation

```
yarn add @universal-apps/swan-react
# or
npm i @universal-apps/swan-react
```

## Example Usage

```
import { Recaptcha } from '@universal-apps/swan-react'

// In your react component
....
render () {
  return (
    <Recaptcha
      recaptchaSiteKey='xxxx'
      onInteractionVerify={() => {}}
    />
}
...
```

## Components Supported
- ReCaptcha v2/v3
(More coming soon...)

## Storybook

Live at https://prashanthr.github.io/swan-react/

### Publishing changes to storybook

```
yarn storify
```
