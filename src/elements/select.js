export function selectDefaultAttributes (container) {
  container.querySelectorAll('select').forEach(function (element) {
    if (element.required === true) element.setAttribute('data-rc-required', true)
    if (element.disabled === true) element.setAttribute('data-rc-disabled', true)
  })
}

export function disableSelect (container) {
  container.querySelectorAll('select').forEach(function (element) {
    element.disabled = true
    element.required = false
  })
}

export function enableSelect (container) {
  container.querySelectorAll('select').forEach(function (element) {
    element.disabled = false

    if (element.hasAttribute('data-rc-required')) element.required = true
    if (element.hasAttribute('data-rc-disabled')) element.disabled = true
  })
}
