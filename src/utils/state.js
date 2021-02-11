import { inputDefaultAttributes } from '../elements/input.js'
import { textareaDefaultAttributes } from '../elements/textarea.js'
import { selectDefaultAttributes } from '../elements/select.js'

export function recordElState (rcPanelsGroup) {
  const group = document.querySelector(`[data-rc-panel-group=${rcPanelsGroup}]`)

  group.querySelectorAll('[data-rc-panel-uid]').forEach(function (elem) {
    inputDefaultAttributes(elem)
    textareaDefaultAttributes(elem)
    selectDefaultAttributes(elem)
  })
}
