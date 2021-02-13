import { inputDefaultAttributes } from '../elements/input.js'
import { textareaDefaultAttributes } from '../elements/textarea.js'
import { selectDefaultAttributes } from '../elements/select.js'
import { fieldsetDefaultAttributes } from '../elements/fieldset.js'
import { buttonDefaultAttributes } from '../elements/button.js'

export function recordElState (rcPanelsGroup) {
  const group = document.querySelector(`[data-rc-panel-group="${rcPanelsGroup}"]`)

  if (group) {
    group.querySelectorAll('[data-rc-panel-uid]').forEach(function (elem) {
      inputDefaultAttributes(elem)
      textareaDefaultAttributes(elem)
      selectDefaultAttributes(elem)
      fieldsetDefaultAttributes(elem)
      buttonDefaultAttributes(elem)
    })
  }
}
