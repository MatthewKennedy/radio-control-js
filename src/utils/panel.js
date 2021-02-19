import { FormInput } from './form_input.js'

const FORM_INPUTS = 'input, select, button, fieldset, textarea, option'

export class Panel {
  disable (el) {
    el.removeAttribute('data-rc-active')
    el.querySelectorAll(FORM_INPUTS).forEach(function (elem) {
      const input = new FormInput()
      input.disable(elem)
    })
  };

  enable (el) {
    el.setAttribute('data-rc-active', '')
    el.querySelectorAll(FORM_INPUTS).forEach(function (elem) {
      const input = new FormInput()
      input.enable(elem)
    })
  };
}
