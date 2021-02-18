import { recordStateOfPanelInputElements, hidePanel, activatePanel, initPanels } from './utils/state.js'

const radioButtonsContainer = '[data-radio-control]'

document.addEventListener('DOMContentLoaded', function () {
  if (!document.querySelector(radioButtonsContainer)) return

  recordStateOfPanelInputElements()
  document.querySelectorAll(radioButtonsContainer).forEach(function (elem) {
    const radioControlEl = document.querySelector(`[data-radio-control=${elem.dataset.radioControl}]`)

    initPanels(radioControlEl)
    monitorRadiosForChange(radioControlEl)
  })
})

function monitorRadiosForChange (radioControlEl) {
  radioControlEl.querySelectorAll('input[type=radio]').forEach(function (elem) {
    elem.addEventListener('change', function (event) {
      const item = event.target.value

      hidePanel(radioControlEl.dataset.radioControl)
      activatePanel(`[data-rc-panel-uid=${radioControlEl.dataset.radioControl + '_' + item}]`)
    })
  })
}
