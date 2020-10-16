export const onTimeUpdate = ({ playerState, setPlayerState }) => {
  setPlayerState({
    ...playerState,
    currentTime: audioRef.currentTime
  })
}
