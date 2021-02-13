import { disableInput, enableInput } from '../elements/input.js'
import { disableSelect, enableSelect } from '../elements/select.js'
import { disableTextArea, enableTextArea } from '../elements/textarea.js'
import { disableButton, enableButton } from '../elements/button.js'
import { disableFieldset, enableFieldset } from '../elements/fieldset.js'

export function hideRcPanels (rcPanelsGroup) {
  document.querySelectorAll('[data-rc-panel-uid]').forEach(function (elem) {
    elem.removeAttribute('data-rc-active')
    disableInput(elem)
    disableSelect(elem)
    disableTextArea(elem)
    disableButton(elem)
    disableFieldset(elem)
  })
}

export function activatePanel (panel) {
  const active = document.querySelector(panel)

  if (active) {
    active.setAttribute('data-rc-active', '')

    enableInput(active)
    enableSelect(active)
    enableTextArea(active)
    enableButton(active)
    enableFieldset(active)
  } else {
    console.log(`There is no panel in your DOM with the attribute: "${panel}"`)
  }
}
