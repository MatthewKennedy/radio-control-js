export function buttonDefaultAttributes (container) {
  container.querySelectorAll('button').forEach(function (element) {
    if (element.disabled === true) element.setAttribute('data-rc-disabled', true)
  })
}

export function disableButton (container) {
  container.querySelectorAll('button').forEach(function (element) {
    element.disabled = true
  })
}

export function enableButton (container) {
  container.querySelectorAll('button').forEach(function (element) {
    element.disabled = false

    if (element.hasAttribute('data-rc-disabled')) element.disabled = true
  })
}
