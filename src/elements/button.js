function disableButton (container) {
  container.querySelectorAll('button').forEach(function (element) {
    element.disabled = true
  })
}

function enableButton (container) {
  container.querySelectorAll('button').forEach(function (element) {
    element.disabled = false
  })
}

export { disableButton, enableButton }
