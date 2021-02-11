function disableInput (container) {
  container.querySelectorAll('input').forEach(function (element) {
    element.disabled = true
  })
}

function enableInput (container) {
  container.querySelectorAll('input').forEach(function (element) {
    element.disabled = false
  })
}

export { disableInput, enableInput }
