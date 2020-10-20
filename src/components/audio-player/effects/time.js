export const onTimeUpdate = ({ playerState, setPlayerState }) => {
  const { audioRef } = playerState
  setPlayerState({
    ...playerState,
    currentTime: audioRef.current.currentTime,
  })
}
