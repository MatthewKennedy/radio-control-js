import { Panel } from './panel.js'
import { RadioControler } from './radio_controler.js'

export class State {
  initiate (radioControlEl) {
    const selectedRadioValue = radioControlEl.querySelector('input[type=radio]:checked').value
    const panelId = `[data-rc-panel-uid=${radioControlEl.dataset.radioControl + '_' + selectedRadioValue}]`

    this.deactivate(radioControlEl.dataset.radioControl)
    this.activate(panelId)
  }

  deactivate (panelId) {
    const group = document.querySelector(`[data-rc-panel-group=${panelId}]`)
    if (!group) return console.warn(`Wrap your ${panelId} pannels with a block-level element, and add the attribute: [data-rc-panel-group="${panelId}"]`)

    group.querySelectorAll('[data-rc-panel-uid]').forEach(function (elem) {
      const panel = new Panel()
      panel.disable(elem)
    })
  }

  activate (panelId) {
    const targetPanel = document.querySelector(panelId)
    if (!targetPanel) return console.warn(`There is no panel in your DOM with the attribute: "${panelId}"`)

    const panel = new Panel()
    panel.enable(targetPanel)

    targetPanel.querySelectorAll('[data-radio-control]').forEach(function (nestedElement) {
      const nestedRadios = new RadioControler()
      nestedRadios.handleNestedRcRadios(nestedElement)
    })
  }
}
