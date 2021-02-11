export function inputDefaultAttributes (container) {
  container.querySelectorAll('input').forEach(function (element) {
    if (element.required === true) {
      element.setAttribute('data-rc-required', true)
    }

    if (element.disabled === true) {
      element.setAttribute('data-rc-disabled', true)
    }
  })
}

export function disableInput (container) {
  container.querySelectorAll('input').forEach(function (element) {
    element.disabled = true
    element.required = false
  })
}

export function enableInput (container) {
  container.querySelectorAll('input').forEach(function (element) {
    element.disabled = false

    if (element.hasAttribute('data-rc-required')) {
      element.required = true
    }

    if (element.hasAttribute('data-rc-disabled')) {
      element.disabled = true
    }
  })
}
