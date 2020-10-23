export const onPlayPause = ({ srcFile, playerState, setPlayerState }) => {
  console.log('playerstate', playerState)
  const { audioRef } = playerState
  console.log('audioRef', audioRef)
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
