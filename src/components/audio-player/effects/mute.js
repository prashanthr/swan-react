export const onToggleMute = ({ playerState, setPlayerState }) => {
  const { audioRef } = playerState
  const newValue = !playerState.isMuted
  if (newValue) { // muted
    audioRef.volume = 0
  } else {
    audioRef.volume = playerState.volume
  }
  setPlayerState({
    ...playerState,
    isMuted: newValue
  })
}
