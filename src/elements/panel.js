import { FormInput } from './form_input.js'

export class Panel {
  constructor (el) {
    this.el = el
  }

  diable (el) {
    el.removeAttribute('data-rc-active')
    el.querySelectorAll('input, select, button, fieldset, textarea, option').forEach(function (elem) {
      const input = new FormInput()
      input.disable(elem)
    })
  };

  enable (el) {
    el.setAttribute('data-rc-active', '')
    el.querySelectorAll('input, select, button, fieldset, textarea, option').forEach(function (elem) {
      const input = new FormInput()
      input.enable(elem)
    })
  };
}
