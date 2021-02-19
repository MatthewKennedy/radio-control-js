import { State } from './utils/state.js'
import { FormInput } from './utils/form_input.js'
import { RadioControler } from './utils/radio_controler.js'

const FORM_INPUTS = 'input, select, button, fieldset, textarea, option'
const radioControlDataAttribute = '[data-radio-control]'

document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector(radioControlDataAttribute)) return

  recordStateOfInputElements()

  document.querySelectorAll(radioControlDataAttribute).forEach(function (elem) {
    const radioControlParentEl = document.querySelector(`[data-radio-control=${elem.dataset.radioControl}]`)

    const panelState = new State()
    const radioControler = new RadioControler()

    panelState.initiate(radioControlParentEl)
    radioControler.monitorForChange(radioControlParentEl)
  })
})

function recordStateOfInputElements () {
  document.querySelectorAll('[data-rc-panel-group]').forEach(function (elem) {
    elem.querySelectorAll(FORM_INPUTS).forEach(function (elem) {
      const input = new FormInput()
      input.recordDefaults(elem)
    })
  })
}
