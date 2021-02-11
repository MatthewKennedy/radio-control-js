var radioButtonsContainer = '[data-radio-control]'

document.addEventListener('DOMContentLoaded', function () {
  if (document.querySelector(radioButtonsContainer)) {
    document.querySelectorAll(radioButtonsContainer).forEach(function (elem) {
      var radioControlEl = document.querySelector(`[data-radio-control=${elem.dataset.radioControl}]`)

      initiateRcPanels(radioControlEl)
      monitorRadiosForChange(radioControlEl)
    })
  }
})

function initiateRcPanels (radioControlEl) {
  var selectedRadioValue = radioControlEl.querySelector('input[type=radio]:checked').value

  hideRcPanels(radioControlEl.dataset.radioControl)
  activatePanel(`[data-rc-panel-uid=${radioControlEl.dataset.radioControl + '_' + selectedRadioValue}]`)
}

function monitorRadiosForChange (radioControlEl) {
  radioControlEl.querySelectorAll('input[type=radio]').forEach(function (elem) {
    elem.addEventListener('change', function (event) {
      var item = event.target.value

      hideRcPanels(radioControlEl.dataset.radioControl)
      activatePanel(`[data-rc-panel-uid=${radioControlEl.dataset.radioControl + '_' + item}]`)
    })
  })
}

function hideRcPanels (rcPanelsGroup) {
  var group = document.querySelector(`[data-rc-panel-group=${rcPanelsGroup}]`)

  group.querySelectorAll('[data-rc-panel-uid]').forEach(function (elem) {
    elem.classList.remove('d-block')
    elem.classList.add('d-none')
  })
}

function activatePanel (panel) {
  var active = document.querySelector(panel)

  active.classList.remove('d-none')
  active.classList.add('d-block')
}
