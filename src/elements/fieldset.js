export function fieldsetDefaultAttributes (container) {
  container.querySelectorAll('fieldset').forEach(function (element) {
    if (element.disabled === true) element.setAttribute('data-rc-disabled', true)
  })
}

export function disableFieldset (container) {
  container.querySelectorAll('button').forEach(function (element) {
    element.disabled = true
  })
}

export function enableFieldset (container) {
  container.querySelectorAll('button').forEach(function (element) {
    element.disabled = false

    if (element.hasAttribute('data-rc-disabled')) element.disabled = true
  })
}
