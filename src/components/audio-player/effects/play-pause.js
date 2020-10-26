export const onPlayPause = ({ srcFile, playerState, setPlayerState }) => {
  const { audioRef } = playerState
  let currentRef = audioRef.current
  let currentTime =  audioRef.currentTime
  if (playerState.isPlaying) {
    currentRef.pause()
  } else {
    if (!currentRef.src) {
      currentRef.src = srcFile
    }
    currentRef.play()
  }
  setPlayerState({
    ...playerState,
    isPlaying: !playerState.isPlaying,
    currentTime: currentTime,
  })
}
