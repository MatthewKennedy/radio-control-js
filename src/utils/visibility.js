import { disableInput, enableInput } from '../elements/input.js'
import { disableSelect, enableSelect } from '../elements/select.js'
import { disableTextArea, enableTextArea } from '../elements/textarea.js'
import { disableButton, enableButton } from '../elements/button.js'
import { disableFieldset, enableFieldset } from '../elements/fieldset.js'


function hideRcPanels (rcPanelsGroup) {
  const group = document.querySelector(`[data-rc-panel-group=${rcPanelsGroup}]`)

  group.querySelectorAll('[data-rc-panel-uid]').forEach(function (elem) {
    elem.classList.remove('d-block')
    elem.classList.add('d-none')

    disableInput(group)
    disableSelect(group)
    disableTextArea(group)
    disableButton(group)
    disableFieldset(group)
  })
}

function activatePanel (panel) {
  const active = document.querySelector(panel)

  active.classList.remove('d-none')
  active.classList.add('d-block')

  enableInput(active)
  enableSelect(active)
  enableTextArea(active)
  enableButton(active)
  enableFieldset(active)

}

export { hideRcPanels, activatePanel }
