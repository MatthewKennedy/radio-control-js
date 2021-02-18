import { FormInput } from './form_input.js'
import { Panel } from './panel.js'

export function recordStateOfPanelInputElements () {
  document.querySelectorAll('[data-rc-panel-group]').forEach(function (elem) {
    elem.querySelectorAll('input, select, button, fieldset, textarea, option').forEach(function (elem) {
      const input = new FormInput()
      input.recordDefaults(elem)
    })
  })
}

export function initPanels (radioControlEl) {
  const selectedRadioValue = radioControlEl.querySelector('input[type=radio]:checked').value
  const panel = `[data-rc-panel-uid=${radioControlEl.dataset.radioControl + '_' + selectedRadioValue}]`

  hidePanel(radioControlEl.dataset.radioControl)
  activatePanel(panel)
}

export function hidePanel (panelId) {
  const group = document.querySelector(`[data-rc-panel-group=${panelId}]`)
  if (!group) return console.warn(`Wrap your ${panelId} pannels with a block-level element, and add the attribute: [data-rc-panel-group="${panelId}"]`)

  group.querySelectorAll('[data-rc-panel-uid]').forEach(function (elem) {
    const panel = new Panel()
    panel.diable(elem)
  })
}

export function activatePanel (panelId) {
  const targetPanel = document.querySelector(panelId)
  if (!targetPanel) return console.warn(`There is no panel in your DOM with the attribute: "${panelId}"`)

  const panel = new Panel()
  panel.enable(targetPanel)

  targetPanel.querySelectorAll('[data-radio-control]').forEach(function (nestedElement) {
    initPanels(nestedElement)
  })
}
