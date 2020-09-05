/**
 * Returns % of time left
 * @param {*} current { hour, min, second }
 * @param {*} limit { hour, min , second }
 */
const calculateTimeFraction = (current, limit) => {
  const getTotal = (time) => (time.second + (time.minute * 60) + (time.hour * 60 * 60))
  return getTotal(current) / getTotal(limit)
}

/**
 * Update the dasharray value as time passes, starting with 283
 * @param {*} current { hour, min, second }
 * @param {*} limit { hour, min, second }
 * @returns {string} The svg path for the remaining circular time
 */
export const getProgressCircleDashArray = (current, limit) => {
  const FULL_DASH_ARRAY = 283
  return `${(
    calculateTimeFraction(current, limit) * FULL_DASH_ARRAY
  ).toFixed(0)} ${FULL_DASH_ARRAY}`
}
