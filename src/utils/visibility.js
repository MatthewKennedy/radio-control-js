import { disableInput, enableInput } from '../elements/input.js'
import { disableSelect, enableSelect } from '../elements/select.js'
import { disableTextArea, enableTextArea } from '../elements/textarea.js'
import { disableButton, enableButton } from '../elements/button.js'
import { disableFieldset, enableFieldset } from '../elements/fieldset.js'

export function hideRcPanels (rcPanelsGroup) {
  const group = document.querySelector(`[data-rc-panel-group=${rcPanelsGroup}]`)
  if (group) {
    group.querySelectorAll('[data-rc-panel-uid]').forEach(function (elem) {
      elem.removeAttribute('data-rc-active')

      disableInput(group)
      disableSelect(group)
      disableTextArea(group)
      disableButton(group)
      disableFieldset(group)
    })
  } else {
    console.log(`Wrap your ${rcPanelsGroup} pannels with a block-level element, and add the attribute: [data-rc-panel-group="${rcPanelsGroup}"]`)
  }
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
