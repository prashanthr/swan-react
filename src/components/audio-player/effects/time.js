export const onTimeUpdate = ({ playerState, setPlayerState }) => {
  const { audioRef } = playerState
  setPlayerState({
    ...playerState,
    currentTime: audioRef.current.currentTime,
  })
  const isEndOfTrack = (
    audioRef.current.currentTime === audioRef.current.duration
  )
  if (isEndOfTrack) {
    setPlayerState({
      ...playerState,
      currentTime: 0,
      isPlaying: false
    })
  }
}
