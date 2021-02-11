function disableTextArea (container) {
  container.querySelectorAll('textarea').forEach(function (element) {
    element.disabled = true
  })
}

function enableTextArea (container) {
  container.querySelectorAll('textarea').forEach(function (element) {
    element.disabled = false
  })
}

export { disableTextArea, enableTextArea }
