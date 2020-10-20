export const onToggleMute = ({ playerState, setPlayerState }) => {
  // let audioRef = Object.assign({}, playerState.audioRef)
  const { audioRef } = playerState
  let currentRef = audioRef.current
  const newValue = !playerState.isMuted
  if (newValue) { // muted
    currentRef.volume = 0
  } else {
    currentRef.volume = playerState.volume
  }
  setPlayerState({
    ...playerState,
    isMuted: newValue,
  })
}
