import { hideRcPanels, activatePanel } from './utils/visibility.js'

const radioButtonsContainer = '[data-radio-control]'

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector(radioButtonsContainer)) {
    document.querySelectorAll(radioButtonsContainer).forEach(function (elem) {
      const radioControlEl = document.querySelector(`[data-radio-control=${elem.dataset.radioControl}]`)

      initiateRcPanels(radioControlEl)
      monitorRadiosForChange(radioControlEl)
    })
  }
})

function initiateRcPanels (radioControlEl) {
  const selectedRadioValue = radioControlEl.querySelector('input[type=radio]:checked').value

  hideRcPanels(radioControlEl.dataset.radioControl)
  activatePanel(`[data-rc-panel-uid=${radioControlEl.dataset.radioControl + '_' + selectedRadioValue}]`)
}

function monitorRadiosForChange (radioControlEl) {
  radioControlEl.querySelectorAll('input[type=radio]').forEach(function (elem) {
    elem.addEventListener('change', function (event) {
      const item = event.target.value

      hideRcPanels(radioControlEl.dataset.radioControl)
      activatePanel(`[data-rc-panel-uid=${radioControlEl.dataset.radioControl + '_' + item}]`)
    })
  })
}
