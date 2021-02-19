export class FormInput {
  recordDefaults (el) {
    if (el.required === true) el.setAttribute('data-rc-required', true)
    if (el.disabled === true) el.setAttribute('data-rc-disabled', true)
    if (el.checked === true) el.setAttribute('data-rc-checked', true)
    if (el.selected === true) el.setAttribute('data-rc-selected', true)
  }

  disable (el) {
    el.disabled = true
    el.required = false
  }

  enable (el) {
    el.disabled = false
    if (el.hasAttribute('data-rc-required')) el.required = true
    if (el.hasAttribute('data-rc-disabled')) el.disabled = true
  }
}
