import { getSeekPercentChange, getUpdatedSeekTime } from '../utils/seek'

export const onProgressSeek = ({ event, element, playerState, setPlayerState }) => {
  const { audioRef } = playerState
  const percentChange = getSeekPercentChange({ event, element })
  const newTime = getUpdatedSeekTime({
    currentTime: playerState.currentTime,
    totalTime: playerState.duration,
    percent: percentChange
  })
  // Set audio current time
  audioRef.current.currentTime = newTime
  // Update UI component
  setPlayerState({
    ...playerState,
    currentTime: newTime,
  })
}
