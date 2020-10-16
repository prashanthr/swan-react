export const onLoadedMetadata = ({ event, playerState, setPlayerState }) => {
  setPlayerState({
    ...playerState,
    duration: event.currentTarget.duration
  })
}
