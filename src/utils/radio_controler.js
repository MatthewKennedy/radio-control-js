import { State } from './state.js'

export class RadioControler {
  monitorForChange (radioControlContainerEl) {
    radioControlContainerEl.querySelectorAll('input[type=radio]').forEach(function (elem) {
      elem.addEventListener('change', function (event) {
        const item = event.target.value
        const panelState = new State()

        panelState.deactivate(radioControlContainerEl.dataset.radioControl)
        panelState.activate(`[data-rc-panel-uid=${radioControlContainerEl.dataset.radioControl + '_' + item}]`)
      })
    })
  }
}
