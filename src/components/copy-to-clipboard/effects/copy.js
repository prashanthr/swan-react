export const copyToClipboard = ({ elementId, isInputEl = false, onCopy }) => {
  let copyEl = document.getElementById(elementId)
  let copyText
  if (isInputEl) {
    copyEl.select()
    copyEl.setSelectionRange(0, 99999); /* For mobile devices */
    copyText = copyEl.value
  } else {
    copyText = copyEl.innerText
  }
  const onSuccess = () => {
    if (onCopy) {
      onCopy({ data: copyText })
    }
  }
  const onFailure = (err) => {
    console.error(`Unable to copy element with id ${elementId}`, err)
  }
  if (navigator && navigator.clipboard) {
    navigator
      .clipboard
      .writeText(copyText)
      .then(
        () => {
          onSuccess()
        }, (err) => {
          onFailure(err)
      })
  } else if (document && document.execCommand) {
    document.execCommand("copy")
    onSuccess()
  } else {
    onFailure()
    return
  }
  return copyText
}
