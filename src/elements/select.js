function disableSelect (container) {
  container.querySelectorAll('select').forEach(function (element) {
    element.disabled = true
  })
}

function enableSelect (container) {
  container.querySelectorAll('select').forEach(function (element) {
    element.disabled = false
  })
}

export { disableSelect, enableSelect }
