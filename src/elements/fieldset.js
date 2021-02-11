function disableFieldset (container) {
  container.querySelectorAll('button').forEach(function (element) {
    element.disabled = true
  })
}

function enableFieldset (container) {
  container.querySelectorAll('button').forEach(function (element) {
    element.disabled = false
  })
}

export { disableFieldset , enableFieldset }
