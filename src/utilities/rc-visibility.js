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

export { hideRcPanels, activatePanel }