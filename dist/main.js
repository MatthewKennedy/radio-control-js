/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
eval("var radioButtonsContainer = '[data-radio-control]';\ndocument.addEventListener('DOMContentLoaded', function () {\n  if (document.querySelector(radioButtonsContainer)) {\n    document.querySelectorAll(radioButtonsContainer).forEach(function (elem) {\n      var radioControlEl = document.querySelector(\"[data-radio-control=\".concat(elem.dataset.radioControl, \"]\"));\n      initiateRcPanels(radioControlEl);\n      monitorRadiosForChange(radioControlEl);\n    });\n  }\n});\n\nfunction initiateRcPanels(radioControlEl) {\n  var selectedRadioValue = radioControlEl.querySelector('input[type=radio]:checked').value;\n  hideRcPanels(radioControlEl.dataset.radioControl);\n  activatePanel(\"[data-rc-panel-uid=\".concat(radioControlEl.dataset.radioControl + '_' + selectedRadioValue, \"]\"));\n}\n\nfunction monitorRadiosForChange(radioControlEl) {\n  radioControlEl.querySelectorAll('input[type=radio]').forEach(function (elem) {\n    elem.addEventListener('change', function (event) {\n      var item = event.target.value;\n      hideRcPanels(radioControlEl.dataset.radioControl);\n      activatePanel(\"[data-rc-panel-uid=\".concat(radioControlEl.dataset.radioControl + '_' + item, \"]\"));\n    });\n  });\n}\n\nfunction hideRcPanels(rcPanelsGroup) {\n  var group = document.querySelector(\"[data-rc-panel-group=\".concat(rcPanelsGroup, \"]\"));\n  group.querySelectorAll('[data-rc-panel-uid]').forEach(function (elem) {\n    elem.classList.remove('d-block');\n    elem.classList.add('d-none');\n  });\n}\n\nfunction activatePanel(panel) {\n  var active = document.querySelector(panel);\n  active.classList.remove('d-none');\n  active.classList.add('d-block');\n}\n\n//# sourceURL=webpack://radio-control-js/./src/index.js?");
/******/ })()
;