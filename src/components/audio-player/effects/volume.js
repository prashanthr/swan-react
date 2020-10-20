import { getSeekPercentChange } from '../utils/seek'

export const onVolumeChange = ({ event, element, playerState, setPlayerState }) => {
  const { audioRef } = playerState
  const percentChange = getSeekPercentChange({ event, element })
  // Set audio volume level
  audioRef.current.volume = percentChange
  // Update UI component
  setPlayerState({
    ...playerState,
    volume: percentChange
  })
}
