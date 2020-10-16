export const onPlayPause = ({ playerState, setPlayerState }) => {
  const { audioRef } = playerState
  let currentTime =  audioRef.currentTime
  if (playerState.isPlaying) {
    audioRef.pause()
  } else {
    if (!audioRef.src) {
      audioRef.src = srcFile
    }
    audioRef.play()
  }
  setPlayerState({
    ...playerState,
    isPlaying: !playerState.isPlaying,
    currentTime: currentTime
  })
}
