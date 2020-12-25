// https://www.w3resource.com/javascript-exercises/javascript-math-exercise-23.php
export const uuid = ({ prefix = 'u', short = false }) => {
  let dt = new Date().getTime()
  const pattern = short
    ? `${prefix || 'x'}xxx4yxx`
    : `${prefix || 'x'}xxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx`
  const uuid = pattern
    .replace(/[xy]/g, c => {
      let r = (dt + Math.random()*16)%16 | 0
      dt = Math.floor(dt/16)
      return (c == 'x' ? r : (r&0x3|0x8)).toString(16)
    })
  return uuid
}
