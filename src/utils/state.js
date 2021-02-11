import { inputDefaultAttributes } from '../elements/input.js'

export function recordElState (rcPanelsGroup) {
  const group = document.querySelector(`[data-rc-panel-group=${rcPanelsGroup}]`)

  group.querySelectorAll('[data-rc-panel-uid]').forEach(function (elem) {
    inputDefaultAttributes(elem)
  })
}
